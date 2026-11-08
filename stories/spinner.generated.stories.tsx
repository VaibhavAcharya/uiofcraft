import type { Meta, StoryObj } from "@storybook/react-vite";
import Spinner1 from "./examples/spinner/spinner-1";
import { Preview } from "./preview";

const meta = {
  title: "Components/Spinner",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Spinner1Story: Story = {
  name: "Basic spinner",
  render: () => (
    <Preview>
      <Spinner1 />
    </Preview>
  ),
};
