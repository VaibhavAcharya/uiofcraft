import type { Meta, StoryObj } from "@storybook/react-vite";
import RadioGroup1 from "./examples/radio-group/radio-group-1";
import RadioGroup2 from "./examples/radio-group/radio-group-2";
import RadioGroup3 from "./examples/radio-group/radio-group-3";
import RadioGroup4 from "./examples/radio-group/radio-group-4";
import RadioGroup5 from "./examples/radio-group/radio-group-5";
import RadioGroup6 from "./examples/radio-group/radio-group-6";
import RadioGroup7 from "./examples/radio-group/radio-group-7";
import RadioGroup8 from "./examples/radio-group/radio-group-8";
import RadioGroup9 from "./examples/radio-group/radio-group-9";
import RadioGroup10 from "./examples/radio-group/radio-group-10";
import { Preview } from "./preview";

const meta = {
  title: "Components/Radio Group",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const RadioGroup1Story: Story = {
  name: "Basic radio group",
  render: () => (
    <Preview>
      <RadioGroup1 />
    </Preview>
  ),
};

export const RadioGroup2Story: Story = {
  name: "Disabled radio group",
  render: () => (
    <Preview>
      <RadioGroup2 />
    </Preview>
  ),
};

export const RadioGroup3Story: Story = {
  name: "Radio group with description",
  render: () => (
    <Preview>
      <RadioGroup3 />
    </Preview>
  ),
};

export const RadioGroup4Story: Story = {
  name: "Radio group card",
  render: () => (
    <Preview>
      <RadioGroup4 />
    </Preview>
  ),
};

export const RadioGroup5Story: Story = {
  name: "Radio group in form",
  render: () => (
    <Preview>
      <RadioGroup5 />
    </Preview>
  ),
};

export const RadioGroup6Story: Story = {
  name: "Theme selector with image cards",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-[320px]">
      <RadioGroup6 />
    </Preview>
  ),
};

export const RadioGroup7Story: Story = {
  name: "Small segmented control built with a radio group",
  render: () => (
    <Preview>
      <RadioGroup7 />
    </Preview>
  ),
};

export const RadioGroup8Story: Story = {
  name: "Segmented control built with a radio group",
  render: () => (
    <Preview>
      <RadioGroup8 />
    </Preview>
  ),
};

export const RadioGroup9Story: Story = {
  name: "Large segmented control built with a radio group",
  render: () => (
    <Preview>
      <RadioGroup9 />
    </Preview>
  ),
};

export const RadioGroup10Story: Story = {
  name: "Color palette radio cards in a four-column grid",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-96">
      <RadioGroup10 />
    </Preview>
  ),
};
