import type { Meta, StoryObj } from "@storybook/react-vite";
import Pagination1 from "./examples/pagination/pagination-1";
import Pagination2 from "./examples/pagination/pagination-2";
import Pagination3 from "./examples/pagination/pagination-3";
import { Preview } from "./preview";

const meta = {
  title: "Components/Pagination",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Pagination1Story: Story = {
  name: "Pagination example",
  render: () => (
    <Preview>
      <Pagination1 />
    </Preview>
  ),
};

export const Pagination2Story: Story = {
  name: "Pagination with previous and next buttons only",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full">
      <Pagination2 currentPage={3} totalPages={10} />
    </Preview>
  ),
};

export const Pagination3Story: Story = {
  name: "Pagination with select, and previous and next buttons",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full">
      <Pagination3 totalResults={95} />
    </Preview>
  ),
};
