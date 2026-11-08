import type { Meta, StoryObj } from "@storybook/react-vite";
import Menu1 from "./examples/menu/menu-1";
import Menu2 from "./examples/menu/menu-2";
import Menu3 from "./examples/menu/menu-3";
import Menu4 from "./examples/menu/menu-4";
import Menu5 from "./examples/menu/menu-5";
import Menu6 from "./examples/menu/menu-6";
import Menu7 from "./examples/menu/menu-7";
import Menu8 from "./examples/menu/menu-8";
import Menu9 from "./examples/menu/menu-9";
import { Preview } from "./preview";

const meta = {
  title: "Components/Menu",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Menu1Story: Story = {
  name: "Basic menu",
  render: () => (
    <Preview>
      <Menu1 />
    </Preview>
  ),
};

export const Menu2Story: Story = {
  name: "Menu with hover",
  render: () => (
    <Preview>
      <Menu2 />
    </Preview>
  ),
};

export const Menu3Story: Story = {
  name: "Menu with checkbox",
  render: () => (
    <Preview>
      <Menu3 />
    </Preview>
  ),
};

export const Menu4Story: Story = {
  name: "Menu with radio group",
  render: () => (
    <Preview>
      <Menu4 />
    </Preview>
  ),
};

export const Menu5Story: Story = {
  name: "Menu with link",
  render: () => (
    <Preview>
      <Menu5 />
    </Preview>
  ),
};

export const Menu6Story: Story = {
  name: "Menu with group labels",
  render: () => (
    <Preview>
      <Menu6 />
    </Preview>
  ),
};

export const Menu7Story: Story = {
  name: "Nested menu",
  render: () => (
    <Preview>
      <Menu7 />
    </Preview>
  ),
};

export const Menu8Story: Story = {
  name: "Menu close on click",
  render: () => (
    <Preview>
      <Menu8 />
    </Preview>
  ),
};

export const Menu9Story: Story = {
  name: "Menu with checkbox items as switches",
  render: () => (
    <Preview>
      <Menu9 />
    </Preview>
  ),
};
