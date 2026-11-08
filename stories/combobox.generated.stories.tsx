import type { Meta, StoryObj } from "@storybook/react-vite";
import Combobox1 from "./examples/combobox/combobox-1";
import Combobox2 from "./examples/combobox/combobox-2";
import Combobox3 from "./examples/combobox/combobox-3";
import Combobox4 from "./examples/combobox/combobox-4";
import Combobox5 from "./examples/combobox/combobox-5";
import Combobox6 from "./examples/combobox/combobox-6";
import Combobox7 from "./examples/combobox/combobox-7";
import Combobox8 from "./examples/combobox/combobox-8";
import Combobox9 from "./examples/combobox/combobox-9";
import Combobox10 from "./examples/combobox/combobox-10";
import Combobox11 from "./examples/combobox/combobox-11";
import Combobox12 from "./examples/combobox/combobox-12";
import Combobox13 from "./examples/combobox/combobox-13";
import Combobox14 from "./examples/combobox/combobox-14";
import Combobox15 from "./examples/combobox/combobox-15";
import Combobox16 from "./examples/combobox/combobox-16";
import Combobox17 from "./examples/combobox/combobox-17";
import Combobox18 from "./examples/combobox/combobox-18";
import Combobox19 from "./examples/combobox/combobox-19";
import Combobox20 from "./examples/combobox/combobox-20";
import { Preview } from "./preview";

const meta = {
  title: "Components/Combobox",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Combobox1Story: Story = {
  name: "Basic combobox",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Combobox1 />
    </Preview>
  ),
};

export const Combobox2Story: Story = {
  name: "Disabled combobox",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Combobox2 />
    </Preview>
  ),
};

export const Combobox3Story: Story = {
  name: "Small combobox",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Combobox3 />
    </Preview>
  ),
};

export const Combobox4Story: Story = {
  name: "Large combobox",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Combobox4 />
    </Preview>
  ),
};

export const Combobox5Story: Story = {
  name: "Combobox with label",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Combobox5 />
    </Preview>
  ),
};

export const Combobox6Story: Story = {
  name: "Combobox auto highlighting the first option",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Combobox6 />
    </Preview>
  ),
};

export const Combobox7Story: Story = {
  name: "Combobox with clear button",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Combobox7 />
    </Preview>
  ),
};

export const Combobox8Story: Story = {
  name: "Combobox with grouped items",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Combobox8 />
    </Preview>
  ),
};

export const Combobox9Story: Story = {
  name: "Combobox with multiple selection",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Combobox9 />
    </Preview>
  ),
};

export const Combobox10Story: Story = {
  name: "Combobox with input inside popup",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Combobox10 />
    </Preview>
  ),
};

export const Combobox11Story: Story = {
  name: "Combobox form",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Combobox11 />
    </Preview>
  ),
};

export const Combobox12Story: Story = {
  name: "Combobox multiple form",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Combobox12 />
    </Preview>
  ),
};

export const Combobox13Story: Story = {
  name: "Combobox with start addon",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Combobox13 />
    </Preview>
  ),
};

export const Combobox14Story: Story = {
  name: "Combobox multiple with start addon",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Combobox14 />
    </Preview>
  ),
};

export const Combobox15Story: Story = {
  name: "Pill-shaped combobox",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Combobox15 />
    </Preview>
  ),
};

export const Combobox16Story: Story = {
  name: "Timezone combobox",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Combobox16 />
    </Preview>
  ),
};

export const Combobox17Story: Story = {
  name: "Timezone combobox with search input",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Combobox17 />
    </Preview>
  ),
};

export const Combobox18Story: Story = {
  name: "Combobox with select trigger",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Combobox18 />
    </Preview>
  ),
};

export const Combobox19Story: Story = {
  name: "Combobox multiple with stacked chips",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-80">
      <Combobox19 />
    </Preview>
  ),
};

export const Combobox20Story: Story = {
  name: "Combobox multiple with stacked divided chips",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-80">
      <Combobox20 />
    </Preview>
  ),
};
