import type { Meta, StoryObj } from "@storybook/react-vite";
import Toolbar1 from "./examples/toolbar/toolbar-1";
import { Preview } from "./preview";

const meta = {
  title: "Components/Toolbar",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Toolbar1Story: Story = {
  name: "Toolbar with toggles, buttons, and select",
  render: () => (
    <Preview>
      <Toolbar1 />
    </Preview>
  ),
};
