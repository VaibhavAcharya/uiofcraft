import type { Meta, StoryObj } from "@storybook/react-vite";
import Tabs1 from "./examples/tabs/tabs-1";
import Tabs2 from "./examples/tabs/tabs-2";
import Tabs3 from "./examples/tabs/tabs-3";
import Tabs4 from "./examples/tabs/tabs-4";
import Tabs5 from "./examples/tabs/tabs-5";
import Tabs6 from "./examples/tabs/tabs-6";
import Tabs7 from "./examples/tabs/tabs-7";
import Tabs8 from "./examples/tabs/tabs-8";
import Tabs9 from "./examples/tabs/tabs-9";
import Tabs10 from "./examples/tabs/tabs-10";
import Tabs11 from "./examples/tabs/tabs-11";
import Tabs12 from "./examples/tabs/tabs-12";
import Tabs13 from "./examples/tabs/tabs-13";
import Tabs14 from "./examples/tabs/tabs-14";
import Tabs15 from "./examples/tabs/tabs-15";
import { Preview } from "./preview";

const meta = {
  title: "Components/Tabs",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tabs1Story: Story = {
  name: "Segmented control built with tabs",
  render: () => (
    <Preview>
      <Tabs1 />
    </Preview>
  ),
};

export const Tabs2Story: Story = {
  name: "Tabs with underline",
  render: () => (
    <Preview>
      <Tabs2 />
    </Preview>
  ),
};

export const Tabs3Story: Story = {
  name: "Vertical tabs",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full sm:**:data-[slot=preview]:max-w-80">
      <Tabs3 />
    </Preview>
  ),
};

export const Tabs4Story: Story = {
  name: "Vertical tabs with underline",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full sm:**:data-[slot=preview]:max-w-80">
      <Tabs4 />
    </Preview>
  ),
};

export const Tabs5Story: Story = {
  name: "Tabs with full rounded triggers",
  render: () => (
    <Preview>
      <Tabs5 />
    </Preview>
  ),
};

export const Tabs6Story: Story = {
  name: "Tabs with icon before name",
  render: () => (
    <Preview>
      <Tabs6 />
    </Preview>
  ),
};

export const Tabs7Story: Story = {
  name: "Tabs with icon before name and underline",
  render: () => (
    <Preview>
      <Tabs7 />
    </Preview>
  ),
};

export const Tabs8Story: Story = {
  name: "Tabs with icon only",
  render: () => (
    <Preview>
      <Tabs8 />
    </Preview>
  ),
};

export const Tabs9Story: Story = {
  name: "Tabs with underline and icon on top",
  render: () => (
    <Preview>
      <Tabs9 />
    </Preview>
  ),
};

export const Tabs10Story: Story = {
  name: "Tabs with count badge",
  render: () => (
    <Preview>
      <Tabs10 />
    </Preview>
  ),
};

export const Tabs11Story: Story = {
  name: "Vertical tabs with underline and icon before name",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full sm:**:data-[slot=preview]:max-w-80">
      <Tabs11 />
    </Preview>
  ),
};

export const Tabs12Story: Story = {
  name: "Tabs with icon only and count badge",
  render: () => (
    <Preview>
      <Tabs12 />
    </Preview>
  ),
};

export const Tabs13Story: Story = {
  name: "Tabs with icon only and grouped tooltips",
  render: () => (
    <Preview>
      <Tabs13 />
    </Preview>
  ),
};

export const Tabs14Story: Story = {
  name: "Small segmented control built with tabs",
  render: () => (
    <Preview>
      <Tabs14 />
    </Preview>
  ),
};

export const Tabs15Story: Story = {
  name: "Large segmented control built with tabs",
  render: () => (
    <Preview>
      <Tabs15 />
    </Preview>
  ),
};
