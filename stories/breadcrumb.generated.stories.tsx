import type { Meta, StoryObj } from "@storybook/react-vite";
import Breadcrumb1 from "./examples/breadcrumb/breadcrumb-1";
import Breadcrumb2 from "./examples/breadcrumb/breadcrumb-2";
import Breadcrumb3 from "./examples/breadcrumb/breadcrumb-3";
import Breadcrumb4 from "./examples/breadcrumb/breadcrumb-4";
import Breadcrumb5 from "./examples/breadcrumb/breadcrumb-5";
import Breadcrumb6 from "./examples/breadcrumb/breadcrumb-6";
import Breadcrumb7 from "./examples/breadcrumb/breadcrumb-7";
import { Preview } from "./preview";

const meta = {
  title: "Components/Breadcrumb",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Breadcrumb1Story: Story = {
  name: "Breadcrumb with menu example",
  render: () => (
    <Preview>
      <Breadcrumb1 />
    </Preview>
  ),
};

export const Breadcrumb2Story: Story = {
  name: "Breadcrumb with custom separator",
  render: () => (
    <Preview>
      <Breadcrumb2 />
    </Preview>
  ),
};

export const Breadcrumb3Story: Story = {
  name: "Breadcrumb with home icon for home link only",
  render: () => (
    <Preview>
      <Breadcrumb3 />
    </Preview>
  ),
};

export const Breadcrumb4Story: Story = {
  name: "Breadcrumb with folders icon menu",
  render: () => (
    <Preview>
      <Breadcrumb4 />
    </Preview>
  ),
};

export const Breadcrumb5Story: Story = {
  name: "Breadcrumb with icons before text",
  render: () => (
    <Preview>
      <Breadcrumb5 />
    </Preview>
  ),
};

export const Breadcrumb6Story: Story = {
  name: "Breadcrumb with dot separators",
  render: () => (
    <Preview>
      <Breadcrumb6 />
    </Preview>
  ),
};

export const Breadcrumb7Story: Story = {
  name: "Breadcrumb with select dropdown",
  render: () => (
    <Preview>
      <Breadcrumb7 />
    </Preview>
  ),
};
