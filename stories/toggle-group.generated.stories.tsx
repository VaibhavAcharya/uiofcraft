import type { Meta, StoryObj } from "@storybook/react-vite";
import ToggleGroup1 from "./examples/toggle-group/toggle-group-1";
import ToggleGroup2 from "./examples/toggle-group/toggle-group-2";
import ToggleGroup3 from "./examples/toggle-group/toggle-group-3";
import ToggleGroup4 from "./examples/toggle-group/toggle-group-4";
import ToggleGroup5 from "./examples/toggle-group/toggle-group-5";
import ToggleGroup6 from "./examples/toggle-group/toggle-group-6";
import ToggleGroup7 from "./examples/toggle-group/toggle-group-7";
import ToggleGroup8 from "./examples/toggle-group/toggle-group-8";
import ToggleGroup9 from "./examples/toggle-group/toggle-group-9";
import { Preview } from "./preview";

const meta = {
  title: "Components/Toggle Group",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const ToggleGroup1Story: Story = {
  name: "Basic toggle group",
  render: () => (
    <Preview>
      <ToggleGroup1 />
    </Preview>
  ),
};

export const ToggleGroup2Story: Story = {
  name: "Small toggle group",
  render: () => (
    <Preview>
      <ToggleGroup2 />
    </Preview>
  ),
};

export const ToggleGroup3Story: Story = {
  name: "Large toggle group",
  render: () => (
    <Preview>
      <ToggleGroup3 />
    </Preview>
  ),
};

export const ToggleGroup4Story: Story = {
  name: "Toggle group with outline",
  render: () => (
    <Preview>
      <ToggleGroup4 />
    </Preview>
  ),
};

export const ToggleGroup5Story: Story = {
  name: "Vertical toggle group with outline",
  render: () => (
    <Preview>
      <ToggleGroup5 />
    </Preview>
  ),
};

export const ToggleGroup6Story: Story = {
  name: "Disabled toggle group",
  render: () => (
    <Preview>
      <ToggleGroup6 />
    </Preview>
  ),
};

export const ToggleGroup7Story: Story = {
  name: "Toggle group with disabled item",
  render: () => (
    <Preview>
      <ToggleGroup7 />
    </Preview>
  ),
};

export const ToggleGroup8Story: Story = {
  name: "Multiple selection toggle group",
  render: () => (
    <Preview>
      <ToggleGroup8 />
    </Preview>
  ),
};

export const ToggleGroup9Story: Story = {
  name: "Toggle group with tooltips",
  render: () => (
    <Preview>
      <ToggleGroup9 />
    </Preview>
  ),
};
