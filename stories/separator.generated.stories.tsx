import type { Meta, StoryObj } from "@storybook/react-vite";
import Separator1 from "./examples/separator/separator-1";
import { Preview } from "./preview";

const meta = {
  title: "Components/Separator",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Separator1Story: Story = {
  name: "Separator with horizontal and vertical orientations",
  render: () => (
    <Preview>
      <Separator1 />
    </Preview>
  ),
};
