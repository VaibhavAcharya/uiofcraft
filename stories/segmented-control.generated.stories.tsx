import type { Meta, StoryObj } from "@storybook/react-vite";
import Navigation1 from "./examples/segmented-control/navigation-1";
import Navigation2 from "./examples/segmented-control/navigation-2";
import Navigation3 from "./examples/segmented-control/navigation-3";
import { Preview } from "./preview";

const meta = {
  title: "Components/Segmented Control",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Navigation1Story: Story = {
  name: "Segmented navigation built with links",
  render: () => (
    <Preview>
      <Navigation1 />
    </Preview>
  ),
};

export const Navigation2Story: Story = {
  name: "Small segmented navigation built with links",
  render: () => (
    <Preview>
      <Navigation2 />
    </Preview>
  ),
};

export const Navigation3Story: Story = {
  name: "Large segmented navigation built with links",
  render: () => (
    <Preview>
      <Navigation3 />
    </Preview>
  ),
};
