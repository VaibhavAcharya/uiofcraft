import type { Meta, StoryObj } from "@storybook/react-vite";
import ContextMenu1 from "./examples/context-menu/context-menu-1";
import ContextMenu2 from "./examples/context-menu/context-menu-2";
import ContextMenu3 from "./examples/context-menu/context-menu-3";
import ContextMenu4 from "./examples/context-menu/context-menu-4";
import ContextMenu5 from "./examples/context-menu/context-menu-5";
import ContextMenu6 from "./examples/context-menu/context-menu-6";
import ContextMenu7 from "./examples/context-menu/context-menu-7";
import ContextMenu8 from "./examples/context-menu/context-menu-8";
import { Preview } from "./preview";

const meta = {
  title: "Components/Context Menu",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const ContextMenu1Story: Story = {
  name: "Basic context menu",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-sm">
      <ContextMenu1 />
    </Preview>
  ),
};

export const ContextMenu2Story: Story = {
  name: "Context menu with link items",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-sm">
      <ContextMenu2 />
    </Preview>
  ),
};

export const ContextMenu3Story: Story = {
  name: "Nested context menu",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-sm">
      <ContextMenu3 />
    </Preview>
  ),
};

export const ContextMenu4Story: Story = {
  name: "Context menu with checkbox items",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-sm">
      <ContextMenu4 />
    </Preview>
  ),
};

export const ContextMenu5Story: Story = {
  name: "Context menu with group labels",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-sm">
      <ContextMenu5 />
    </Preview>
  ),
};

export const ContextMenu6Story: Story = {
  name: "Context menu with icons",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-sm">
      <ContextMenu6 />
    </Preview>
  ),
};

export const ContextMenu7Story: Story = {
  name: "Context menu with radio group",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-sm">
      <ContextMenu7 />
    </Preview>
  ),
};

export const ContextMenu8Story: Story = {
  name: "Context menu with switch checkbox items",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-sm">
      <ContextMenu8 />
    </Preview>
  ),
};
