import type { Meta, StoryObj } from "@storybook/react-vite";
import Switch1 from "./examples/switch/switch-1";
import Switch2 from "./examples/switch/switch-2";
import Switch3 from "./examples/switch/switch-3";
import Switch4 from "./examples/switch/switch-4";
import Switch5 from "./examples/switch/switch-5";
import Switch6 from "./examples/switch/switch-6";
import Switch7 from "./examples/switch/switch-7";
import Switch8 from "./examples/switch/switch-8";
import Switch9 from "./examples/switch/switch-9";
import { Preview } from "./preview";

const meta = {
  title: "Components/Switch",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Switch1Story: Story = {
  name: "Basic switch",
  render: () => (
    <Preview>
      <Switch1 />
    </Preview>
  ),
};

export const Switch2Story: Story = {
  name: "Disabled switch",
  render: () => (
    <Preview>
      <Switch2 />
    </Preview>
  ),
};

export const Switch3Story: Story = {
  name: "Switch with description",
  render: () => (
    <Preview>
      <Switch3 />
    </Preview>
  ),
};

export const Switch4Story: Story = {
  name: "Switch card",
  render: () => (
    <Preview>
      <Switch4 />
    </Preview>
  ),
};

export const Switch5Story: Story = {
  name: "Switch in form",
  render: () => (
    <Preview>
      <Switch5 />
    </Preview>
  ),
};

export const Switch6Story: Story = {
  name: "Custom size switch",
  render: () => (
    <Preview>
      <Switch6 />
    </Preview>
  ),
};

export const Switch7Story: Story = {
  name: "Weekly availability editor with time range combobox pickers",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full sm:**:data-[slot=preview]:max-w-4xl">
      <Switch7 />
    </Preview>
  ),
};

export const Switch8Story: Story = {
  name: "Weekly availability editor with grouped time range controls",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full sm:**:data-[slot=preview]:max-w-4xl">
      <Switch8 />
    </Preview>
  ),
};

export const Switch9Story: Story = {
  name: "Weekly availability editor with From/To labeled time groups",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full sm:**:data-[slot=preview]:max-w-4xl">
      <Switch9 />
    </Preview>
  ),
};
