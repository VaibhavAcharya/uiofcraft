import type { Meta, StoryObj } from "@storybook/react-vite";
import Frame1 from "./examples/frame/frame-1";
import Frame2 from "./examples/frame/frame-2";
import Frame3 from "./examples/frame/frame-3";
import Frame4 from "./examples/frame/frame-4";
import { Preview } from "./preview";

const meta = {
  title: "Components/Frame",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Frame1Story: Story = {
  name: "Basic frame",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full">
      <Frame1 />
    </Preview>
  ),
};

export const Frame2Story: Story = {
  name: "Frame with collapsible content and delete button",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full">
      <Frame2 />
    </Preview>
  ),
};

export const Frame3Story: Story = {
  name: "Frame with multiple separated panels",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full">
      <Frame3 />
    </Preview>
  ),
};

export const Frame4Story: Story = {
  name: "Frame with multiple stacked panels",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full">
      <Frame4 />
    </Preview>
  ),
};
