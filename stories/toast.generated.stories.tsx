import type { Meta, StoryObj } from "@storybook/react-vite";
import Toast1 from "./examples/toast/toast-1";
import Toast2 from "./examples/toast/toast-2";
import Toast3 from "./examples/toast/toast-3";
import Toast4 from "./examples/toast/toast-4";
import Toast5 from "./examples/toast/toast-5";
import Toast6 from "./examples/toast/toast-6";
import Toast7 from "./examples/toast/toast-7";
import Toast8 from "./examples/toast/toast-8";
import Toast9 from "./examples/toast/toast-9";
import Toast10 from "./examples/toast/toast-10";
import Toast11 from "./examples/toast/toast-11";
import Toast12 from "./examples/toast/toast-12";
import Toast13 from "./examples/toast/toast-13";
import { Preview } from "./preview";

const meta = {
  title: "Components/Toast",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Toast1Story: Story = {
  name: "Default stacked toast with title and description",
  render: () => (
    <Preview>
      <Toast1 />
    </Preview>
  ),
};

export const Toast2Story: Story = {
  name: "Stacked toasts by semantic type (success, error, info, warning)",
  render: () => (
    <Preview>
      <Toast2 />
    </Preview>
  ),
};

export const Toast3Story: Story = {
  name: "Loading-state stacked toast",
  render: () => (
    <Preview>
      <Toast3 />
    </Preview>
  ),
};

export const Toast4Story: Story = {
  name: "Stacked toast with primary action (undo)",
  render: () => (
    <Preview>
      <Toast4 />
    </Preview>
  ),
};

export const Toast5Story: Story = {
  name: "Promise-based stacked toast",
  render: () => (
    <Preview>
      <Toast5 />
    </Preview>
  ),
};

export const Toast6Story: Story = {
  name: "Stacked toasts with varying content height",
  render: () => (
    <Preview>
      <Toast6 />
    </Preview>
  ),
};

export const Toast7Story: Story = {
  name: "Anchored tooltip-style toast after copy",
  render: () => (
    <Preview>
      <Toast7 />
    </Preview>
  ),
};

export const Toast8Story: Story = {
  name: "Anchored error toast after async failure",
  render: () => (
    <Preview>
      <Toast8 />
    </Preview>
  ),
};

export const Toast9Story: Story = {
  name: "Long-running promise toast with cancel",
  render: () => (
    <Preview>
      <Toast9 />
    </Preview>
  ),
};

export const Toast10Story: Story = {
  name: "Deduplicated success toast",
  render: () => (
    <Preview>
      <Toast10 />
    </Preview>
  ),
};

export const Toast11Story: Story = {
  name: "Deduplicated error toast",
  render: () => (
    <Preview>
      <Toast11 />
    </Preview>
  ),
};

export const Toast12Story: Story = {
  name: "Anchored deduplicated success toast",
  render: () => (
    <Preview>
      <Toast12 />
    </Preview>
  ),
};

export const Toast13Story: Story = {
  name: "Anchored deduplicated error toast",
  render: () => (
    <Preview>
      <Toast13 />
    </Preview>
  ),
};
