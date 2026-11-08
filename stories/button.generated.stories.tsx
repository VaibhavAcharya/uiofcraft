import type { Meta, StoryObj } from "@storybook/react-vite";
import Button1 from "./examples/button/button-1";
import Button2 from "./examples/button/button-2";
import Button3 from "./examples/button/button-3";
import Button4 from "./examples/button/button-4";
import Button5 from "./examples/button/button-5";
import Button6 from "./examples/button/button-6";
import Button7 from "./examples/button/button-7";
import Button8 from "./examples/button/button-8";
import Button9 from "./examples/button/button-9";
import Button10 from "./examples/button/button-10";
import Button11 from "./examples/button/button-11";
import Button12 from "./examples/button/button-12";
import Button13 from "./examples/button/button-13";
import Button14 from "./examples/button/button-14";
import Button15 from "./examples/button/button-15";
import Button16 from "./examples/button/button-16";
import Button17 from "./examples/button/button-17";
import Button18 from "./examples/button/button-18";
import Button19 from "./examples/button/button-19";
import Button20 from "./examples/button/button-20";
import Button21 from "./examples/button/button-21";
import Button22 from "./examples/button/button-22";
import Button23 from "./examples/button/button-23";
import Button24 from "./examples/button/button-24";
import Button26 from "./examples/button/button-26";
import Button27 from "./examples/button/button-27";
import Button28 from "./examples/button/button-28";
import Button29 from "./examples/button/button-29";
import Button30 from "./examples/button/button-30";
import Button31 from "./examples/button/button-31";
import Button32 from "./examples/button/button-32";
import Button33 from "./examples/button/button-33";
import Button34 from "./examples/button/button-34";
import Button35 from "./examples/button/button-35";
import Button36 from "./examples/button/button-36";
import Button37 from "./examples/button/button-37";
import Button38 from "./examples/button/button-38";
import Button39 from "./examples/button/button-39";
import Button40 from "./examples/button/button-40";
import Button41 from "./examples/button/button-41";
import { Preview } from "./preview";

