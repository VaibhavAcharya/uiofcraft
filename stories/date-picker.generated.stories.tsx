import type { Meta, StoryObj } from "@storybook/react-vite";
import DatePicker1 from "./examples/date-picker/date-picker-1";
import DatePicker2 from "./examples/date-picker/date-picker-2";
import DatePicker3 from "./examples/date-picker/date-picker-3";
import DatePicker4 from "./examples/date-picker/date-picker-4";
import DatePicker5 from "./examples/date-picker/date-picker-5";
import DatePicker6 from "./examples/date-picker/date-picker-6";
import DatePicker7 from "./examples/date-picker/date-picker-7";
import DatePicker8 from "./examples/date-picker/date-picker-8";
import DatePicker9 from "./examples/date-picker/date-picker-9";
import { Preview } from "./preview";

const meta = {
  title: "Components/Date Picker",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const DatePicker1Story: Story = {
  name: "Basic date picker",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <DatePicker1 />
    </Preview>
  ),
};

export const DatePicker2Story: Story = {
  name: "Date range picker",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <DatePicker2 />
    </Preview>
  ),
};

export const DatePicker3Story: Story = {
  name: "Date picker with field and dropdown navigation",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <DatePicker3 />
    </Preview>
  ),
};

export const DatePicker4Story: Story = {
  name: "Date picker with presets",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <DatePicker4 />
    </Preview>
  ),
};

export const DatePicker5Story: Story = {
  name: "Date picker with input",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <DatePicker5 />
    </Preview>
  ),
};

export const DatePicker6Story: Story = {
  name: "Date picker that closes on select",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <DatePicker6 />
    </Preview>
  ),
};

export const DatePicker7Story: Story = {
  name: "Multiple dates picker",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <DatePicker7 />
    </Preview>
  ),
};

export const DatePicker8Story: Story = {
  name: "Date picker with select-like trigger",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <DatePicker8 />
    </Preview>
  ),
};

export const DatePicker9Story: Story = {
  name: "Two months calendar with range date",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <DatePicker9 />
    </Preview>
  ),
};
