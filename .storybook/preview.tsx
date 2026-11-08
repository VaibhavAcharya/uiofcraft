import type { Decorator, Preview } from "@storybook/react-vite";
import "./storybook.css";

const withTheme: Decorator = (Story, { globals }) => {
  document.documentElement.classList.toggle("dark", globals.theme === "dark");
  return <Story />;
};

const preview: Preview = {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      description: "Color theme",
      toolbar: { icon: "mirror", items: ["light", "dark"], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: "light" },
};

export default preview;
