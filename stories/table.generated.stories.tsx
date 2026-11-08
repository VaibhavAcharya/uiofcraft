import type { Meta, StoryObj } from "@storybook/react-vite";
import Table1 from "./examples/table/table-1";
import Table2 from "./examples/table/table-2";
import Table3 from "./examples/table/table-3";
import Table4 from "./examples/table/table-4";
import Table5 from "./examples/table/table-5";
import Table6 from "./examples/table/table-6";
import Table7 from "./examples/table/table-7";
import Table8 from "./examples/table/table-8";
import { Preview } from "./preview";

const meta = {
  title: "Components/Table",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Table1Story: Story = {
  name: "Basic table",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full sm:**:data-[slot=preview]:max-w-4xl">
      <Table1 />
    </Preview>
  ),
};

export const Table2Story: Story = {
  name: "Frame with card-style table",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full sm:**:data-[slot=preview]:max-w-4xl">
      <Table2 />
    </Preview>
  ),
};

export const Table3Story: Story = {
  name: "Table with TanStack Table and checkboxes",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full sm:**:data-[slot=preview]:max-w-4xl">
      <Table3 />
    </Preview>
  ),
};

export const Table4Story: Story = {
  name: "Table with TanStack Table, sorting, and pagination",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full sm:**:data-[slot=preview]:max-w-4xl">
      <Table4 />
    </Preview>
  ),
};

export const Table5Story: Story = {
  name: "Card-style table variant",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full sm:**:data-[slot=preview]:max-w-4xl">
      <Table5 />
    </Preview>
  ),
};

export const Table6Story: Story = {
  name: "CardFrame with TanStack Table and checkboxes",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full sm:**:data-[slot=preview]:max-w-4xl">
      <Table6 />
    </Preview>
  ),
};

export const Table7Story: Story = {
  name: "CardFrame with card-style table",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full sm:**:data-[slot=preview]:max-w-4xl">
      <Table7 />
    </Preview>
  ),
};

export const Table8Story: Story = {
  name: "CardFrame with TanStack Table, sorting, and pagination",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full sm:**:data-[slot=preview]:max-w-4xl">
      <Table8 />
    </Preview>
  ),
};
