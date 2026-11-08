import type { Meta, StoryObj } from "@storybook/react-vite";
import Autocomplete1 from "./examples/autocomplete/autocomplete-1";
import Autocomplete2 from "./examples/autocomplete/autocomplete-2";
import Autocomplete3 from "./examples/autocomplete/autocomplete-3";
import Autocomplete4 from "./examples/autocomplete/autocomplete-4";
import Autocomplete5 from "./examples/autocomplete/autocomplete-5";
import Autocomplete6 from "./examples/autocomplete/autocomplete-6";
import Autocomplete7 from "./examples/autocomplete/autocomplete-7";
import Autocomplete8 from "./examples/autocomplete/autocomplete-8";
import Autocomplete9 from "./examples/autocomplete/autocomplete-9";
import Autocomplete10 from "./examples/autocomplete/autocomplete-10";
import Autocomplete11 from "./examples/autocomplete/autocomplete-11";
import Autocomplete12 from "./examples/autocomplete/autocomplete-12";
import Autocomplete13 from "./examples/autocomplete/autocomplete-13";
import Autocomplete14 from "./examples/autocomplete/autocomplete-14";
import Autocomplete15 from "./examples/autocomplete/autocomplete-15";
import Autocomplete16 from "./examples/autocomplete/autocomplete-16";
import { Preview } from "./preview";

const meta = {
  title: "Components/Autocomplete",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Autocomplete1Story: Story = {
  name: "Basic autocomplete",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Autocomplete1 />
    </Preview>
  ),
};

export const Autocomplete2Story: Story = {
  name: "Disabled autocomplete",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Autocomplete2 />
    </Preview>
  ),
};

export const Autocomplete3Story: Story = {
  name: "Small autocomplete",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Autocomplete3 />
    </Preview>
  ),
};

export const Autocomplete4Story: Story = {
  name: "Large autocomplete",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Autocomplete4 />
    </Preview>
  ),
};

export const Autocomplete5Story: Story = {
  name: "Autocomplete with label",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Autocomplete5 />
    </Preview>
  ),
};

export const Autocomplete6Story: Story = {
  name: "Autocomplete autofilling the input with the highlighted item",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Autocomplete6 />
    </Preview>
  ),
};

export const Autocomplete7Story: Story = {
  name: "Autocomplete auto highlighting the first option",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Autocomplete7 />
    </Preview>
  ),
};

export const Autocomplete8Story: Story = {
  name: "Autocomplete with clear button",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Autocomplete8 />
    </Preview>
  ),
};

export const Autocomplete9Story: Story = {
  name: "Autocomplete with trigger and clear buttons",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Autocomplete9 />
    </Preview>
  ),
};

export const Autocomplete10Story: Story = {
  name: "Autocomplete with grouped items",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Autocomplete10 />
    </Preview>
  ),
};

export const Autocomplete11Story: Story = {
  name: "Autocomplete with limited number of results",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Autocomplete11 />
    </Preview>
  ),
};

export const Autocomplete12Story: Story = {
  name: "Autocomplete with async items loading",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Autocomplete12 />
    </Preview>
  ),
};

export const Autocomplete13Story: Story = {
  name: "Autocomplete form",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Autocomplete13 />
    </Preview>
  ),
};

export const Autocomplete14Story: Story = {
  name: "Autocomplete form",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Autocomplete14 />
    </Preview>
  ),
};

export const Autocomplete15Story: Story = {
  name: "Pill-shaped autocomplete",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Autocomplete15 />
    </Preview>
  ),
};

export const Autocomplete16Story: Story = {
  name: "Address autocomplete with Google Maps Places API",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Autocomplete16 />
    </Preview>
  ),
};
