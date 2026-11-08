import type { Meta, StoryObj } from "@storybook/react-vite";
import Dialog1 from "./examples/dialog/dialog-1";
import Dialog2 from "./examples/dialog/dialog-2";
import Dialog3 from "./examples/dialog/dialog-3";
import Dialog4 from "./examples/dialog/dialog-4";
import Dialog5 from "./examples/dialog/dialog-5";
import Dialog6 from "./examples/dialog/dialog-6";
import { Preview } from "./preview";

const meta = {
  title: "Components/Dialog",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dialog1Story: Story = {
  name: "Dialog with form",
  render: () => (
    <Preview>
      <Dialog1 />
    </Preview>
  ),
};

export const Dialog2Story: Story = {
  name: "Dialog opened from menu",
  render: () => (
    <Preview>
      <Dialog2 />
    </Preview>
  ),
};

export const Dialog3Story: Story = {
  name: "Nested dialogs",
  render: () => (
    <Preview>
      <Dialog3 />
    </Preview>
  ),
};

export const Dialog4Story: Story = {
  name: "Dialog with close confirmation",
  render: () => (
    <Preview>
      <Dialog4 />
    </Preview>
  ),
};

export const Dialog5Story: Story = {
  name: "Dialog with long content",
  render: () => (
    <Preview>
      <Dialog5 />
    </Preview>
  ),
};

export const Dialog6Story: Story = {
  name: "Dialog with bare footer",
  render: () => (
    <Preview>
      <Dialog6 />
    </Preview>
  ),
};
