import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'light-plus'
    }
  },
  site: 'https://jahinzee.github.io'
});