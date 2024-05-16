/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Poppins', 'sans-serif'],
				content: ['Rubik', 'sans-serif'],
			},
		},
		colors: {
			primary: {
				dark: colors.yellow[500],
				DEFAULT: colors.yellow[400],
				light: colors.green[200],
			},
			ink: {
				DEFAULT: colors.slate[900],
				light: colors.slate[500],
				lighter: colors.slate[300],
				lightest: colors.slate[200],
				negative: colors.slate[50],
			},
		},
	},
	plugins: [],
};
