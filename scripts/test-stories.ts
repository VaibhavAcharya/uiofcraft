import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import type { AddressInfo } from "node:net";
import { extname, join, normalize } from "node:path";
import { chromium, type Page } from "playwright";

const staticDir = join(import.meta.dirname, "..", "storybook-static");
const themes = ["light", "dark"];
const workers = 8;

const contentTypes: Record<string, string> = {
  ".css": "text/css",
  ".html": "text/html",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const server = createServer(async (request, response) => {
  const pathname = new URL(request.url ?? "/", "http://localhost").pathname;
  const file = join(
    staticDir,
    normalize(pathname === "/" ? "/index.html" : pathname),
  );
  try {
    const body = await readFile(file);
    response.writeHead(200, {
      "content-type": contentTypes[extname(file)] ?? "application/octet-stream",
    });
    response.end(body);
  } catch {
    response.writeHead(404).end();
  }
});

await new Promise<void>((resolve) => server.listen(0, resolve));
const origin = `http://localhost:${(server.address() as AddressInfo).port}`;

const index = JSON.parse(
  await readFile(join(staticDir, "index.json"), "utf8"),
) as { entries: Record<string, { id: string; type: string }> };
const storyIds = Object.values(index.entries)
  .filter((entry) => entry.type === "story")
  .map((entry) => entry.id);

const browser = await chromium.launch();
const failures: string[] = [];

async function renderErrors(page: Page, id: string) {
  const errors = new Set<string>();
  const onConsole = (message: { type(): string; text(): string }) => {
    if (message.type() === "error") errors.add(message.text());
  };
  const onPageError = (error: Error) => errors.add(String(error));
  page.on("console", onConsole);
  page.on("pageerror", onPageError);

  for (const theme of themes) {
    await page.goto(
      `${origin}/iframe.html?id=${id}&viewMode=story&globals=theme:${theme}`,
    );
    await page
      .waitForSelector("#storybook-root > *, .sb-show-errordisplay", {
        timeout: 10_000,
      })
      .catch(() => errors.add(`${theme}: nothing rendered in 10s`));
    const shownError = await page.evaluate(() =>
      document.body.classList.contains("sb-show-errordisplay")
        ? document.querySelector("#error-message")?.textContent
        : null,
    );
    if (shownError) errors.add(`${theme}: ${shownError}`);
  }

  page.off("console", onConsole);
  page.off("pageerror", onPageError);
  return [...errors];
}

let next = 0;
await Promise.all(
  Array.from({ length: workers }, async () => {
    const page = await browser.newPage();
    while (next < storyIds.length) {
      const id = storyIds[next++];
      for (const error of await renderErrors(page, id)) {
        failures.push(`${id}: ${error.slice(0, 300)}`);
      }
    }
    await page.close();
  }),
);

for (const width of [390, 1280]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto(
    `${origin}/iframe.html?id=snapshot--all-components&viewMode=story`,
  );
  await page.waitForTimeout(2000);
  const overflowing = await page.evaluate(() => {
    const isShown = (element: Element) => {
      for (
        let node: Element | null = element;
        node && node !== document.body;
        node = node.parentElement
      ) {
        const style = getComputedStyle(node);
        if (
          style.opacity === "0" ||
          style.visibility === "hidden" ||
          style.clipPath !== "none" ||
          style.clip !== "auto" ||
          style.position === "fixed"
        ) {
          return false;
        }
      }
      return true;
    };
    return [
      ...document.querySelectorAll("#storybook-root section:has(> header)"),
    ]
      .filter((section) => {
        const box = section.getBoundingClientRect();
        return [...section.querySelectorAll("*")].some((element) => {
          const rect = element.getBoundingClientRect();
          return (
            rect.width > 1 &&
            rect.height > 1 &&
            (rect.right > box.right + 1 || rect.left < box.left - 1) &&
            !element.closest('[class*="overflow-x-auto"]') &&
            isShown(element)
          );
        });
      })
      .map(
        (section) => section.querySelector(":scope > header h2")?.textContent,
      );
  });
  for (const title of overflowing) {
    failures.push(`snapshot at ${width}px: ${title} overflows its card`);
  }
  await page.close();
}

await browser.close();
server.close();

console.log(`Checked ${storyIds.length} stories in ${themes.join(" and ")}`);
if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}
