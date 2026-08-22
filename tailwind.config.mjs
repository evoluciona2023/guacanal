import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dusk: '#211829',
				ember: '#E8582F',
				cane: '#D6A536',
				rio: '#4F7C90',
				campo: '#4C7A3F',
				paper: '#FAF6F0',
				ink: '#2B2230',
			},
			fontFamily: {
				serif: ['"Instrument Serif"', 'Georgia', 'serif'],
				sans: ['Karla', 'system-ui', 'sans-serif'],
				mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
			},
		},
	},
	plugins: [typography],
}
