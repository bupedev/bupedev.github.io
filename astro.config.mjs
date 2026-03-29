import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://bupe.dev",
  base: process.env.BASE_PATH || "/",
  output: "static",
});
