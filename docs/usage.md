# Using uiofcraft

How to build UI with uiofcraft in an app. Read this before you add or change UI. The component reference is in [components/README.md](./components/README.md).

## Setup

uiofcraft needs React 19 and Tailwind CSS v4.

```sh
pnpm add uiofcraft
```

Import the styles in the app's main stylesheet, after Tailwind:

```css
@import "tailwindcss";
@import "uiofcraft/styles.css";
```

`styles.css` brings the fonts (DM Sans and Lilex) and the theme. To use other fonts, import `uiofcraft/theme.css` instead and set `--font-sans`, `--font-heading` and `--font-mono` in your own `@theme`.

If the app shows toasts, render the providers once around the app:

```tsx
import { AnchoredToastProvider, ToastProvider } from "uiofcraft";

export function App({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <AnchoredToastProvider>{children}</AnchoredToastProvider>
    </ToastProvider>
  );
}
```

Then call `toastManager.add({ title, description })` from anywhere. See [components/toast.md](./components/toast.md).

## Rules

### Use the components that exist

Check [components/README.md](./components/README.md) before you write a new button, input, dialog, menu or layout piece. Import from `uiofcraft`:

```tsx
import { Button, Dialog, DialogPopup, DialogTrigger } from "uiofcraft";
```

Do not copy component source into the app. If a component is missing a feature, wrap it in the app, or add it to uiofcraft.

### Compose with `render`, not `asChild`

uiofcraft is built on [Base UI](https://base-ui.com), not Radix. There is no `asChild` prop. To change the element a component renders, or to merge two components, pass an element to `render`:

```tsx
<Button render={<a href="/pricing" />}>Pricing</Button>

<DialogTrigger render={<Button variant="outline" />}>Open</DialogTrigger>
```

The component's props, classes and event handlers merge onto the element you pass. shadcn/ui code written with `asChild` needs this change before it works here.

### Style with theme tokens

Use the token classes, not raw Tailwind palette colors, so light and dark mode both work:

- Surfaces: `bg-background`, `bg-card`, `bg-popover`, `bg-muted`, `bg-accent`
- Text: `text-foreground`, `text-muted-foreground`, and `text-<surface>-foreground` on a matching surface
- Actions and states: `primary`, `secondary`, `destructive`, `info`, `success`, `warning`, each with a `-foreground` pair
- Lines: `border` (the default border color), `border-input`, `ring`
- Fonts: `font-sans`, `font-heading`, `font-mono`

Pass `className` to adjust a component. Classes merge with tailwind-merge, so `className="w-full"` overrides the component's width instead of fighting it. Use `cn` from `uiofcraft` for conditional classes in your own components.

Use the component variants before custom classes, for example `<Button variant="outline" size="sm">` or `<Badge variant="success">`. The component pages list the variants.

### Dark mode

Dark mode is on when an ancestor has the `dark` class, usually `<html class="dark">`. Do not use `dark:` overrides for colors that tokens already cover.

### Icons

Use [Phosphor](https://phosphoricons.com) icons from `@phosphor-icons/react/ssr`, the same set the components use:

```tsx
import { PlusIcon } from "@phosphor-icons/react/ssr";

<Button>
  <PlusIcon />
  New project
</Button>
```

Inside buttons, inputs, menus and similar components, icons are sized automatically. Add a `size-*` class only to change that.

### Server components

Interactive components are marked `"use client"`, so you can import them in React Server Components. Event handlers and state still have to live in a client component.

## Component reference

Each page in [components](./components/README.md) has the exports, a usage example and the component's own props. Some pages also have longer examples. For the underlying primitives and every prop, see the [Base UI docs](https://base-ui.com/react/overview/quick-start).
