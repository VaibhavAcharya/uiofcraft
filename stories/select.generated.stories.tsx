import type { Meta, StoryObj } from "@storybook/react-vite";
import Select1 from "./examples/select/select-1";
import Select2 from "./examples/select/select-2";
import Select3 from "./examples/select/select-3";
import Select4 from "./examples/select/select-4";
import Select5 from "./examples/select/select-5";
import Select6 from "./examples/select/select-6";
import Select7 from "./examples/select/select-7";
import Select8 from "./examples/select/select-8";
import Select9 from "./examples/select/select-9";
import Select10 from "./examples/select/select-10";
import Select11 from "./examples/select/select-11";
import Select12 from "./examples/select/select-12";
import Select13 from "./examples/select/select-13";
import Select14 from "./examples/select/select-14";
import Select15 from "./examples/select/select-15";
import Select16 from "./examples/select/select-16";
import Select17 from "./examples/select/select-17";
import Select18 from "./examples/select/select-18";
import Select19 from "./examples/select/select-19";
import Select20 from "./examples/select/select-20";
import Select21 from "./examples/select/select-21";
import Select22 from "./examples/select/select-22";
import Select23 from "./examples/select/select-23";
import Select24 from "./examples/select/select-24";
import { Preview } from "./preview";

const meta = {
  title: "Components/Select",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Select1Story: Story = {
  name: "Basic select",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select1 />
    </Preview>
  ),
};

export const Select2Story: Story = {
  name: "Small select",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select2 />
    </Preview>
  ),
};

export const Select3Story: Story = {
  name: "Large select",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select3 />
    </Preview>
  ),
};

export const Select4Story: Story = {
  name: "Disabled select",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select4 />
    </Preview>
  ),
};

export const Select5Story: Story = {
  name: "Select without item alignment",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select5 />
    </Preview>
  ),
};

export const Select6Story: Story = {
  name: "Select with groups",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select6 />
    </Preview>
  ),
};

export const Select7Story: Story = {
  name: "Multiple select",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select7 />
    </Preview>
  ),
};

export const Select8Story: Story = {
  name: "Select with icon",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select8 />
    </Preview>
  ),
};

export const Select9Story: Story = {
  name: "Select options with icon",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select9 />
    </Preview>
  ),
};

export const Select10Story: Story = {
  name: "Select with object values",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select10 />
    </Preview>
  ),
};

export const Select11Story: Story = {
  name: "Select in form",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select11 />
    </Preview>
  ),
};

export const Select12Story: Story = {
  name: "Select with disabled items",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select12 />
    </Preview>
  ),
};

export const Select13Story: Story = {
  name: "Timezone select",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select13 />
    </Preview>
  ),
};

export const Select14Story: Story = {
  name: "Status select with colored dot",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select14 />
    </Preview>
  ),
};

export const Select15Story: Story = {
  name: "Pill-shaped select trigger",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select15 />
    </Preview>
  ),
};

export const Select16Story: Story = {
  name: "Select with left text label",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select16 />
    </Preview>
  ),
};

export const Select17Story: Story = {
  name: "Select with country flags",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select17 />
    </Preview>
  ),
};

export const Select18Story: Story = {
  name: "Select with description in options only",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select18 />
    </Preview>
  ),
};

export const Select19Story: Story = {
  name: "Select with avatars",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select19 />
    </Preview>
  ),
};

export const Select20Story: Story = {
  name: "Rich select with avatars and usernames",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select20 />
    </Preview>
  ),
};

export const Select21Story: Story = {
  name: "Auto width select",
  render: () => (
    <Preview>
      <Select21 />
    </Preview>
  ),
};

export const Select22Story: Story = {
  name: "Select with custom border and background",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select22 />
    </Preview>
  ),
};

export const Select23Story: Story = {
  name: "Select with label",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select23 />
    </Preview>
  ),
};

export const Select24Story: Story = {
  name: "Color palette select with three-color swatches",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Select24 />
    </Preview>
  ),
};
