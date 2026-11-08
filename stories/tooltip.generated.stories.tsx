import type { Meta, StoryObj } from "@storybook/react-vite";
import Tooltip1 from "./examples/tooltip/tooltip-1";
import Tooltip2 from "./examples/tooltip/tooltip-2";
import Tooltip3 from "./examples/tooltip/tooltip-3";
import Tooltip4 from "./examples/tooltip/tooltip-4";
import { Preview } from "./preview";

const meta = {
  title: "Components/Tooltip",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tooltip1Story: Story = {
  name: "Basic tooltip",
  render: () => (
    <Preview>
      <Tooltip1 />
    </Preview>
  ),
};

export const Tooltip2Story: Story = {
  name: "Grouped tooltips",
  render: () => (
    <Preview>
      <Tooltip2 />
    </Preview>
  ),
};

export const Tooltip3Story: Story = {
  name: "Toggle group animated tooltip",
  render: () => (
    <Preview>
      <Tooltip3 />
    </Preview>
  ),
};

export const Tooltip4Story: Story = {
  name: "Vertical group with animated tooltip",
  render: () => (
    <Preview>
      <Tooltip4 />
    </Preview>
  ),
};
