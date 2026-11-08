import type { Meta, StoryObj } from "@storybook/react-vite";
import Composer1 from "./examples/composer/composer-1";
import Composer2 from "./examples/composer/composer-2";
import Composer3 from "./examples/composer/composer-3";
import Composer4 from "./examples/composer/composer-4";
import Composer5 from "./examples/composer/composer-5";
import Composer6 from "./examples/composer/composer-6";
import Composer7 from "./examples/composer/composer-7";
import Composer8 from "./examples/composer/composer-8";
import Composer9 from "./examples/composer/composer-9";
import Composer10 from "./examples/composer/composer-10";
import Composer11 from "./examples/composer/composer-11";
import Composer12 from "./examples/composer/composer-12";
import { Preview } from "./preview";

const meta = {
  title: "Components/Composer",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Composer1Story: Story = {
  name: "Composer with people, teams, and slash suggestions",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-xl">
      <Composer1 />
    </Preview>
  ),
};

export const Composer2Story: Story = {
  name: "Composer with asynchronous mention suggestions",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-xl">
      <Composer2 />
    </Preview>
  ),
};

export const Composer3Story: Story = {
  name: "Composer pinned below scrollable drawer content",
  render: () => (
    <Preview>
      <Composer3 />
    </Preview>
  ),
};

export const Composer4Story: Story = {
  name: "Composer surface with a native textarea",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-xl">
      <Composer4 />
    </Preview>
  ),
};

export const Composer5Story: Story = {
  name: "Composer with a custom suggestion list",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-xl">
      <Composer5 />
    </Preview>
  ),
};

export const Composer6Story: Story = {
  name: "Composer with distinct person, team, and action chips",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-xl">
      <Composer6 />
    </Preview>
  ),
};

export const Composer7Story: Story = {
  name: "Contenteditable composer with Send beside a short draft",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-xl">
      <Composer7 />
    </Preview>
  ),
};

export const Composer8Story: Story = {
  name: "Textarea composer with Send beside a short draft",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-xl">
      <Composer8 />
    </Preview>
  ),
};

export const Composer9Story: Story = {
  name: "Rounded adaptive composer with circular actions",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-xl">
      <Composer9 />
    </Preview>
  ),
};

export const Composer10Story: Story = {
  name: "Composer with leading buttons for mentions and slash actions",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-xl">
      <Composer10 />
    </Preview>
  ),
};

export const Composer11Story: Story = {
  name: "Compact rounded adaptive composer with a circular send button",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-xl">
      <Composer11 />
    </Preview>
  ),
};

export const Composer12Story: Story = {
  name: "Composer with colon emoji suggestions that insert plain text",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-xl">
      <Composer12 />
    </Preview>
  ),
};
