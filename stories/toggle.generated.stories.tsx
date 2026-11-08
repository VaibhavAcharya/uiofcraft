import type { Meta, StoryObj } from "@storybook/react-vite";
import Toggle1 from "./examples/toggle/toggle-1";
import Toggle2 from "./examples/toggle/toggle-2";
import Toggle3 from "./examples/toggle/toggle-3";
import Toggle4 from "./examples/toggle/toggle-4";
import Toggle5 from "./examples/toggle/toggle-5";
import Toggle6 from "./examples/toggle/toggle-6";
import Toggle7 from "./examples/toggle/toggle-7";
import Toggle8 from "./examples/toggle/toggle-8";
import { Preview } from "./preview";

const meta = {
  title: "Components/Toggle",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Toggle1Story: Story = {
  name: "Basic toggle",
  render: () => (
    <Preview>
      <Toggle1 />
    </Preview>
  ),
};

export const Toggle2Story: Story = {
  name: "Toggle with outline",
  render: () => (
    <Preview>
      <Toggle2 />
    </Preview>
  ),
};

export const Toggle3Story: Story = {
  name: "Toggle with icon",
  render: () => (
    <Preview>
      <Toggle3 />
    </Preview>
  ),
};

export const Toggle4Story: Story = {
  name: "Small toggle",
  render: () => (
    <Preview>
      <Toggle4 />
    </Preview>
  ),
};

export const Toggle5Story: Story = {
  name: "Large toggle",
  render: () => (
    <Preview>
      <Toggle5 />
    </Preview>
  ),
};

export const Toggle6Story: Story = {
  name: "Disabled toggle",
  render: () => (
    <Preview>
      <Toggle6 />
    </Preview>
  ),
};

export const Toggle7Story: Story = {
  name: "Toggle icon group",
  render: () => (
    <Preview>
      <Toggle7 />
    </Preview>
  ),
};

export const Toggle8Story: Story = {
  name: "Bookmark toggle with tooltip and success toast",
  render: () => (
    <Preview>
      <Toggle8 />
    </Preview>
  ),
};
