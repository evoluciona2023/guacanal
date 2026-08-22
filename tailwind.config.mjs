import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				paper: '#F3F1EC',
				ink: '#262420',
				green: '#2E7D32',
				navy: '#12305C',
				purple: '#7B5EA7',
			},
			fontFamily: {
				display: ['Poppins', 'system-ui', 'sans-serif'],
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [typography],
}
