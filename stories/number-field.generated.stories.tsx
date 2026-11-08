import type { Meta, StoryObj } from "@storybook/react-vite";
import NumberField1 from "./examples/number-field/number-field-1";
import NumberField2 from "./examples/number-field/number-field-2";
import NumberField3 from "./examples/number-field/number-field-3";
import NumberField4 from "./examples/number-field/number-field-4";
import NumberField5 from "./examples/number-field/number-field-5";
import NumberField6 from "./examples/number-field/number-field-6";
import NumberField7 from "./examples/number-field/number-field-7";
import NumberField8 from "./examples/number-field/number-field-8";
import NumberField9 from "./examples/number-field/number-field-9";
import NumberField10 from "./examples/number-field/number-field-10";
import NumberField11 from "./examples/number-field/number-field-11";
import { Preview } from "./preview";

const meta = {
  title: "Components/Number Field",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const NumberField1Story: Story = {
  name: "Basic number field",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <NumberField1 />
    </Preview>
  ),
};

export const NumberField2Story: Story = {
  name: "Small number field",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <NumberField2 />
    </Preview>
  ),
};

export const NumberField3Story: Story = {
  name: "Large number field",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <NumberField3 />
    </Preview>
  ),
};

export const NumberField4Story: Story = {
  name: "Disabled number field",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <NumberField4 />
    </Preview>
  ),
};

export const NumberField5Story: Story = {
  name: "Number field with label",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <NumberField5 />
    </Preview>
  ),
};

export const NumberField6Story: Story = {
  name: "Number field with scrub",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <NumberField6 />
    </Preview>
  ),
};

export const NumberField7Story: Story = {
  name: "Number field with range",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <NumberField7 />
    </Preview>
  ),
};

export const NumberField8Story: Story = {
  name: "Number field with formatted value",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <NumberField8 />
    </Preview>
  ),
};

export const NumberField9Story: Story = {
  name: "Number field with step",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <NumberField9 />
    </Preview>
  ),
};

export const NumberField10Story: Story = {
  name: "Number field in form",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <NumberField10 />
    </Preview>
  ),
};

export const NumberField11Story: Story = {
  name: "Pill-shaped number field",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <NumberField11 />
    </Preview>
  ),
};
