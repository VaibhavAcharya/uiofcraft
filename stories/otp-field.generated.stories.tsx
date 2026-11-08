import type { Meta, StoryObj } from "@storybook/react-vite";
import OtpField1 from "./examples/otp-field/otp-field-1";
import OtpField2 from "./examples/otp-field/otp-field-2";
import OtpField3 from "./examples/otp-field/otp-field-3";
import OtpField4 from "./examples/otp-field/otp-field-4";
import OtpField6 from "./examples/otp-field/otp-field-6";
import OtpField7 from "./examples/otp-field/otp-field-7";
import OtpField8 from "./examples/otp-field/otp-field-8";
import OtpField9 from "./examples/otp-field/otp-field-9";
import OtpField10 from "./examples/otp-field/otp-field-10";
import { Preview } from "./preview";

const meta = {
  title: "Components/Otp Field",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const OtpField1Story: Story = {
  name: "Basic OTP field",
  render: () => (
    <Preview>
      <OtpField1 />
    </Preview>
  ),
};

export const OtpField2Story: Story = {
  name: "Large OTP field",
  render: () => (
    <Preview>
      <OtpField2 />
    </Preview>
  ),
};

export const OtpField3Story: Story = {
  name: "OTP field with separator",
  render: () => (
    <Preview>
      <OtpField3 />
    </Preview>
  ),
};

export const OtpField4Story: Story = {
  name: "OTP field with label",
  render: () => (
    <Preview>
      <OtpField4 />
    </Preview>
  ),
};

export const OtpField6Story: Story = {
  name: "OTP field with custom sanitization",
  render: () => (
    <Preview>
      <OtpField6 />
    </Preview>
  ),
};

export const OtpField7Story: Story = {
  name: "OTP field with auto validation",
  render: () => (
    <Preview>
      <OtpField7 />
    </Preview>
  ),
};

export const OtpField8Story: Story = {
  name: "Alphanumeric OTP field",
  render: () => (
    <Preview>
      <OtpField8 />
    </Preview>
  ),
};

export const OtpField9Story: Story = {
  name: "OTP field with placeholder hints",
  render: () => (
    <Preview>
      <OtpField9 />
    </Preview>
  ),
};

export const OtpField10Story: Story = {
  name: "Masked OTP field",
  render: () => (
    <Preview>
      <OtpField10 />
    </Preview>
  ),
};
