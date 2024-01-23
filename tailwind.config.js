/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				mobile: { min: '390px', max: '639px' },
				sm: { min: '640px', max: '710px' },
				md: { min: '711px', max: '1023px' },
				lg: { min: '1024px' },
			},
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
				backgroundGray: '#f5f5f7',
			},
			boxShadow: {
				'2xl': '0px 8px 24px rgba(149, 157, 165, 0.2)',
			},
			fontFamily: {
				koreaMachineLight: ['koreaMachineLight'],
				NanumSquareNeoBold: ['NanumSquareNeoBold'],
				NanumSquareNeoExtraBold: ['NanumSquareNeoExtraBold'],
				OAGothicExtraMedium: ['OAGothicExtraMedium'],
				PretendardMedium: ['PretendardMedium'],
				PretendardSemiBold: ['PretendardSemiBold'],
			},
		},
		plugins: [],
	},
};
