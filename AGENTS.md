# uiofcraft

React component library on npm (`uiofcraft`), built on coss ui (Base UI + Tailwind v4). See `README.md` for usage and `MAINTAINING.md` for local testing, customizing, updating from coss and releases.

## Layout

- `src/components/ui`, `src/hooks`, `src/lib`: code from the coss registry, pulled with `pnpm dlx shadcn@latest add @coss/<name>`. Biome lint is off for these paths (except `src/lib/utils.ts`) so they stay close to upstream. Icons are Phosphor: run `pnpm icons` after pulling from coss, which uses Lucide.
- `src/components/craft`: our own components. Exported as `uiofcraft/craft/<name>` and from `src/index.ts`.
- `src/index.ts`: barrel export, one line per component file.
- `src/styles`: `theme.css` (tokens, base styles, `@source "../components"`), `fonts.css`, `index.css` (both).
- `stories`: Storybook stories, not published. `stories/examples` and `*.generated.stories.tsx` come from `pnpm generate-stories` (`scripts/generate-stories.ts`) and are not edited by hand.

## Differences from coss ui

Fonts are DM Sans and Lilex, icons are Phosphor (`@phosphor-icons/react/ssr`), and example text says uiofcraft. A coss update undoes some of this. The full list and the restore steps are in "Differences from coss ui" in `MAINTAINING.md`. Add a row there for every change you make to a file in `src/components/ui`.

## Build

- `tsdown` builds each source file to `dist` without bundling, so every file keeps its `"use client"` directive. The `@/` alias is rewritten to relative paths.
- `src/styles` is copied to `dist/styles` as is. Consumers compile it with their own Tailwind.
- React, React DOM and Tailwind are peer dependencies.

## Checks

Run `pnpm lint`, `pnpm typecheck`, `pnpm build` and `pnpm test:stories` before handing back work. `pnpm test:stories` renders every story in headless Chromium and checks the Snapshot page for overflow. A passing Storybook build alone does not mean the stories render.
