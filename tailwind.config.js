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
				DEFAULT: colors.yellow[500],
				light: colors.yellow[100],
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
