# uiofcraft

React components, styles and fonts shared across my projects. Built on [coss ui](https://coss.com/ui), which uses [Base UI](https://base-ui.com) and Tailwind CSS v4.

## Install

```sh
pnpm add uiofcraft
```

Needs React 19 and Tailwind CSS v4 in the app.

## Use

Import the styles after Tailwind in your main stylesheet:

```css
@import "tailwindcss";
@import "uiofcraft/styles.css";
```

`styles.css` has the fonts and the theme. To bring your own fonts, import `uiofcraft/theme.css` instead and set `--font-sans`, `--font-mono` and `--font-heading`.

Import components from the root or from one component entry:

```tsx
import { Button } from "uiofcraft";
import { Dialog, DialogPopup, DialogTrigger } from "uiofcraft/dialog";
```

Dark mode follows the `dark` class on an ancestor, usually `<html>`.

## Exports

| Path | What |
|---|---|
| `uiofcraft` | All components, `useMediaQuery` and `cn` |
| `uiofcraft/<component>` | One component file, for example `uiofcraft/button` |
| `uiofcraft/craft/<component>` | One of my own components |
| `uiofcraft/hooks/<hook>` | One hook, for example `uiofcraft/hooks/use-media-query` |
| `uiofcraft/styles.css` | Fonts and theme |
| `uiofcraft/theme.css` | Theme tokens, base styles and `@source` for the components |
| `uiofcraft/fonts.css` | Inter and Geist Mono |

## Develop

See [MAINTAINING.md](MAINTAINING.md) for local testing, customizing the theme and fonts, adding components, updating from coss ui, and releases.

## License

MIT. Includes code from coss ui, MIT, copyright coss.com and Origin UI.
