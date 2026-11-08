import type { Meta, StoryObj } from "@storybook/react-vite";
import Progress1 from "./examples/progress/progress-1";
import Progress2 from "./examples/progress/progress-2";
import Progress3 from "./examples/progress/progress-3";
import { Preview } from "./preview";

const meta = {
  title: "Components/Progress",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Progress1Story: Story = {
  name: "Basic progress bar",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Progress1 />
    </Preview>
  ),
};

export const Progress2Story: Story = {
  name: "Progress with label and value",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Progress2 />
    </Preview>
  ),
};

export const Progress3Story: Story = {
  name: "Progress with formatted value",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Progress3 />
    </Preview>
  ),
};
