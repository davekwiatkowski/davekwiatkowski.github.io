const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      colors: {
        BG: "#f3f0f0",
        ACCENT: "#00aaff",
      },
    },
    fontSize: {
      display: "20vw",
      ...defaultTheme.fontSize,
    },
  },
  plugins: [],
};
