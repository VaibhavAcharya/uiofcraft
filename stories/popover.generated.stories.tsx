import type { Meta, StoryObj } from "@storybook/react-vite";
import Popover1 from "./examples/popover/popover-1";
import Popover2 from "./examples/popover/popover-2";
import Popover3 from "./examples/popover/popover-3";
import Popover4 from "./examples/popover/popover-4";
import { Preview } from "./preview";

const meta = {
  title: "Components/Popover",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Popover1Story: Story = {
  name: "Popover with a form",
  render: () => (
    <Preview>
      <Popover1 />
    </Preview>
  ),
};

export const Popover2Story: Story = {
  name: "Popover with close button",
  render: () => (
    <Preview>
      <Popover2 />
    </Preview>
  ),
};

export const Popover3Story: Story = {
  name: "Animated popovers",
  render: () => (
    <Preview>
      <Popover3 />
    </Preview>
  ),
};

export const Popover4Story: Story = {
  name: "Split button with popover to confirm multiple occurrences",
  render: () => (
    <Preview>
      <Popover4 />
    </Preview>
  ),
};
