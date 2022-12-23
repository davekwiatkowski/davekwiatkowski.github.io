const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        BG: '#fff',
        TEXT_DE_EMP: '#777471',
        TEXT: '#000',
        PRIMARY: '#9B6400',
        LINK: '#3984FF',
        LINK_HOVER: '#0061FE',
      },
    },
    fontSize: {
      display: '20vw',
      ...defaultTheme.fontSize,
    },
  },
  plugins: [],
};
