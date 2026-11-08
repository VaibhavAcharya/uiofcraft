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

`pnpm generate-stories` downloads the examples again and rewrites both. Do not edit those files by hand. To change how an example is generated, edit `scripts/generate-stories.ts`. It also passes props to the examples that need them and maps the coss `navigation` examples to Segmented Control.

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

Edit the file in `src/components/ui`. Note the change in the table below, because updating that component from coss later overwrites it.

| Component | Change |
|---|---|

### Add your own component

Put it in `src/components/craft/<name>.tsx`, not in `src/components/ui`. The coss update command never touches `craft`, and Biome lint runs on it.

1. Use the theme tokens and `cn` from `@/lib/utils`, the same way the coss components do.
2. Add `"use client";` at the top if it uses hooks, state or event handlers.
3. Add `export * from "./components/craft/<name>";` to `src/index.ts`.
4. Add a story in `stories/<name>.stories.tsx`.

Apps import it from `uiofcraft` or `uiofcraft/craft/<name>`.

## Update from coss ui

Components in `src/components/ui`, `src/hooks` and `src/lib` come from the coss registry:

```sh
pnpm dlx shadcn@latest add @coss/<component> --overwrite
pnpm format
```

Check the diff against the table under "Change a coss component" and apply your changes again. A new component also needs an export line in `src/index.ts`. Then run `pnpm generate-stories` to pick up new or changed examples. To update the theme, run `add @coss/style`. It writes into `src/styles/theme.css` (set in `components.json`), so check the diff for your token and font changes, and move any imports it adds there to `fonts.css`.

## Checks

Run these before you push:

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm build-storybook
```

## Release

Use conventional commits. release-please opens a release PR on `main`. Merging it publishes to npm from `.github/workflows/release.yml`.
