import type { Meta, StoryObj } from "@storybook/react-vite";
import Field1 from "./examples/field/field-1";
import Field2 from "./examples/field/field-2";
import Field3 from "./examples/field/field-3";
import Field4 from "./examples/field/field-4";
import Field5 from "./examples/field/field-5";
import Field6 from "./examples/field/field-6";
import Field7 from "./examples/field/field-7";
import Field8 from "./examples/field/field-8";
import Field9 from "./examples/field/field-9";
import Field10 from "./examples/field/field-10";
import Field11 from "./examples/field/field-11";
import Field12 from "./examples/field/field-12";
import Field13 from "./examples/field/field-13";
import Field14 from "./examples/field/field-14";
import Field15 from "./examples/field/field-15";
import Field16 from "./examples/field/field-16";
import Field17 from "./examples/field/field-17";
import Field18 from "./examples/field/field-18";
import { Preview } from "./preview";

const meta = {
  title: "Components/Field",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Field1Story: Story = {
  name: "Field with description",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Field1 />
    </Preview>
  ),
};

export const Field2Story: Story = {
  name: "Field with required indicator",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Field2 />
    </Preview>
  ),
};

export const Field3Story: Story = {
  name: "Field in disabled state",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Field3 />
    </Preview>
  ),
};

export const Field4Story: Story = {
  name: "Field showing validation error",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Field4 />
    </Preview>
  ),
};

export const Field5Story: Story = {
  name: "Show field validity state",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Field5 />
    </Preview>
  ),
};

export const Field6Story: Story = {
  name: "Input group with field",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Field6 />
    </Preview>
  ),
};

export const Field7Story: Story = {
  name: "Field with autocomplete",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Field7 />
    </Preview>
  ),
};

export const Field8Story: Story = {
  name: "Field with combobox",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Field8 />
    </Preview>
  ),
};

export const Field9Story: Story = {
  name: "Field with multiple selection combobox",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Field9 />
    </Preview>
  ),
};

export const Field10Story: Story = {
  name: "Field with textarea",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Field10 />
    </Preview>
  ),
};

export const Field11Story: Story = {
  name: "Field with select",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Field11 />
    </Preview>
  ),
};

export const Field12Story: Story = {
  name: "Field with checkbox",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Field12 />
    </Preview>
  ),
};

export const Field13Story: Story = {
  name: "Field with checkbox group",
  render: () => (
    <Preview>
      <Field13 />
    </Preview>
  ),
};

export const Field14Story: Story = {
  name: "Field with radio group",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Field14 />
    </Preview>
  ),
};

export const Field15Story: Story = {
  name: "Field with toggle switch",
  render: () => (
    <Preview>
      <Field15 />
    </Preview>
  ),
};

export const Field16Story: Story = {
  name: "Field with slider",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Field16 />
    </Preview>
  ),
};

export const Field17Story: Story = {
  name: "Field with number field",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Field17 />
    </Preview>
  ),
};

export const Field18Story: Story = {
  name: "Complete form built with field",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Field18 />
    </Preview>
  ),
};
