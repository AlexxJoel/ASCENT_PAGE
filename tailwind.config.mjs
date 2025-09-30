/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('tailwindcss/plugin')(({ addBase, theme }) => {
			addBase({
				'.prose': {
					color: theme('colors.gray.300'),
				},
				'.prose h2': {
					color: theme('colors.white'),
					borderBottom: `2px solid ${theme('colors.blue.600')}`,
					paddingBottom: '0.5rem',
					marginTop: '2rem',
					marginBottom: '1rem',
				},
				'.prose ul': {
					listStyleType: 'disc',
					paddingLeft: '1.5rem',
					color: theme('colors.gray.300'),
				},
			});
		}),
	],
}
