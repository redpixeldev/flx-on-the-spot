module.exports = {
  content: ["./src/**/*.{html,njk,md}"],
  theme: {
    fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
		},
		screens: {
			xs: "530px",
			sm: "640px",
			md: "768px",
			desk: "890px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},

		extend: {
			spacing: {
				96: '24rem',
				100: '25rem,'
			},
		}
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
