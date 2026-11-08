import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), viteReact()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("../src", import.meta.url)),
      "next/link": fileURLToPath(new URL("./next-link.tsx", import.meta.url)),
    },
  },
});
