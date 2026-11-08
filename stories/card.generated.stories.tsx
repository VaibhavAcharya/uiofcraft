import type { Meta, StoryObj } from "@storybook/react-vite";
import Card1 from "./examples/card/card-1";
import Card2 from "./examples/card/card-2";
import Card3 from "./examples/card/card-3";
import Card4 from "./examples/card/card-4";
import Card5 from "./examples/card/card-5";
import Card6 from "./examples/card/card-6";
import Card7 from "./examples/card/card-7";
import Card8 from "./examples/card/card-8";
import Card9 from "./examples/card/card-9";
import Card10 from "./examples/card/card-10";
import Card11 from "./examples/card/card-11";
import { Preview } from "./preview";

const meta = {
  title: "Components/Card",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Card1Story: Story = {
  name: "A basic card with header and footer",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:flex **:data-[slot=preview]:justify-center">
      <Card1 />
    </Preview>
  ),
};

export const Card2Story: Story = {
  name: "Authentication card with actions",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:flex **:data-[slot=preview]:justify-center">
      <Card2 />
    </Preview>
  ),
};

export const Card3Story: Story = {
  name: "Authentication card with separators",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:flex **:data-[slot=preview]:justify-center">
      <Card3 />
    </Preview>
  ),
};

export const Card4Story: Story = {
  name: "Framed card with footer",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:flex **:data-[slot=preview]:justify-center">
      <Card4 />
    </Preview>
  ),
};

export const Card5Story: Story = {
  name: "Framed card with header",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:flex **:data-[slot=preview]:justify-center">
      <Card5 />
    </Preview>
  ),
};

export const Card6Story: Story = {
  name: "Framed card with header and footer",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:flex **:data-[slot=preview]:justify-center">
      <Card6 />
    </Preview>
  ),
};

export const Card7Story: Story = {
  name: "Framed card with no rounded bottom",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:flex **:data-[slot=preview]:justify-center">
      <Card7 />
    </Preview>
  ),
};

export const Card8Story: Story = {
  name: "Card within a frame and footer",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:flex **:data-[slot=preview]:justify-center">
      <Card8 />
    </Preview>
  ),
};

export const Card9Story: Story = {
  name: "Card within a frame and footer",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:flex **:data-[slot=preview]:justify-center">
      <Card9 />
    </Preview>
  ),
};

export const Card10Story: Story = {
  name: "Card within a frame with header and footer",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:flex **:data-[slot=preview]:justify-center">
      <Card10 />
    </Preview>
  ),
};

export const Card11Story: Story = {
  name: "CardFrame with header action",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:flex **:data-[slot=preview]:justify-center">
      <Card11 />
    </Preview>
  ),
};
