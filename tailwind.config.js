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
				light: colors.lime[100],
				DEFAULT: colors.yellow[500],
			},
			text: {
				light: colors.slate[500],
				DEFAULT: colors.slate[900],
				negative: colors.slate[50],
			},
		},
	},
	plugins: [],
};
