import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
	site: 'https://alamedadecervera.com',
	// Enable Preact to support Preact JSX components.
	integrations: [preact(), tailwind(), mdx(), sitemap()],
	output: 'static',
	adapter: vercel({
		mode: 'static',
		imageConfig: {
			sizes: [320, 640, 1280]
		},
		imageService: true,
		webAnalytics: {
			enabled: true
		},
		speedInsights: {
			enabled: true
		}
	})
})
