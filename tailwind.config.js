/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				beige: '#fff0e5ff',
				'beige-dark': '#e0ccbd',
				'beige-off-dark': '#d6bdaa',
				'custom-brown-dark': '#352109ff',
				'custom-brown-light': '#402809ff'
			},
			fontFamily: {
				argos: "'Argos Bold', Georgia, serif",
				gothic: "'Gothic A1', Helvetica, sans-serif",
				poppins: "'Poppins', 'Gothic A1', Helvetica, sans-serif"
			}
		}
	},
	plugins: []
};
