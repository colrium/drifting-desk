/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
	important: true, // Ensures Tailwind takes precedence
	content: [
		'./src/**/*.{js,jsx}'
		// './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		// './src/components/**/*.{js,ts,jsx,tsx,mdx}',
		// './src/lib/**/*.{js,jsx}',
		// './src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			}
		}
	},
	plugins: []
};
export default tailwindConfig;