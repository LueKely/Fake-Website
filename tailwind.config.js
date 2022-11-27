/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				wave: "url('./src/assets/wave.svg')",
				WaveColor:
					'radial-gradient(at 18% 52%, hsla(283,81%,68%,1) 0px, transparent 50%),radial-gradient(at 79% 42%, hsla(239,81%,74%,1) 0px, transparent 50%),radial-gradient(at 90% 18%, hsla(317,72%,61%,1) 0px, transparent 50%),radial-gradient(at 32% 25%, hsla(264,86%,75%,1) 0px, transparent 50%),radial-gradient(at 2% 61%, hsla(240,95%,79%,1) 0px, transparent 50%),radial-gradient(at 92% 34%, hsla(166,88%,67%,1) 0px, transparent 50%),radial-gradient(at 87% 2%, hsla(321,74%,63%,1) 0px, transparent 50%);',
				tite: '#f2e8e5',
				BannerLogIn: "url('./src/assets/Log-in.webp')",
				SignUp: "url('./src/assets/Clarence.svg')",
			},
		},
	},
	plugins: [],
};
