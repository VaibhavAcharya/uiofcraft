import type { Meta, StoryObj } from "@storybook/react-vite";
import ScrollArea1 from "./examples/scroll-area/scroll-area-1";
import ScrollArea2 from "./examples/scroll-area/scroll-area-2";
import ScrollArea3 from "./examples/scroll-area/scroll-area-3";
import ScrollArea4 from "./examples/scroll-area/scroll-area-4";
import ScrollArea5 from "./examples/scroll-area/scroll-area-5";
import { Preview } from "./preview";

const meta = {
  title: "Components/Scroll Area",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const ScrollArea1Story: Story = {
  name: "Basic scroll area",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <ScrollArea1 />
    </Preview>
  ),
};

export const ScrollArea2Story: Story = {
  name: "Horizontal scroll area",
  render: () => (
    <Preview>
      <ScrollArea2 />
    </Preview>
  ),
};

export const ScrollArea3Story: Story = {
  name: "Scroll area with both directions",
  render: () => (
    <Preview>
      <ScrollArea3 />
    </Preview>
  ),
};

export const ScrollArea4Story: Story = {
  name: "Scroll area with fading edges",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <ScrollArea4 />
    </Preview>
  ),
};

export const ScrollArea5Story: Story = {
  name: "Horizontal scroll area with scrollbar gutter",
  render: () => (
    <Preview>
      <ScrollArea5 />
    </Preview>
  ),
};
