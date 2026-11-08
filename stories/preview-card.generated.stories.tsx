import type { Meta, StoryObj } from "@storybook/react-vite";
import PreviewCard1 from "./examples/preview-card/preview-card-1";
import { Preview } from "./preview";

const meta = {
  title: "Components/Preview Card",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const PreviewCard1Story: Story = {
  name: "Preview card with popup",
  render: () => (
    <Preview>
      <PreviewCard1 />
    </Preview>
  ),
};
