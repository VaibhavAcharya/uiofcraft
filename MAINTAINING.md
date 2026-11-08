# Maintaining uiofcraft

## Test locally

### Storybook

```sh
pnpm install
pnpm storybook
```

Open http://localhost:6008. Edits in `src` reload right away. The toolbar switches between light and dark. `Foundations` shows the fonts and color tokens, so start there when you try new fonts or colors.

Every component has stories. Most come from the coss ui examples:

- `stories/examples/<component>/`: the coss examples, with imports rewritten to this repo. Biome lint is off for them.
- `stories/<component>.generated.stories.tsx`: one story per example.
- `stories/preview.tsx`: wraps each example with the width coss uses on its docs site.

`pnpm generate-stories` downloads the examples again and rewrites both. Do not edit those files by hand. To change how an example is generated, edit `scripts/generate-stories.ts`. It also passes props to the examples that need them, maps the coss `navigation` examples to Segmented Control, and replaces coss names, URLs and emails in the example text with uiofcraft (`rebrand`).

`Preview` scrolls horizontally when an example is wider than its box, for example Toolbar and Table on a phone.

`Snapshot` is the Storybook homepage (`storySort` in `.storybook/preview.tsx`). It starts with the package name, the coss ui and Base UI credit, and the install command. Then it shows every component on one page: the first coss example of each component from the generated `stories/examples/index.ts`, plus Label and Sidebar. The page is in `stories/snapshot.stories.tsx`. Calendar and Progress use fixed values there (`fixedExamples`), because their coss examples show today's date and a random animated value. Keep the page the same on every load, so it can be used for visual tests.

Label and Sidebar have no coss examples, so their stories are written by hand in `stories/label.stories.tsx` and `stories/sidebar.stories.tsx`. Stories for your own components are also written by hand.

Storybook wraps every story in `ToastProvider` and `AnchoredToastProvider` (`.storybook/preview.tsx`). Some examples import `next/link`, which `.storybook/next-link.tsx` replaces with a plain `<a>`.

### In a real app

Build in watch mode in this repo:

```sh
pnpm dev
```

In the app, link the local copy:

```sh
pnpm add link:../uiofcraft
```

Then make Vite use the app's React. Without this, the app loads two copies of React and fails with `Cannot read properties of null (reading 'useRef')`:

```ts
// vite.config.ts
export default defineConfig({
  resolve: { dedupe: ["react", "react-dom"] },
});
```

Add the styles to the app's main stylesheet:

```css
@import "tailwindcss";
@import "uiofcraft/styles.css";
```

Changes to components and CSS rebuild into `dist`, and the app's dev server picks them up.

When you are done, put the app back on the npm version with `pnpm add uiofcraft` and remove the `dedupe` line.

### As the published package

To test exactly what npm will get:

```sh
pnpm build
npm pack
```

Then in the app run `pnpm add ../uiofcraft/uiofcraft-<version>.tgz`. The tarball needs no `dedupe`.

## Customize

### Theme

Color, radius and base styles are in `src/styles/theme.css`. Light values are in `:root` and dark values are in `.dark`. Components use the tokens through Tailwind (`bg-primary`, `text-muted-foreground`), so changing a token changes every component that uses it.

### Fonts

Fonts are set in two places:

1. `src/styles/fonts.css` imports the font files.
2. `src/styles/theme.css` sets `--font-sans`, `--font-heading` and `--font-mono` in `@theme inline`.

To change a font, for example to IBM Plex Sans:

```sh
pnpm add @fontsource-variable/ibm-plex-sans
```

Replace the import in `fonts.css` with `@import "@fontsource-variable/ibm-plex-sans";` and set `--font-sans: 'IBM Plex Sans Variable', sans-serif;` in `theme.css`. Fontsource variable packages use the font name followed by `Variable` as the family name. Remove the old package when nothing imports it anymore.

### Change a coss component

Edit the file in `src/components/ui`, then add a row to "Differences from coss ui" below. Updating that component from coss overwrites the file, and the table is how you know what to put back.

### Add your own component

Put it in `src/components/craft/<name>.tsx`, not in `src/components/ui`. The coss update command never touches `craft`, and Biome lint runs on it.

