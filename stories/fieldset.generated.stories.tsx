import type { Meta, StoryObj } from "@storybook/react-vite";
import Fieldset1 from "./examples/fieldset/fieldset-1";
import { Preview } from "./preview";

const meta = {
  title: "Components/Fieldset",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Fieldset1Story: Story = {
  name: "Fieldset with multiple fields",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Fieldset1 />
    </Preview>
  ),
};
