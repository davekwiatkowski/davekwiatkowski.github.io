const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontSize: {
      display: '20vw',
      ...defaultTheme.fontSize,
    },
  },
  plugins: [],
};
