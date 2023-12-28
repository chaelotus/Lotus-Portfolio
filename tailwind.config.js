/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: '#ffffff',
				background: '#F5F5F7',
				black: '#000000',
				pointGray: '#666666',
				gray: '#9E9E9E',
				lineGray: '#C6C6C6',
				pointOrange: '#F1A33B',
				porintGreen: '#45C96A',
				porintBlue: '#0A84FF',
			},
			boxShadow: {
				'2xl': '0px 8px 24px rgba(149, 157, 165, 0.2)',
			},
		},
		plugins: [],
	},
};
