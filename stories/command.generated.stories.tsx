import type { Meta, StoryObj } from "@storybook/react-vite";
import Command1 from "./examples/command/command-1";
import Command2 from "./examples/command/command-2";
import { Preview } from "./preview";

const meta = {
  title: "Components/Command",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Command1Story: Story = {
  name: "Command palette with dialog",
  render: () => (
    <Preview>
      <Command1 />
    </Preview>
  ),
};

export const Command2Story: Story = {
  name: "Command palette with AI assistant",
  render: () => (
    <Preview>
      <Command2 />
    </Preview>
  ),
};
