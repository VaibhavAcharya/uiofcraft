import type { Meta, StoryObj } from "@storybook/react-vite";
import Badge1 from "./examples/badge/badge-1";
import Badge2 from "./examples/badge/badge-2";
import Badge3 from "./examples/badge/badge-3";
import Badge4 from "./examples/badge/badge-4";
import Badge5 from "./examples/badge/badge-5";
import Badge6 from "./examples/badge/badge-6";
import Badge7 from "./examples/badge/badge-7";
import Badge8 from "./examples/badge/badge-8";
import Badge9 from "./examples/badge/badge-9";
import Badge10 from "./examples/badge/badge-10";
import Badge11 from "./examples/badge/badge-11";
import Badge12 from "./examples/badge/badge-12";
import Badge13 from "./examples/badge/badge-13";
import Badge14 from "./examples/badge/badge-14";
import Badge15 from "./examples/badge/badge-15";
import Badge16 from "./examples/badge/badge-16";
import Badge17 from "./examples/badge/badge-17";
import Badge18 from "./examples/badge/badge-18";
import Badge19 from "./examples/badge/badge-19";
import Badge20 from "./examples/badge/badge-20";
import { Preview } from "./preview";

const meta = {
  title: "Components/Badge",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Badge1Story: Story = {
  name: "Basic badge",
  render: () => (
    <Preview>
      <Badge1 />
    </Preview>
  ),
};

export const Badge2Story: Story = {
  name: "Outline badge",
  render: () => (
    <Preview>
      <Badge2 />
    </Preview>
  ),
};

export const Badge3Story: Story = {
  name: "Secondary badge",
  render: () => (
    <Preview>
      <Badge3 />
    </Preview>
  ),
};

export const Badge4Story: Story = {
  name: "Destructive badge",
  render: () => (
    <Preview>
      <Badge4 />
    </Preview>
  ),
};

export const Badge5Story: Story = {
  name: "Info badge",
  render: () => (
    <Preview>
      <Badge5 />
    </Preview>
  ),
};

export const Badge6Story: Story = {
  name: "Success badge",
  render: () => (
    <Preview>
      <Badge6 />
    </Preview>
  ),
};

export const Badge7Story: Story = {
  name: "Warning badge",
  render: () => (
    <Preview>
      <Badge7 />
    </Preview>
  ),
};

export const Badge8Story: Story = {
  name: "Error badge",
  render: () => (
    <Preview>
      <Badge8 />
    </Preview>
  ),
};

export const Badge9Story: Story = {
  name: "Small badge",
  render: () => (
    <Preview>
      <Badge9 />
    </Preview>
  ),
};

export const Badge10Story: Story = {
  name: "Large badge",
  render: () => (
    <Preview>
      <Badge10 />
    </Preview>
  ),
};

export const Badge11Story: Story = {
  name: "Badge with icon",
  render: () => (
    <Preview>
      <Badge11 />
    </Preview>
  ),
};

export const Badge12Story: Story = {
  name: "Badge with link",
  render: () => (
    <Preview>
      <Badge12 />
    </Preview>
  ),
};

export const Badge13Story: Story = {
  name: "Badge with count",
  render: () => (
    <Preview>
      <Badge13 />
    </Preview>
  ),
};

export const Badge14Story: Story = {
  name: "Full rounded badge (pill)",
  render: () => (
    <Preview>
      <Badge14 />
    </Preview>
  ),
};

export const Badge15Story: Story = {
  name: "Badge with number after text",
  render: () => (
    <Preview>
      <Badge15 />
    </Preview>
  ),
};

export const Badge16Story: Story = {
  name: "Status badge - Paid",
  render: () => (
    <Preview>
      <Badge16 />
    </Preview>
  ),
};

export const Badge17Story: Story = {
  name: "Status badge - Pending",
  render: () => (
    <Preview>
      <Badge17 />
    </Preview>
  ),
};

export const Badge18Story: Story = {
  name: "Status badge - Failed",
  render: () => (
    <Preview>
      <Badge18 />
    </Preview>
  ),
};

export const Badge19Story: Story = {
  name: "Selectable badge with checkbox",
  render: () => (
    <Preview className="**:data-[slot=preview]:flex">
      <Badge19 />
    </Preview>
  ),
};

export const Badge20Story: Story = {
  name: "Removable badge",
  render: () => (
    <Preview>
      <Badge20 />
    </Preview>
  ),
};
