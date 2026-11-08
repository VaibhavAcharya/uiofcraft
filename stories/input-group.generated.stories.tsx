import type { Meta, StoryObj } from "@storybook/react-vite";
import InputGroup1 from "./examples/input-group/input-group-1";
import InputGroup2 from "./examples/input-group/input-group-2";
import InputGroup3 from "./examples/input-group/input-group-3";
import InputGroup4 from "./examples/input-group/input-group-4";
import InputGroup5 from "./examples/input-group/input-group-5";
import InputGroup6 from "./examples/input-group/input-group-6";
import InputGroup7 from "./examples/input-group/input-group-7";
import InputGroup8 from "./examples/input-group/input-group-8";
import InputGroup9 from "./examples/input-group/input-group-9";
import InputGroup10 from "./examples/input-group/input-group-10";
import InputGroup11 from "./examples/input-group/input-group-11";
import InputGroup12 from "./examples/input-group/input-group-12";
import InputGroup13 from "./examples/input-group/input-group-13";
import InputGroup14 from "./examples/input-group/input-group-14";
import InputGroup15 from "./examples/input-group/input-group-15";
import InputGroup16 from "./examples/input-group/input-group-16";
import InputGroup17 from "./examples/input-group/input-group-17";
import InputGroup18 from "./examples/input-group/input-group-18";
import InputGroup19 from "./examples/input-group/input-group-19";
import InputGroup20 from "./examples/input-group/input-group-20";
import InputGroup21 from "./examples/input-group/input-group-21";
import InputGroup22 from "./examples/input-group/input-group-22";
import InputGroup23 from "./examples/input-group/input-group-23";
import InputGroup24 from "./examples/input-group/input-group-24";
import InputGroup26 from "./examples/input-group/input-group-26";
import InputGroup27 from "./examples/input-group/input-group-27";
import InputGroup28 from "./examples/input-group/input-group-28";
import InputGroup29 from "./examples/input-group/input-group-29";
import { Preview } from "./preview";

const meta = {
  title: "Components/Input Group",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputGroup1Story: Story = {
  name: "Basic input group",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup1 />
    </Preview>
  ),
};

export const InputGroup2Story: Story = {
  name: "Input group with end icon",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup2 />
    </Preview>
  ),
};

export const InputGroup3Story: Story = {
  name: "Input group with start text",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup3 />
    </Preview>
  ),
};

export const InputGroup4Story: Story = {
  name: "Input group with end text",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup4 />
    </Preview>
  ),
};

export const InputGroup5Story: Story = {
  name: "Input group with start and end text",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup5 />
    </Preview>
  ),
};

export const InputGroup6Story: Story = {
  name: "Input group with number field",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup6 />
    </Preview>
  ),
};

export const InputGroup7Story: Story = {
  name: "Input group with end tooltip",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup7 />
    </Preview>
  ),
};

export const InputGroup8Story: Story = {
  name: "Input group with icon button",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup8 />
    </Preview>
  ),
};

export const InputGroup9Story: Story = {
  name: "Input group with button",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup9 />
    </Preview>
  ),
};

export const InputGroup10Story: Story = {
  name: "Input group with badge",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup10 />
    </Preview>
  ),
};

export const InputGroup11Story: Story = {
  name: "Input group with keyboard shortcut",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup11 />
    </Preview>
  ),
};

export const InputGroup12Story: Story = {
  name: "Input group with inner label",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup12 />
    </Preview>
  ),
};

export const InputGroup13Story: Story = {
  name: "Small input group",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup13 />
    </Preview>
  ),
};

export const InputGroup14Story: Story = {
  name: "Large input group",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup14 />
    </Preview>
  ),
};

export const InputGroup15Story: Story = {
  name: "Disabled input group",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup15 />
    </Preview>
  ),
};

export const InputGroup16Story: Story = {
  name: "Input group with loading spinner",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup16 />
    </Preview>
  ),
};

export const InputGroup17Story: Story = {
  name: "Input group with textarea",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-80">
      <InputGroup17 />
    </Preview>
  ),
};

export const InputGroup18Story: Story = {
  name: "Input group with badge and menu",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup18 />
    </Preview>
  ),
};

export const InputGroup19Story: Story = {
  name: "Mini editor built with input group and toggle",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-80">
      <InputGroup19 />
    </Preview>
  ),
};

export const InputGroup20Story: Story = {
  name: "Input group with search icon",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup20 />
    </Preview>
  ),
};

export const InputGroup21Story: Story = {
  name: "Input group with start tooltip",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup21 />
    </Preview>
  ),
};

export const InputGroup22Story: Story = {
  name: "Input group with clear button",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup22 />
    </Preview>
  ),
};

export const InputGroup23Story: Story = {
  name: "Search input group with loader and voice button",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup23 />
    </Preview>
  ),
};

export const InputGroup24Story: Story = {
  name: "Input group with character counter",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup24 />
    </Preview>
  ),
};

export const InputGroup26Story: Story = {
  name: "Password input with strength indicator",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <InputGroup26 />
    </Preview>
  ),
};

export const InputGroup27Story: Story = {
  name: "Code snippet input with language selector",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-80">
      <InputGroup27 />
    </Preview>
  ),
};

export const InputGroup28Story: Story = {
  name: "Message composer with attachment buttons",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-80">
      <InputGroup28 />
    </Preview>
  ),
};

export const InputGroup29Story: Story = {
  name: "Chat input with voice and send buttons",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-80">
      <InputGroup29 />
    </Preview>
  ),
};
