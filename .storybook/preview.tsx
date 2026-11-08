import type { Decorator, Preview } from "@storybook/react-vite";
import { AnchoredToastProvider, ToastProvider } from "@/components/ui/toast";
import "./storybook.css";

const withTheme: Decorator = (Story, { globals }) => {
  document.documentElement.classList.toggle("dark", globals.theme === "dark");
  return <Story />;
};

const withToasts: Decorator = (Story) => (
  <ToastProvider>
    <AnchoredToastProvider>
      <Story />
    </AnchoredToastProvider>
  </ToastProvider>
);

const preview: Preview = {
  decorators: [withTheme, withToasts],
  globalTypes: {
    theme: {
      description: "Color theme",
      toolbar: { icon: "mirror", items: ["light", "dark"], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: "light" },
};

export default preview;
