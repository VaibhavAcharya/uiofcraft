import type { Meta, StoryObj } from "@storybook/react-vite";
import { SidebarExample as Example } from "./sidebar-example";

const meta = {
  title: "Components/Sidebar",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Example />,
};

export const CollapsibleToIcons: Story = {
  name: "Collapsible to icons",
  render: () => <Example collapsible="icon" />,
};

export const Inset: Story = {
  render: () => <Example variant="inset" />,
};

export const Floating: Story = {
  render: () => <Example variant="floating" />,
};
