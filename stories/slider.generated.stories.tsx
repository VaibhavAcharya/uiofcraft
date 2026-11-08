import type { Meta, StoryObj } from "@storybook/react-vite";
import Slider1 from "./examples/slider/slider-1";
import Slider2 from "./examples/slider/slider-2";
import Slider3 from "./examples/slider/slider-3";
import Slider4 from "./examples/slider/slider-4";
import Slider5 from "./examples/slider/slider-5";
import Slider6 from "./examples/slider/slider-6";
import Slider7 from "./examples/slider/slider-7";
import Slider8 from "./examples/slider/slider-8";
import Slider9 from "./examples/slider/slider-9";
import Slider10 from "./examples/slider/slider-10";
import Slider11 from "./examples/slider/slider-11";
import Slider12 from "./examples/slider/slider-12";
import Slider13 from "./examples/slider/slider-13";
import Slider14 from "./examples/slider/slider-14";
import Slider15 from "./examples/slider/slider-15";
import Slider16 from "./examples/slider/slider-16";
import Slider17 from "./examples/slider/slider-17";
import Slider18 from "./examples/slider/slider-18";
import Slider19 from "./examples/slider/slider-19";
import Slider20 from "./examples/slider/slider-20";
import Slider21 from "./examples/slider/slider-21";
import Slider22 from "./examples/slider/slider-22";
import Slider23 from "./examples/slider/slider-23";
import { Preview } from "./preview";

const meta = {
  title: "Components/Slider",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Slider1Story: Story = {
  name: "Basic slider",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Slider1 />
    </Preview>
  ),
};

export const Slider2Story: Story = {
  name: "Slider with label and value",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Slider2 />
    </Preview>
  ),
};

export const Slider3Story: Story = {
  name: "Disabled slider",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Slider3 />
    </Preview>
  ),
};

export const Slider4Story: Story = {
  name: "Slider with reference labels",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Slider4 />
    </Preview>
  ),
};

export const Slider5Story: Story = {
  name: "Slider with ticks",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Slider5 />
    </Preview>
  ),
};

export const Slider6Story: Story = {
  name: "Slider with labels above",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Slider6 />
    </Preview>
  ),
};

export const Slider7Story: Story = {
  name: "Range slider",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Slider7 />
    </Preview>
  ),
};

export const Slider8Story: Story = {
  name: "Slider with 3 thumbs",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Slider8 />
    </Preview>
  ),
};

export const Slider9Story: Story = {
  name: "Range slider with collision behavior none",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Slider9 />
    </Preview>
  ),
};

export const Slider10Story: Story = {
  name: "Range slider with collision behavior swap",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Slider10 />
    </Preview>
  ),
};

export const Slider11Story: Story = {
  name: "Slider with icons",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Slider11 />
    </Preview>
  ),
};

export const Slider12Story: Story = {
  name: "Slider with input",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Slider12 />
    </Preview>
  ),
};

export const Slider13Story: Story = {
  name: "Range slider with inputs",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Slider13 />
    </Preview>
  ),
};

export const Slider14Story: Story = {
  name: "Slider with increment and decrement buttons",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Slider14 />
    </Preview>
  ),
};

export const Slider15Story: Story = {
  name: "Price range slider",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Slider15 />
    </Preview>
  ),
};

export const Slider16Story: Story = {
  name: "Emoji rating slider",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Slider16 />
    </Preview>
  ),
};

export const Slider17Story: Story = {
  name: "Vertical slider",
  render: () => (
    <Preview>
      <Slider17 />
    </Preview>
  ),
};

export const Slider18Story: Story = {
  name: "Vertical range slider",
  render: () => (
    <Preview>
      <Slider18 />
    </Preview>
  ),
};

export const Slider19Story: Story = {
  name: "Vertical slider with input",
  render: () => (
    <Preview>
      <Slider19 />
    </Preview>
  ),
};

export const Slider20Story: Story = {
  name: "Equalizer with vertical sliders",
  render: () => (
    <Preview>
      <Slider20 />
    </Preview>
  ),
};

export const Slider21Story: Story = {
  name: "Object position sliders with reset",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Slider21 />
    </Preview>
  ),
};

export const Slider22Story: Story = {
  name: "Price slider with histogram",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Slider22 />
    </Preview>
  ),
};

export const Slider23Story: Story = {
  name: "Slider in form",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Slider23 />
    </Preview>
  ),
};
