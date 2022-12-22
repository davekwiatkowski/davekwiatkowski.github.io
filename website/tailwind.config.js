const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        BG: '#fff',
        TEXT: '#000',
        TEXT_DE_EMP: '#A8A49E',
        LINK: '#3984FF',
        LINK_HOVER: '#0061FE',
        PRIMARY: '#9B6400',
      },
    },
    fontSize: {
      display: '20vw',
      ...defaultTheme.fontSize,
    },
  },
  plugins: [],
};
