/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['src/**/*.{js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Century Gothic', 'sans-serif'],
				serif: ['Century Schoolbook'],
				mono: ['Source Code Pro'],
			},
		},
	},
	plugins: [],
};
