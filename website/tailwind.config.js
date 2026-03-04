const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        BG: '#FAF9F7',
        BG_SECONDARY: '#F0EFEB',
        TEXT: '#191918',
        TEXT_DE_EMP: '#6B6B6B',
        PRIMARY: '#CC785C',
        LINK: '#CC785C',
        LINK_HOVER: '#B5654A',
        HIGHLIGHT: '#F0EFEB',
        BORDER: '#E5E3DE',
      },
      fontFamily: {
        MAIN: ['"Inter"', 'system-ui', 'sans-serif'],
        HEADING: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
    },
    fontSize: {
      display: '20vw',
      ...defaultTheme.fontSize,
    },
  },
  plugins: [],
};
