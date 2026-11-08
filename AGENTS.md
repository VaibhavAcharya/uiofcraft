# uiofcraft

React component library on npm (`uiofcraft`), built on coss ui (Base UI + Tailwind v4). See `README.md` for usage and `MAINTAINING.md` for local testing, customizing, updating from coss and releases.

## Layout

- `src/components/ui`, `src/hooks`, `src/lib`: code from the coss registry, pulled with `pnpm dlx shadcn@latest add @coss/<name>`. Biome lint is off for these paths (except `src/lib/utils.ts`) so they stay close to upstream.
- `src/components/craft`: our own components. Exported as `uiofcraft/craft/<name>` and from `src/index.ts`.
- `src/index.ts`: barrel export, one line per component file.
- `src/styles`: `theme.css` (tokens, base styles, `@source "../components"`), `fonts.css`, `index.css` (both).
- `stories`: Storybook stories, not published.

## Build

- `tsdown` builds each source file to `dist` without bundling, so every file keeps its `"use client"` directive. The `@/` alias is rewritten to relative paths.
- `src/styles` is copied to `dist/styles` as is. Consumers compile it with their own Tailwind.
- React, React DOM and Tailwind are peer dependencies.

## Checks

Run `pnpm typecheck`, `pnpm lint`, `pnpm build` and `pnpm build-storybook` before handing back work.
