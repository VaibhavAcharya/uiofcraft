import type { Meta, StoryObj } from "@storybook/react-vite";
import Collapsible1 from "./examples/collapsible/collapsible-1";
import { Preview } from "./preview";

const meta = {
  title: "Components/Collapsible",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Collapsible1Story: Story = {
  name: "Basic collapsible",
  render: () => (
    <Preview>
      <Collapsible1 />
    </Preview>
  ),
};
