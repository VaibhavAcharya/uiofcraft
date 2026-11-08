import type { Meta, StoryObj } from "@storybook/react-vite";
import Checkbox1 from "./examples/checkbox/checkbox-1";
import Checkbox2 from "./examples/checkbox/checkbox-2";
import Checkbox3 from "./examples/checkbox/checkbox-3";
import Checkbox4 from "./examples/checkbox/checkbox-4";
import Checkbox5 from "./examples/checkbox/checkbox-5";
import { Preview } from "./preview";

const meta = {
  title: "Components/Checkbox",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Checkbox1Story: Story = {
  name: "Basic checkbox",
  render: () => (
    <Preview>
      <Checkbox1 />
    </Preview>
  ),
};

export const Checkbox2Story: Story = {
  name: "Disabled checkbox",
  render: () => (
    <Preview>
      <Checkbox2 />
    </Preview>
  ),
};

export const Checkbox3Story: Story = {
  name: "Checkbox with description",
  render: () => (
    <Preview>
      <Checkbox3 />
    </Preview>
  ),
};

export const Checkbox4Story: Story = {
  name: "Card-style checkbox",
  render: () => (
    <Preview>
      <Checkbox4 />
    </Preview>
  ),
};

export const Checkbox5Story: Story = {
  name: "Checkbox form",
  render: () => (
    <Preview>
      <Checkbox5 />
    </Preview>
  ),
};
