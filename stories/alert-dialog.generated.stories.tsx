import type { Meta, StoryObj } from "@storybook/react-vite";
import AlertDialog1 from "./examples/alert-dialog/alert-dialog-1";
import AlertDialog2 from "./examples/alert-dialog/alert-dialog-2";
import { Preview } from "./preview";

const meta = {
  title: "Components/Alert Dialog",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const AlertDialog1Story: Story = {
  name: "Alert dialog",
  render: () => (
    <Preview>
      <AlertDialog1 />
    </Preview>
  ),
};

export const AlertDialog2Story: Story = {
  name: "Alert dialog with bare footer",
  render: () => (
    <Preview>
      <AlertDialog2 />
    </Preview>
  ),
};
