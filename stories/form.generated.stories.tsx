import type { Meta, StoryObj } from "@storybook/react-vite";
import Form1 from "./examples/form/form-1";
import Form2 from "./examples/form/form-2";
import { Preview } from "./preview";

const meta = {
  title: "Components/Form",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Form1Story: Story = {
  name: "Input in a form",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Form1 />
    </Preview>
  ),
};

export const Form2Story: Story = {
  name: "Form with zod validation",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Form2 />
    </Preview>
  ),
};
