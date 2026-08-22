import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				forest: {
					DEFAULT: '#2D5016',
					light: '#4A7043',
				},
				earth: '#B8763E',
				cream: '#F5F0E6',
				sky: '#7A9E9F',
				bark: '#3D2E1F',
			},
			fontFamily: {
				serif: ['Fraunces', 'Georgia', 'serif'],
				sans: ['"Work Sans"', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [typography],
}
