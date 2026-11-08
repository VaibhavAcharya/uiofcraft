import type { Meta, StoryObj } from "@storybook/react-vite";
import Accordion1 from "./examples/accordion/accordion-1";
import Accordion2 from "./examples/accordion/accordion-2";
import Accordion3 from "./examples/accordion/accordion-3";
import Accordion4 from "./examples/accordion/accordion-4";
import { Preview } from "./preview";

const meta = {
  title: "Components/Accordion",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Accordion1Story: Story = {
  name: "Basic accordion",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full sm:**:data-[slot=preview]:max-w-[80%]">
      <Accordion1 />
    </Preview>
  ),
};

export const Accordion2Story: Story = {
  name: "Accordion with one panel open",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full sm:**:data-[slot=preview]:max-w-[80%]">
      <Accordion2 />
    </Preview>
  ),
};

export const Accordion3Story: Story = {
  name: "Accordion allowing multiple panels open",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full sm:**:data-[slot=preview]:max-w-[80%]">
      <Accordion3 />
    </Preview>
  ),
};

export const Accordion4Story: Story = {
  name: "Controlled accordion",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full sm:**:data-[slot=preview]:max-w-[80%]">
      <Accordion4 />
    </Preview>
  ),
};
