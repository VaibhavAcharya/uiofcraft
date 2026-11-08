import type { Meta, StoryObj } from "@storybook/react-vite";
import CheckboxGroup1 from "./examples/checkbox-group/checkbox-group-1";
import CheckboxGroup2 from "./examples/checkbox-group/checkbox-group-2";
import CheckboxGroup3 from "./examples/checkbox-group/checkbox-group-3";
import CheckboxGroup4 from "./examples/checkbox-group/checkbox-group-4";
import CheckboxGroup5 from "./examples/checkbox-group/checkbox-group-5";
import { Preview } from "./preview";

const meta = {
  title: "Components/Checkbox Group",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const CheckboxGroup1Story: Story = {
  name: "Basic checkbox group",
  render: () => (
    <Preview>
      <CheckboxGroup1 />
    </Preview>
  ),
};

export const CheckboxGroup2Story: Story = {
  name: "Checkbox group with disabled items",
  render: () => (
    <Preview>
      <CheckboxGroup2 />
    </Preview>
  ),
};

export const CheckboxGroup3Story: Story = {
  name: "Checkbox group with parent checkbox",
  render: () => (
    <Preview>
      <CheckboxGroup3 />
    </Preview>
  ),
};

export const CheckboxGroup4Story: Story = {
  name: "Nested checkbox group with parent",
  render: () => (
    <Preview>
      <CheckboxGroup4 />
    </Preview>
  ),
};

export const CheckboxGroup5Story: Story = {
  name: "Checkbox group form",
  render: () => (
    <Preview>
      <CheckboxGroup5 />
    </Preview>
  ),
};
