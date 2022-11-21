/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				wave: "url('./src/assets/wave.svg')",
				WaveColor:
					'radial-gradient(75% 75% at 50% 50%, #8b5cf6 0%, #581c87 98%);',
				tite: '#f2e8e5',
			},
		},
	},
	plugins: [],
};
