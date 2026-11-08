import type { Meta, StoryObj } from "@storybook/react-vite";
import Skeleton1 from "./examples/skeleton/skeleton-1";
import Skeleton2 from "./examples/skeleton/skeleton-2";
import { Preview } from "./preview";

const meta = {
  title: "Components/Skeleton",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Skeleton1Story: Story = {
  name: "Basic skeleton",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:flex **:data-[slot=preview]:justify-center">
      <Skeleton1 />
    </Preview>
  ),
};

export const Skeleton2Story: Story = {
  name: "Skeleton only",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:flex **:data-[slot=preview]:justify-center">
      <Skeleton2 />
    </Preview>
  ),
};