1. Use the theme tokens and `cn` from `@/lib/utils`, the same way the coss components do.
2. Add `"use client";` at the top if it uses hooks, state or event handlers.
3. Add `export * from "./components/craft/<name>";` to `src/index.ts`.
4. Add a story in `stories/<name>.stories.tsx`.

Apps import it from `uiofcraft` or `uiofcraft/craft/<name>`.

## Differences from coss ui

uiofcraft starts from coss ui and changes these things. A coss update can undo the ones marked "Yes", so check them after every update.

| What | Where | Undone by a coss update | How to restore |
|---|---|---|---|
| Phosphor icons instead of Lucide | 17 files in `src/components/ui` | Yes, every overwritten component | `pnpm icons` |
| DM Sans and Lilex instead of Inter and Geist Mono | `src/styles/fonts.css`, `--font-*` in `src/styles/theme.css` | Yes, by `add @coss/style` | See "Update the theme" below |
| Theme split into `fonts.css`, `theme.css` and `index.css`, with `@source "../components"` in `theme.css` | `src/styles` | `add @coss/style` keeps the split, but adds font imports to `theme.css` | See "Update the theme" below |
| Dependencies the coss CLI adds but nothing here uses: `cn`, `geist`, `tw-animate-css`, `@fontsource-variable/inter`, `lucide-react` | `package.json` | Yes, by `add @coss/style` and possibly by single components | `pnpm remove` them |
| `useCopyToClipboard` hook | `src/hooks/use-copy-to-clipboard.ts` | No. It comes from the coss registry (`@coss/use-copy-to-clipboard`), it is just not part of `@coss/ui` | Nothing |
| Example text says uiofcraft instead of coss | `stories/examples` | No, `pnpm generate-stories` does it (`rebrand`) | Nothing |

## Update from coss ui

Components in `src/components/ui`, `src/hooks` and `src/lib` come from the coss registry.

### Update components

```sh
pnpm dlx shadcn@latest add @coss/<component> --overwrite
pnpm icons
```

coss uses Lucide icons. `pnpm icons` switches them to Phosphor (`@phosphor-icons/react/ssr`, the same as stateofpixel), using the map in `scripts/phosphor-icons.ts`, and formats the files. It fails and names the icon when a new Lucide icon has no entry in the map. Add the entry and run it again. `pnpm generate-stories` does the same for the examples.

Then:

1. Check the diff against "Differences from coss ui" and put back any component change listed there.
2. Remove the dependencies from that table if they show up in `package.json` again.
3. A new component also needs an export line in `src/index.ts`.
4. Run `pnpm generate-stories` to pick up new or changed examples.

### Update the theme

```sh
pnpm dlx shadcn@latest add @coss/style --overwrite
pnpm icons
```

`@coss/style` also brings every component, so the steps above apply too. It writes into `src/styles/theme.css` (set in `components.json`) and changes it like this:

- Adds `@import "@fontsource-variable/inter";` and `@import "geist";` at the top. Delete them. Font imports belong in `fonts.css`.
- Sets `--font-heading`, `--font-sans` and `--font-mono` back to Inter and Geist Mono. Set them back to `"DM Sans Variable"` and `"Lilex Variable"`.
- Rewrites tokens and keyframes. Check the diff for changes you want to keep.

Then run `pnpm remove cn geist tw-animate-css @fontsource-variable/inter lucide-react` and `pnpm format`.

## Checks

Run these before you push:

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm test:stories
```

`pnpm test:stories` builds Storybook and opens every story in light and dark mode in headless Chromium. It fails when a story throws, logs a console error, shows the Storybook error screen, or renders nothing within 10 seconds. It also fails when a component overflows its card on the Snapshot page at 390px or 1280px wide. It takes about 30 seconds. The first run on a new machine needs `pnpm exec playwright install chromium`.

## Repo setup

- `pnpm-workspace.yaml` allows the `esbuild` install script. Storybook and Vite depend on esbuild, and pnpm blocks install scripts that are not allowed, which fails `pnpm install`.
- The GitHub repo is `VaibhavAcharya/uiofcraft`. `package.json` points there.
- The release workflow publishes with npm trusted publishing (`id-token: write`, no token secret), the same as mdt. The `uiofcraft` package on npm needs this repo and `release.yml` added as a trusted publisher.

## Release

Use conventional commits. release-please opens a release PR on `main`. Merging it publishes to npm from `.github/workflows/release.yml`.
