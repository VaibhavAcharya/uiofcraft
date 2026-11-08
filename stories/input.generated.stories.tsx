import type { Meta, StoryObj } from "@storybook/react-vite";
import Input1 from "./examples/input/input-1";
import Input2 from "./examples/input/input-2";
import Input3 from "./examples/input/input-3";
import Input4 from "./examples/input/input-4";
import Input5 from "./examples/input/input-5";
import Input6 from "./examples/input/input-6";
import Input7 from "./examples/input/input-7";
import Input8 from "./examples/input/input-8";
import Input9 from "./examples/input/input-9";
import Input10 from "./examples/input/input-10";
import Input11 from "./examples/input/input-11";
import Input12 from "./examples/input/input-12";
import Input13 from "./examples/input/input-13";
import Input14 from "./examples/input/input-14";
import Input15 from "./examples/input/input-15";
import Input16 from "./examples/input/input-16";
import Input17 from "./examples/input/input-17";
import Input18 from "./examples/input/input-18";
import Input19 from "./examples/input/input-19";
import { Preview } from "./preview";

const meta = {
  title: "Components/Input",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Input1Story: Story = {
  name: "Basic input",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Input1 />
    </Preview>
  ),
};

export const Input2Story: Story = {
  name: "Small input",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Input2 />
    </Preview>
  ),
};

export const Input3Story: Story = {
  name: "Large input",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Input3 />
    </Preview>
  ),
};

export const Input4Story: Story = {
  name: "Disabled input",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Input4 />
    </Preview>
  ),
};

export const Input5Story: Story = {
  name: "File input",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Input5 />
    </Preview>
  ),
};

export const Input6Story: Story = {
  name: "Input with label",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Input6 />
    </Preview>
  ),
};

export const Input7Story: Story = {
  name: "Input with button using Group",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Input7 />
    </Preview>
  ),
};

export const Input8Story: Story = {
  name: "Input with start text and end tooltip",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Input8 />
    </Preview>
  ),
};

export const Input9Story: Story = {
  name: "Password input with toggle visibility",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Input9 />
    </Preview>
  ),
};

export const Input10Story: Story = {
  name: "Input group mimicking a URL bar",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Input10 />
    </Preview>
  ),
};

export const Input11Story: Story = {
  name: "Input group with keyboard shortcut",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Input11 />
    </Preview>
  ),
};

export const Input12Story: Story = {
  name: "Input group with start loading spinner",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Input12 />
    </Preview>
  ),
};

export const Input13Story: Story = {
  name: "Input with label and required indicator",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Input13 />
    </Preview>
  ),
};

export const Input14Story: Story = {
  name: "Input with optional label",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Input14 />
    </Preview>
  ),
};

export const Input15Story: Story = {
  name: "Input with custom border and background",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Input15 />
    </Preview>
  ),
};

export const Input16Story: Story = {
  name: "Input group with end loading spinner",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Input16 />
    </Preview>
  ),
};

export const Input17Story: Story = {
  name: "Read-only input",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Input17 />
    </Preview>
  ),
};

export const Input18Story: Story = {
  name: "Input with characters remaining counter",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Input18 />
    </Preview>
  ),
};

export const Input19Story: Story = {
  name: "Pill-shaped input",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Input19 />
    </Preview>
  ),
};
