const colors = require('tailwindcss/colors')

module.exports = {
	// @see https://tailwindcss.com/docs/upcoming-changes
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: { light: '', DEFAULT: '#6d6d6d', dark: '' },
			secondary: {
				light: '#0192e2',
				DEFAULT: '#034c75',
				dark: '#202020',
			},
			info: { light: '9b9b9b', DEFAULT: '', dark: 'c3c2c2' },
			warning: { light: '', DEFAULT: '', dark: '' },
			success: { light: '', DEFAULT: '', dark: '' },
			bgLight: { light: '', DEFAULT: '#68c9ff', dark: '' },
			bgDark: { light: '', DEFAULT: '#000000', dark: '' },
			...colors,
		},
		extend: {},
	},
	variants: {},
	plugins: [
		require('tailwindcss'),
		require('precss'),
		require('autoprefixer'),
	],
}
