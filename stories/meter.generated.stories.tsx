import type { Meta, StoryObj } from "@storybook/react-vite";
import Meter1 from "./examples/meter/meter-1";
import Meter2 from "./examples/meter/meter-2";
import Meter3 from "./examples/meter/meter-3";
import Meter4 from "./examples/meter/meter-4";
import { Preview } from "./preview";

const meta = {
  title: "Components/Meter",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Meter1Story: Story = {
  name: "Basic meter",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Meter1 />
    </Preview>
  ),
};

export const Meter2Story: Story = {
  name: "Simple meter",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Meter2 />
    </Preview>
  ),
};

export const Meter3Story: Story = {
  name: "Meter with formatted value",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Meter3 />
    </Preview>
  ),
};

export const Meter4Story: Story = {
  name: "Meter with range",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Meter4 />
    </Preview>
  ),
};