const meta = {
  title: "Components/Button",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Button1Story: Story = {
  name: "Default button",
  render: () => (
    <Preview>
      <Button1 />
    </Preview>
  ),
};

export const Button2Story: Story = {
  name: "Outline button",
  render: () => (
    <Preview>
      <Button2 />
    </Preview>
  ),
};

export const Button3Story: Story = {
  name: "Secondary button",
  render: () => (
    <Preview>
      <Button3 />
    </Preview>
  ),
};

export const Button4Story: Story = {
  name: "Destructive button",
  render: () => (
    <Preview>
      <Button4 />
    </Preview>
  ),
};

export const Button5Story: Story = {
  name: "Destructive outline button",
  render: () => (
    <Preview>
      <Button5 />
    </Preview>
  ),
};

export const Button6Story: Story = {
  name: "Ghost button",
  render: () => (
    <Preview>
      <Button6 />
    </Preview>
  ),
};

export const Button7Story: Story = {
  name: "Link button",
  render: () => (
    <Preview>
      <Button7 />
    </Preview>
  ),
};

export const Button8Story: Story = {
  name: "Extra-small button",
  render: () => (
    <Preview>
      <Button8 />
    </Preview>
  ),
};

export const Button9Story: Story = {
  name: "Small button",
  render: () => (
    <Preview>
      <Button9 />
    </Preview>
  ),
};

export const Button10Story: Story = {
  name: "Large button",
  render: () => (
    <Preview>
      <Button10 />
    </Preview>
  ),
};

export const Button11Story: Story = {
  name: "Extra-large button",
  render: () => (
    <Preview>
      <Button11 />
    </Preview>
  ),
};

export const Button12Story: Story = {
  name: "Disabled button",
  render: () => (
    <Preview>
      <Button12 />
    </Preview>
  ),
};

export const Button13Story: Story = {
  name: "Icon button",
  render: () => (
    <Preview>
      <Button13 />
    </Preview>
  ),
};

export const Button14Story: Story = {
  name: "Small icon button",
  render: () => (
    <Preview>
      <Button14 />
    </Preview>
  ),
};

export const Button15Story: Story = {
  name: "Large icon button",
  render: () => (
    <Preview>
      <Button15 />
    </Preview>
  ),
};

export const Button16Story: Story = {
  name: "Button with icon",
  render: () => (
    <Preview>
      <Button16 />
    </Preview>
  ),
};

export const Button17Story: Story = {
  name: "Link rendered as button",
  render: () => (
    <Preview>
      <Button17 />
    </Preview>
  ),
};

export const Button18Story: Story = {
  name: "Custom loading button with manual Spinner",
  render: () => (
    <Preview>
      <Button18 />
    </Preview>
  ),
};

export const Button19Story: Story = {
  name: "Expandable show more/less toggle button",
  render: () => (
    <Preview>
      <Button19 />
    </Preview>
  ),
};

export const Button20Story: Story = {
  name: "Back link button with chevron",
  render: () => (
    <Preview>
      <Button20 />
    </Preview>
  ),
};

export const Button21Story: Story = {
  name: "Card-style button with heading and description",
  render: () => (
    <Preview>
      <Button21 />
    </Preview>
  ),
};

export const Button22Story: Story = {
  name: "Directional pad control buttons",
  render: () => (
    <Preview>
      <Button22 />
    </Preview>
  ),
};

export const Button23Story: Story = {
  name: "Outline like button with count",
  render: () => (
    <Preview>
      <Button23 />
    </Preview>
  ),
};

export const Button24Story: Story = {
  name: "Social login icon buttons",
  render: () => (
    <Preview>
      <Button24 />
    </Preview>
  ),
};

export const Button26Story: Story = {
  name: "Star button with count badge",
  render: () => (
    <Preview>
      <Button26 />
    </Preview>
  ),
};

export const Button27Story: Story = {
  name: "Button group with QR code icon and sign in",
  render: () => (
    <Preview>
      <Button27 />
    </Preview>
  ),
};

export const Button28Story: Story = {
  name: "Button with avatar",
  render: () => (
    <Preview>
      <Button28 />
    </Preview>
  ),
};

export const Button29Story: Story = {
  name: "Pill-shaped button with rounded-full styling",
  render: () => (
    <Preview>
      <Button29 />
    </Preview>
  ),
};

export const Button30Story: Story = {
  name: "Button with animated arrow on hover",
  render: () => (
    <Preview>
      <Button30 />
    </Preview>
  ),
};

export const Button31Story: Story = {
  name: "Button with keyboard shortcut indicator",
  render: () => (
    <Preview>
      <Button31 />
    </Preview>
  ),
};

export const Button32Story: Story = {
  name: "Button with notification badge",
  render: () => (
    <Preview>
      <Button32 />
    </Preview>
  ),
};

export const Button33Story: Story = {
  name: "Paired buttons (Cancel/Save)",
  render: () => (
    <Preview>
      <Button33 />
    </Preview>
  ),
};

export const Button34Story: Story = {
  name: "Button with animated status dot",
  render: () => (
    <Preview>
      <Button34 />
    </Preview>
  ),
};

export const Button35Story: Story = {
  name: "Icon-only copy button with feedback",
  render: () => (
    <Preview>
      <Button35 />
    </Preview>
  ),
};

export const Button36Story: Story = {
  name: "Copy button with feedback",
  render: () => (
    <Preview>
      <Button36 />
    </Preview>
  ),
};

export const Button37Story: Story = {
  name: "Rotating icon button (FAB-style toggle)",
  render: () => (
    <Preview>
      <Button37 />
    </Preview>
  ),
};

export const Button38Story: Story = {
  name: "Social login buttons (Google, X, GitHub)",
  render: () => (
    <Preview className="**:data-[slot=preview]:w-full **:data-[slot=preview]:max-w-64">
      <Button38 />
    </Preview>
  ),
};

export const Button39Story: Story = {
  name: "Hamburger menu button with animated icon",
  render: () => (
    <Preview>
      <Button39 />
    </Preview>
  ),
};

export const Button40Story: Story = {
  name: "Download button with progress and cancel action",
  render: () => (
    <Preview>
      <Button40 />
    </Preview>
  ),
};

export const Button41Story: Story = {
  name: "Button using the built-in loading prop",
  render: () => (
    <Preview>
      <Button41 />
    </Preview>
  ),
};
