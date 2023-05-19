import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://alamedadecervera.com',
  // Enable Preact to support Preact JSX components.
  integrations: [preact(), tailwind(), mdx(), sitemap(), image()]
});