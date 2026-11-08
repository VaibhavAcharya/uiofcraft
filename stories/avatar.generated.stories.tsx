import type { Meta, StoryObj } from "@storybook/react-vite";
import Avatar1 from "./examples/avatar/avatar-1";
import Avatar2 from "./examples/avatar/avatar-2";
import Avatar3 from "./examples/avatar/avatar-3";
import Avatar4 from "./examples/avatar/avatar-4";
import Avatar5 from "./examples/avatar/avatar-5";
import Avatar6 from "./examples/avatar/avatar-6";
import Avatar7 from "./examples/avatar/avatar-7";
import Avatar8 from "./examples/avatar/avatar-8";
import Avatar9 from "./examples/avatar/avatar-9";
import Avatar10 from "./examples/avatar/avatar-10";
import Avatar11 from "./examples/avatar/avatar-11";
import Avatar12 from "./examples/avatar/avatar-12";
import Avatar13 from "./examples/avatar/avatar-13";
import Avatar14 from "./examples/avatar/avatar-14";
import Avatar15 from "./examples/avatar/avatar-15";
import Avatar16 from "./examples/avatar/avatar-16";
import Avatar17 from "./examples/avatar/avatar-17";
import Avatar18 from "./examples/avatar/avatar-18";
import Avatar19 from "./examples/avatar/avatar-19";
import Avatar20 from "./examples/avatar/avatar-20";
import Avatar21 from "./examples/avatar/avatar-21";
import { Preview } from "./preview";

const meta = {
  title: "Components/Avatar",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Avatar1Story: Story = {
  name: "Avatar with image and fallback",
  render: () => (
    <Preview>
      <Avatar1 />
    </Preview>
  ),
};

export const Avatar2Story: Story = {
  name: "Fallback-only avatar",
  render: () => (
    <Preview>
      <Avatar2 />
    </Preview>
  ),
};

export const Avatar3Story: Story = {
  name: "Avatars with different sizes",
  render: () => (
    <Preview>
      <Avatar3 />
    </Preview>
  ),
};

export const Avatar4Story: Story = {
  name: "Avatars with different radii",
  render: () => (
    <Preview>
      <Avatar4 />
    </Preview>
  ),
};

export const Avatar5Story: Story = {
  name: "Overlapping avatar group",
  render: () => (
    <Preview>
      <Avatar5 />
    </Preview>
  ),
};

export const Avatar6Story: Story = {
  name: "Avatar with user icon fallback",
  render: () => (
    <Preview>
      <Avatar6 />
    </Preview>
  ),
};

export const Avatar7Story: Story = {
  name: "Avatar with emerald status dot",
  render: () => (
    <Preview>
      <Avatar7 />
    </Preview>
  ),
};

export const Avatar8Story: Story = {
  name: "Avatar with muted status dot",
  render: () => (
    <Preview>
      <Avatar8 />
    </Preview>
  ),
};

export const Avatar9Story: Story = {
  name: "Rounded avatar with top-right emerald status",
  render: () => (
    <Preview>
      <Avatar9 />
    </Preview>
  ),
};

export const Avatar10Story: Story = {
  name: "Avatar with notification badge",
  render: () => (
    <Preview>
      <Avatar10 />
    </Preview>
  ),
};

export const Avatar11Story: Story = {
  name: "Rounded avatar with notification badge",
  render: () => (
    <Preview>
      <Avatar11 />
    </Preview>
  ),
};

export const Avatar12Story: Story = {
  name: "Avatar with verified badge",
  render: () => (
    <Preview>
      <Avatar12 />
    </Preview>
  ),
};

export const Avatar13Story: Story = {
  name: "Small overlapping avatar group",
  render: () => (
    <Preview>
      <Avatar13 />
    </Preview>
  ),
};

export const Avatar14Story: Story = {
  name: "Large overlapping avatar group",
  render: () => (
    <Preview>
      <Avatar14 />
    </Preview>
  ),
};

export const Avatar15Story: Story = {
  name: "Avatar group with the last avatar on top",
  render: () => (
    <Preview>
      <Avatar15 />
    </Preview>
  ),
};

export const Avatar16Story: Story = {
  name: "Avatar group with a count and the last avatar on top",
  render: () => (
    <Preview>
      <Avatar16 />
    </Preview>
  ),
};

export const Avatar17Story: Story = {
  name: "Avatar rendered as a button",
  render: () => (
    <Preview>
      <Avatar17 />
    </Preview>
  ),
};

export const Avatar18Story: Story = {
  name: "Avatar rendered as a link",
  render: () => (
    <Preview>
      <Avatar18 />
    </Preview>
  ),
};

export const Avatar19Story: Story = {
  name: "Avatars sized from a parent element",
  render: () => (
    <Preview>
      <Avatar19 />
    </Preview>
  ),
};

export const Avatar20Story: Story = {
  name: "Avatar with a tooltip",
  render: () => (
    <Preview>
      <Avatar20 />
    </Preview>
  ),
};

export const Avatar21Story: Story = {
  name: "Avatar group with a tooltip per member",
  render: () => (
    <Preview>
      <Avatar21 />
    </Preview>
  ),
};
