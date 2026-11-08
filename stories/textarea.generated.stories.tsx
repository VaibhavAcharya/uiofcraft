import type { Meta, StoryObj } from "@storybook/react-vite";
import Textarea1 from "./examples/textarea/textarea-1";
import Textarea2 from "./examples/textarea/textarea-2";
import Textarea3 from "./examples/textarea/textarea-3";
import Textarea4 from "./examples/textarea/textarea-4";
import Textarea5 from "./examples/textarea/textarea-5";
import Textarea6 from "./examples/textarea/textarea-6";
import Textarea7 from "./examples/textarea/textarea-7";
import Textarea8 from "./examples/textarea/textarea-8";
import Textarea9 from "./examples/textarea/textarea-9";
import Textarea10 from "./examples/textarea/textarea-10";
import Textarea11 from "./examples/textarea/textarea-11";
import Textarea12 from "./examples/textarea/textarea-12";
import Textarea13 from "./examples/textarea/textarea-13";
import Textarea14 from "./examples/textarea/textarea-14";
import Textarea15 from "./examples/textarea/textarea-15";
import { Preview } from "./preview";

const meta = {
  title: "Components/Textarea",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Textarea1Story: Story = {
  name: "Basic textarea",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Textarea1 />
    </Preview>
  ),
};

export const Textarea2Story: Story = {
  name: "Small textarea",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Textarea2 />
    </Preview>
  ),
};

export const Textarea3Story: Story = {
  name: "Large textarea",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Textarea3 />
    </Preview>
  ),
};

export const Textarea4Story: Story = {
  name: "Disabled textarea",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Textarea4 />
    </Preview>
  ),
};

export const Textarea5Story: Story = {
  name: "Textarea with label",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Textarea5 />
    </Preview>
  ),
};

export const Textarea6Story: Story = {
  name: "Textarea in form",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Textarea6 />
    </Preview>
  ),
};

export const Textarea7Story: Story = {
  name: "Textarea with label and required indicator",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Textarea7 />
    </Preview>
  ),
};

export const Textarea8Story: Story = {
  name: "Textarea with optional label",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Textarea8 />
    </Preview>
  ),
};

export const Textarea9Story: Story = {
  name: "Textarea with custom border and background",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Textarea9 />
    </Preview>
  ),
};

export const Textarea10Story: Story = {
  name: "Read-only textarea",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Textarea10 />
    </Preview>
  ),
};

export const Textarea11Story: Story = {
  name: "Textarea with characters remaining counter",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Textarea11 />
    </Preview>
  ),
};

export const Textarea12Story: Story = {
  name: "Textarea field with required indicator",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Textarea12 />
    </Preview>
  ),
};

export const Textarea13Story: Story = {
  name: "Shorter textarea with fixed height",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Textarea13 />
    </Preview>
  ),
};

export const Textarea14Story: Story = {
  name: "Textarea with button aligned right",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Textarea14 />
    </Preview>
  ),
};

export const Textarea15Story: Story = {
  name: "Textarea with button aligned left",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Textarea15 />
    </Preview>
  ),
};
