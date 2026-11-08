import type { Meta, StoryObj } from "@storybook/react-vite";
import Sheet1 from "./examples/sheet/sheet-1";
import Sheet2 from "./examples/sheet/sheet-2";
import Sheet3 from "./examples/sheet/sheet-3";
import { Preview } from "./preview";

const meta = {
  title: "Components/Sheet",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sheet1Story: Story = {
  name: "Basic sheet",
  render: () => (
    <Preview>
      <Sheet1 />
    </Preview>
  ),
};

export const Sheet2Story: Story = {
  name: "Sheet inset",
  render: () => (
    <Preview>
      <Sheet2 />
    </Preview>
  ),
};

export const Sheet3Story: Story = {
  name: "Sheet position",
  render: () => (
    <Preview>
      <Sheet3 />
    </Preview>
  ),
};
