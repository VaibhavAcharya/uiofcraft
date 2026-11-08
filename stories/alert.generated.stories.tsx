import type { Meta, StoryObj } from "@storybook/react-vite";
import Alert1 from "./examples/alert/alert-1";
import Alert2 from "./examples/alert/alert-2";
import Alert3 from "./examples/alert/alert-3";
import Alert4 from "./examples/alert/alert-4";
import Alert5 from "./examples/alert/alert-5";
import Alert6 from "./examples/alert/alert-6";
import Alert7 from "./examples/alert/alert-7";
import { Preview } from "./preview";

const meta = {
  title: "Components/Alert",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Alert1Story: Story = {
  name: "Basic alert",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full">
      <Alert1 />
    </Preview>
  ),
};

export const Alert2Story: Story = {
  name: "Alert with icon",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full">
      <Alert2 />
    </Preview>
  ),
};

export const Alert3Story: Story = {
  name: "Alert with icon and action buttons",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full">
      <Alert3 />
    </Preview>
  ),
};

export const Alert4Story: Story = {
  name: "Info alert",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full">
      <Alert4 />
    </Preview>
  ),
};

export const Alert5Story: Story = {
  name: "Success alert",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full">
      <Alert5 />
    </Preview>
  ),
};

export const Alert6Story: Story = {
  name: "Warning alert",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full">
      <Alert6 />
    </Preview>
  ),
};

export const Alert7Story: Story = {
  name: "Error alert",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full">
      <Alert7 />
    </Preview>
  ),
};
