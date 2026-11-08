import type { Meta, StoryObj } from "@storybook/react-vite";
import Drawer1 from "./examples/drawer/drawer-1";
import Drawer2 from "./examples/drawer/drawer-2";
import Drawer3 from "./examples/drawer/drawer-3";
import Drawer4 from "./examples/drawer/drawer-4";
import Drawer5 from "./examples/drawer/drawer-5";
import Drawer6 from "./examples/drawer/drawer-6";
import Drawer7 from "./examples/drawer/drawer-7";
import Drawer8 from "./examples/drawer/drawer-8";
import Drawer9 from "./examples/drawer/drawer-9";
import Drawer10 from "./examples/drawer/drawer-10";
import Drawer11 from "./examples/drawer/drawer-11";
import Drawer12 from "./examples/drawer/drawer-12";
import Drawer13 from "./examples/drawer/drawer-13";
import Drawer14 from "./examples/drawer/drawer-14";
import Drawer15 from "./examples/drawer/drawer-15";
import { Preview } from "./preview";

const meta = {
  title: "Components/Drawer",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Drawer1Story: Story = {
  name: "Simple bottom drawer with close button",
  render: () => (
    <Preview>
      <Drawer1 />
    </Preview>
  ),
};

export const Drawer2Story: Story = {
  name: "Bottom drawer without drag bar",
  render: () => (
    <Preview>
      <Drawer2 />
    </Preview>
  ),
};

export const Drawer3Story: Story = {
  name: "Drawer with close button",
  render: () => (
    <Preview>
      <Drawer3 />
    </Preview>
  ),
};

export const Drawer4Story: Story = {
  name: "Inset variant drawers for all four positions",
  render: () => (
    <Preview>
      <Drawer4 />
    </Preview>
  ),
};

export const Drawer5Story: Story = {
  name: "Straight variant drawers for all four positions",
  render: () => (
    <Preview>
      <Drawer5 />
    </Preview>
  ),
};

export const Drawer6Story: Story = {
  name: "Scrollable content with terms and conditions",
  render: () => (
    <Preview>
      <Drawer6 />
    </Preview>
  ),
};

export const Drawer7Story: Story = {
  name: "Nested bottom drawers with centered content",
  render: () => (
    <Preview>
      <Drawer7 />
    </Preview>
  ),
};

export const Drawer8Story: Story = {
  name: "Nested right drawers with inset variant",
  render: () => (
    <Preview>
      <Drawer8 />
    </Preview>
  ),
};

export const Drawer9Story: Story = {
  name: "Bottom drawer with snap points",
  render: () => (
    <Preview>
      <Drawer9 />
    </Preview>
  ),
};

export const Drawer10Story: Story = {
  name: "Edit profile form with default and bare footer variants",
  render: () => (
    <Preview>
      <Drawer10 />
    </Preview>
  ),
};

export const Drawer11Story: Story = {
  name: "Mobile menu drawer from the left",
  render: () => (
    <Preview>
      <Drawer11 />
    </Preview>
  ),
};

export const Drawer12Story: Story = {
  name: "Responsive edit profile: dialog on desktop, drawer on mobile",
  render: () => (
    <Preview>
      <Drawer12 />
    </Preview>
  ),
};

export const Drawer13Story: Story = {
  name: "Responsive actions menu: menu on desktop, drawer on mobile",
  render: () => (
    <Preview>
      <Drawer13 />
    </Preview>
  ),
};

export const Drawer14Story: Story = {
  name: "Left drawer with swipe area",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-md">
      <Drawer14 />
    </Preview>
  ),
};

export const Drawer15Story: Story = {
  name: "Chat composer pinned above the mobile keyboard",
  render: () => (
    <Preview>
      <Drawer15 />
    </Preview>
  ),
};
