/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#094293',
				secondary: '#4c6da6',
				indigo: {
					50: '#DDEBFD',
					100: '#BCD6FB',
					200: '#78ADF7',
					300: '#3584F3',
					400: '#0D60D3',
					500: '#094293',
					600: '#073473',
					700: '#052757',
					800: '#041A3A',
					900: '#020D1D',
					950: '#01070E'
				}
			}
		}
	},
	plugins: []
}
