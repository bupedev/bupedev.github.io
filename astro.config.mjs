import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

export default defineConfig({
  site: "https://bupe.dev",
  base: process.env.BASE_PATH || "/",
  output: "static",
  markdown: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
