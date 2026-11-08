import type { Meta, StoryObj } from "@storybook/react-vite";
import Group1 from "./examples/group/group-1";
import Group2 from "./examples/group/group-2";
import Group3 from "./examples/group/group-3";
import Group4 from "./examples/group/group-4";
import Group5 from "./examples/group/group-5";
import Group6 from "./examples/group/group-6";
import Group7 from "./examples/group/group-7";
import Group8 from "./examples/group/group-8";
import Group9 from "./examples/group/group-9";
import Group10 from "./examples/group/group-10";
import Group11 from "./examples/group/group-11";
import Group12 from "./examples/group/group-12";
import Group13 from "./examples/group/group-13";
import Group14 from "./examples/group/group-14";
import Group15 from "./examples/group/group-15";
import Group16 from "./examples/group/group-16";
import Group17 from "./examples/group/group-17";
import Group18 from "./examples/group/group-18";
import Group19 from "./examples/group/group-19";
import Group20 from "./examples/group/group-20";
import Group22 from "./examples/group/group-22";
import Group23 from "./examples/group/group-23";
import { Preview } from "./preview";

const meta = {
  title: "Components/Group",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Group1Story: Story = {
  name: "Basic group",
  render: () => (
    <Preview>
      <Group1 />
    </Preview>
  ),
};

export const Group2Story: Story = {
  name: "Group with input",
  render: () => (
    <Preview>
      <Group2 />
    </Preview>
  ),
};

export const Group3Story: Story = {
  name: "Small group",
  render: () => (
    <Preview>
      <Group3 />
    </Preview>
  ),
};

export const Group4Story: Story = {
  name: "Large group",
  render: () => (
    <Preview>
      <Group4 />
    </Preview>
  ),
};

export const Group5Story: Story = {
  name: "Group with disabled button",
  render: () => (
    <Preview>
      <Group5 />
    </Preview>
  ),
};

export const Group6Story: Story = {
  name: "Group with default button",
  render: () => (
    <Preview>
      <Group6 />
    </Preview>
  ),
};

export const Group7Story: Story = {
  name: "Group with start text",
  render: () => (
    <Preview>
      <Group7 />
    </Preview>
  ),
};

export const Group8Story: Story = {
  name: "Group with end text",
  render: () => (
    <Preview>
      <Group8 />
    </Preview>
  ),
};

export const Group9Story: Story = {
  name: "Vertical group",
  render: () => (
    <Preview>
      <Group9 />
    </Preview>
  ),
};

export const Group10Story: Story = {
  name: "Nested groups",
  render: () => (
    <Preview>
      <Group10 />
    </Preview>
  ),
};

export const Group11Story: Story = {
  name: "Group with popup",
  render: () => (
    <Preview>
      <Group11 />
    </Preview>
  ),
};

export const Group12Story: Story = {
  name: "Group with input group",
  render: () => (
    <Preview>
      <Group12 />
    </Preview>
  ),
};

export const Group13Story: Story = {
  name: "Group with menu",
  render: () => (
    <Preview>
      <Group13 />
    </Preview>
  ),
};

export const Group14Story: Story = {
  name: "Group with select",
  render: () => (
    <Preview>
      <Group14 />
    </Preview>
  ),
};

export const Group15Story: Story = {
  name: "Group with search",
  render: () => (
    <Preview>
      <Group15 />
    </Preview>
  ),
};

export const Group16Story: Story = {
  name: "Group with add button and input",
  render: () => (
    <Preview>
      <Group16 />
    </Preview>
  ),
};

export const Group17Story: Story = {
  name: "Group with input and currency text",
  render: () => (
    <Preview>
      <Group17 />
    </Preview>
  ),
};

export const Group18Story: Story = {
  name: "Group with select and input",
  render: () => (
    <Preview>
      <Group18 />
    </Preview>
  ),
};

export const Group19Story: Story = {
  name: "Group with input and select",
  render: () => (
    <Preview>
      <Group19 />
    </Preview>
  ),
};

export const Group20Story: Story = {
  name: "Group with input and text button",
  render: () => (
    <Preview>
      <Group20 />
    </Preview>
  ),
};

export const Group22Story: Story = {
  name: "Group with two number inputs for range",
  render: () => (
    <Preview>
      <Group22 />
    </Preview>
  ),
};

export const Group23Story: Story = {
  name: "Group with filter label, combobox multi-select, and remove button",
  render: () => (
    <Preview>
      <Group23 />
    </Preview>
  ),
};
