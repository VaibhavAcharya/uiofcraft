import type { Meta, StoryObj } from "@storybook/react-vite";
import Kbd1 from "./examples/kbd/kbd-1";
import { Preview } from "./preview";

const meta = {
  title: "Components/Kbd",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Kbd1Story: Story = {
  name: "Keyboard shortcuts display",
  render: () => (
    <Preview>
      <Kbd1 />
    </Preview>
  ),
};
