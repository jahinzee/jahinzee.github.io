// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://jahinzee.github.io",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: "ayu-dark",
    },
  },
  redirects: {
    "/garden": "/garden/home"
  }
});
