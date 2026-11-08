import type { Meta, StoryObj } from "@storybook/react-vite";
import Empty1 from "./examples/empty/empty-1";
import { Preview } from "./preview";

const meta = {
  title: "Components/Empty",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty1Story: Story = {
  name: "Empty state with icon and actions",
  render: () => (
    <Preview>
      <Empty1 />
    </Preview>
  ),
};
