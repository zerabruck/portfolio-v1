module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				sfMonoRegular: ["SFmonoRegular", "Roboto", "sans-serif"],
				calibreRegular: ["calibreRegular", "Roboto", "sans-serif"],
				calibreSemiBold: ["calibreSemiBold", "Roboto", "sans-serif"],
			},
			colors: {
				"theme-blue-base": "#172a45",
				"theme-blue-deep": "#0a192f",
				"theme-gray-light": "#ccd6f6",
				"theme-gray-deep": "#8892b0",

				"theme-dark-navy": "#020c1b",
				"theme-navy": "#0a192f",
				"theme-light-navy": "#112240",
				"theme-lightest-navy": "#233554",
				"theme-navy-shadow": "rgba(2, 12, 27, 0.7)",
				"theme-dark-slate": "#495670",
				"theme-slate": "#8892b0",
				"theme-light-slate": "#a8b2d1",
				"theme-lightest-slate": "#ccd6f6",
				"theme-white": "#e6f1ff",
				"theme-green": "#64ffda",
				"theme-green-tint": "rgba(100, 255, 218, 0.1)",
				"theme-pink": "#f57dff",
				"theme-blue": "#57cbff",
			},
		},
	},
	// plugins: [require("tailwind-scrollbar")],
	// variants: {
	// 	scrollbar: ["rounded"],
	// },
};
