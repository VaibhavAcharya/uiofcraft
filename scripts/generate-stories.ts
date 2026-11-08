import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const registryUrl = "https://coss.com/ui/r";
const storiesDir = join(import.meta.dirname, "..", "stories");
const examplesDir = join(storiesDir, "examples");

const componentForGroup: Record<string, string> = {
  navigation: "segmented-control",
};

const exampleProps: Record<string, string> = {
  "pagination-2": "currentPage={3} totalPages={10}",
  "pagination-3": "totalResults={95}",
};

type RegistryItem = {
  name: string;
  description: string;
  meta?: { className?: string };
  files: { path: string; content: string }[];
};

type Example = {
  group: string;
  number: number;
  description: string;
  previewClassName?: string;
};

const titleCase = (slug: string) =>
  slug
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

const exampleId = (example: Example) =>
  `${titleCase(example.group).replaceAll(" ", "")}${example.number}`;

const rewriteImports = (code: string) =>
  code
    .replaceAll("@/registry/default/ui/", "@/components/ui/")
    .replaceAll("@/registry/default/hooks/", "@/hooks/")
    .replaceAll("@/registry/default/lib/", "@/lib/")
    .replaceAll("@/registry/default/chat-demo/", "./")
    .replaceAll('process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""', '""');

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.json() as Promise<T>;
}

async function fetchExamples(): Promise<RegistryItem[]> {
  const registry = await fetchJson<{ items: { name: string }[] }>(
    `${registryUrl}/registry.json`,
  );
  const names = registry.items
    .map((item) => item.name)
    .filter((name) => /^p-.+-\d+$/.test(name));
  const items: RegistryItem[] = [];
  for (let i = 0; i < names.length; i += 16) {
    const batch = names.slice(i, i + 16);
    items.push(
      ...(await Promise.all(
        batch.map((name) =>
          fetchJson<RegistryItem>(`${registryUrl}/${name}.json`),
        ),
      )),
    );
  }
  return items;
}

function storyFile(component: string, examples: Example[]) {
  const imports = examples
    .map(
      (example) =>
        `import ${exampleId(example)} from "./examples/${component}/${example.group}-${example.number}";`,
    )
    .join("\n");
  const stories = examples
    .map((example) => {
      const props = exampleProps[`${example.group}-${example.number}`];
      const previewProps = example.previewClassName
        ? ` className=${JSON.stringify(example.previewClassName)}`
        : "";
      return `export const ${exampleId(example)}Story: Story = {
  name: ${JSON.stringify(example.description)},
  render: () => (
    <Preview${previewProps}>
      <${exampleId(example)}${props ? ` ${props}` : ""} />
    </Preview>
  ),
};`;
    })
    .join("\n\n");

  return `import type { Meta, StoryObj } from "@storybook/react-vite";
import { Preview } from "./preview";
${imports}

const meta = {
  title: "Components/${titleCase(component)}",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

${stories}
`;
}

const items = await fetchExamples();

rmSync(examplesDir, { recursive: true, force: true });
for (const file of readdirSync(storiesDir)) {
  if (file.endsWith(".generated.stories.tsx")) {
    rmSync(join(storiesDir, file));
  }
}

const examplesByComponent = new Map<string, Example[]>();

for (const item of items) {
  const [, group, number] = item.name.match(/^p-(.+)-(\d+)$/) ?? [];
  const component = componentForGroup[group] ?? group;
  const dir = join(examplesDir, component);
  mkdirSync(dir, { recursive: true });

  for (const file of item.files) {
    const fileName = file.path.split("/").pop() ?? file.path;
    const target = fileName.startsWith("p-")
      ? `${group}-${number}.tsx`
      : fileName;
    writeFileSync(join(dir, target), rewriteImports(file.content));
  }

  const examples = examplesByComponent.get(component) ?? [];
  examples.push({
    group,
    number: Number(number),
    description: item.description,
    previewClassName: item.meta?.className,
  });
  examplesByComponent.set(component, examples);
}

for (const [component, examples] of examplesByComponent) {
  examples.sort((a, b) =>
    a.group === b.group ? a.number - b.number : a.group.localeCompare(b.group),
  );
  writeFileSync(
    join(storiesDir, `${component}.generated.stories.tsx`),
    storyFile(component, examples),
  );
}

console.log(
  `${items.length} examples in ${examplesByComponent.size} story files`,
);
