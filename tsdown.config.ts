import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts", "src/components/*/*.tsx", "src/hooks/*.ts"],
  format: "esm",
  platform: "neutral",
  unbundle: true,
  dts: true,
  copy: [{ from: "src/styles", to: "dist" }],
});
