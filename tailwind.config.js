/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				gray: "var(--gray)",
				primary: "var(--primary)",
				lightPrimary: "var(--lightPrimary)",
				secondary: "var(--secondary)",
				lightSecondary: "var(--lightSecondary)",
				accent: "var(--accent)",
				lightAccent: "var(--lightAccent)",
			},
		},
	},
	plugins: [],
};
