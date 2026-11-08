import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Components/Label",
  component: Label,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithInput: Story = {
  name: "Label with input",
  render: () => (
    <div className="flex w-64 flex-col gap-2">
      <Label htmlFor="label-email">Email</Label>
      <Input id="label-email" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  name: "Label with checkbox",
  render: () => (
    <Label>
      <Checkbox />
      Accept terms
    </Label>
  ),
};
