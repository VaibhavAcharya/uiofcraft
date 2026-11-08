import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Foundations",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const sample = "The quick brown fox jumps over the lazy dog 0123456789";

const fonts = [
  { name: "--font-sans", className: "font-sans" },
  { name: "--font-heading", className: "font-heading" },
  { name: "--font-mono", className: "font-mono" },
];

export const Typography: Story = {
  render: () => (
    <div className="flex flex-col gap-8 text-foreground">
      {fonts.map((font) => (
        <div
          key={font.name}
          className={`flex flex-col gap-2 ${font.className}`}
        >
          <code className="font-mono text-muted-foreground text-xs">
            {font.name}
          </code>
          <p className="font-semibold text-3xl">{sample}</p>
          <p className="text-base">{sample}</p>
          <p className="text-sm">{sample}</p>
          <p className="text-muted-foreground text-xs">{sample}</p>
        </div>
      ))}
    </div>
  ),
};

const colors = [
  ["background", "foreground"],
  ["card", "card-foreground"],
  ["popover", "popover-foreground"],
  ["primary", "primary-foreground"],
  ["secondary", "secondary-foreground"],
  ["muted", "muted-foreground"],
  ["accent", "accent-foreground"],
  ["destructive", "destructive-foreground"],
  ["info", "info-foreground"],
  ["success", "success-foreground"],
  ["warning", "warning-foreground"],
  ["border", "input"],
  ["ring", "code"],
];

export const Colors: Story = {
  render: () => (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-3 text-foreground">
      {colors.flat().map((token) => (
        <div
          key={token}
          className="flex items-center gap-3 rounded-lg border p-2 text-sm"
        >
          <div
            className="size-10 shrink-0 rounded-md border"
            style={{ background: `var(--${token})` }}
          />
          <code className="font-mono text-xs">--{token}</code>
        </div>
      ))}
    </div>
  ),
};
