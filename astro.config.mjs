import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
	site: 'https://alamedadecervera.com',
	// Enable Preact to support Preact JSX components.
	integrations: [preact(), mdx(), sitemap()],
	output: 'static',
	vite: {
		plugins: [tailwindcss()]
	},
	adapter: vercel({
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
