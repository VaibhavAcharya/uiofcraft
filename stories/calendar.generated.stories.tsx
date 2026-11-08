import type { Meta, StoryObj } from "@storybook/react-vite";
import Calendar1 from "./examples/calendar/calendar-1";
import Calendar2 from "./examples/calendar/calendar-2";
import Calendar3 from "./examples/calendar/calendar-3";
import Calendar4 from "./examples/calendar/calendar-4";
import Calendar5 from "./examples/calendar/calendar-5";
import Calendar6 from "./examples/calendar/calendar-6";
import Calendar7 from "./examples/calendar/calendar-7";
import Calendar8 from "./examples/calendar/calendar-8";
import Calendar9 from "./examples/calendar/calendar-9";
import Calendar10 from "./examples/calendar/calendar-10";
import Calendar11 from "./examples/calendar/calendar-11";
import Calendar12 from "./examples/calendar/calendar-12";
import Calendar13 from "./examples/calendar/calendar-13";
import Calendar14 from "./examples/calendar/calendar-14";
import Calendar15 from "./examples/calendar/calendar-15";
import Calendar16 from "./examples/calendar/calendar-16";
import Calendar17 from "./examples/calendar/calendar-17";
import Calendar18 from "./examples/calendar/calendar-18";
import Calendar19 from "./examples/calendar/calendar-19";
import Calendar20 from "./examples/calendar/calendar-20";
import Calendar21 from "./examples/calendar/calendar-21";
import Calendar22 from "./examples/calendar/calendar-22";
import Calendar23 from "./examples/calendar/calendar-23";
import Calendar24 from "./examples/calendar/calendar-24";
import Calendar25 from "./examples/calendar/calendar-25";
import { Preview } from "./preview";

const meta = {
  title: "Components/Calendar",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Calendar1Story: Story = {
  name: "Basic calendar",
  render: () => (
    <Preview>
      <Calendar1 />
    </Preview>
  ),
};

export const Calendar2Story: Story = {
  name: "Calendar with custom cell size",
  render: () => (
    <Preview>
      <Calendar2 />
    </Preview>
  ),
};

export const Calendar3Story: Story = {
  name: "Calendar with date range selection",
  render: () => (
    <Preview>
      <Calendar3 />
    </Preview>
  ),
};

export const Calendar4Story: Story = {
  name: "Calendar with month/year dropdown navigation",
  render: () => (
    <Preview>
      <Calendar4 />
    </Preview>
  ),
};

export const Calendar5Story: Story = {
  name: "Calendar with custom Select dropdown for month/year",
  render: () => (
    <Preview>
      <Calendar5 />
    </Preview>
  ),
};

export const Calendar6Story: Story = {
  name: "Calendar with Combobox dropdown for month/year",
  render: () => (
    <Preview>
      <Calendar6 />
    </Preview>
  ),
};

export const Calendar7Story: Story = {
  name: "Calendar with disabled dates",
  render: () => (
    <Preview>
      <Calendar7 />
    </Preview>
  ),
};

export const Calendar8Story: Story = {
  name: "Calendar with multiple date selection",
  render: () => (
    <Preview>
      <Calendar8 />
    </Preview>
  ),
};

export const Calendar9Story: Story = {
  name: "Calendar with rounded day buttons",
  render: () => (
    <Preview>
      <Calendar9 />
    </Preview>
  ),
};

export const Calendar10Story: Story = {
  name: "Calendar with rounded range selection style",
  render: () => (
    <Preview>
      <Calendar10 />
    </Preview>
  ),
};

export const Calendar11Story: Story = {
  name: "Calendar with right-aligned navigation",
  render: () => (
    <Preview>
      <Calendar11 />
    </Preview>
  ),
};

export const Calendar12Story: Story = {
  name: "Calendar with week numbers",
  render: () => (
    <Preview>
      <Calendar12 />
    </Preview>
  ),
};

export const Calendar13Story: Story = {
  name: "Calendar with year-only combobox dropdown",
  render: () => (
    <Preview>
      <Calendar13 />
    </Preview>
  ),
};

export const Calendar14Story: Story = {
  name: "Calendar without arrow navigation (dropdown only)",
  render: () => (
    <Preview>
      <Calendar14 />
    </Preview>
  ),
};

export const Calendar15Story: Story = {
  name: "Calendar with current month button",
  render: () => (
    <Preview>
      <Calendar15 />
    </Preview>
  ),
};

export const Calendar16Story: Story = {
  name: "Calendar with today button",
  render: () => (
    <Preview>
      <Calendar16 />
    </Preview>
  ),
};

export const Calendar17Story: Story = {
  name: "Calendar with date input",
  render: () => (
    <Preview>
      <Calendar17 />
    </Preview>
  ),
};

export const Calendar18Story: Story = {
  name: "Calendar with time input",
  render: () => (
    <Preview>
      <Calendar18 />
    </Preview>
  ),
};

export const Calendar19Story: Story = {
  name: "Calendar with time slots (appointment picker)",
  render: () => (
    <Preview>
      <Calendar19 />
    </Preview>
  ),
};

export const Calendar20Story: Story = {
  name: "Calendar with date presets",
  render: () => (
    <Preview>
      <Calendar20 />
    </Preview>
  ),
};

export const Calendar21Story: Story = {
  name: "Range calendar with date presets",
  render: () => (
    <Preview>
      <Calendar21 />
    </Preview>
  ),
};

export const Calendar22Story: Story = {
  name: "Two months calendar",
  render: () => (
    <Preview>
      <Calendar22 />
    </Preview>
  ),
};

export const Calendar23Story: Story = {
  name: "Three months calendar",
  render: () => (
    <Preview>
      <Calendar23 />
    </Preview>
  ),
};

export const Calendar24Story: Story = {
  name: "Pricing calendar with custom day buttons",
  render: () => (
    <Preview>
      <Calendar24 />
    </Preview>
  ),
};

export const Calendar25Story: Story = {
  name: "Calendar with 24-hour autocomplete time input",
  render: () => (
    <Preview>
      <Calendar25 />
    </Preview>
  ),
};
