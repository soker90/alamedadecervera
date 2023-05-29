import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import image from '@astrojs/image'

import vercel from '@astrojs/vercel/static'

// https://astro.build/config
export default defineConfig({
	site: 'https://alamedadecervera.com',
	// Enable Preact to support Preact JSX components.
	integrations: [preact(), tailwind(), mdx(), sitemap(), image({
		// Sharp is not supported for my computer
		...(import.meta.env.MODE !== 'development' && {
			serviceEntryPoint: '@astrojs/image/sharp'
		})
	})],
	output: 'static',
	adapter: vercel({
		imageConfig: {
			sizes: [320, 640, 1280]
		},
		imageService: true,
		analytics: true
	}),
	experimental: {
		assets: true
	}
})