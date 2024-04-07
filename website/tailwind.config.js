const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        BG: '#EEE9E2', // Dropbox Base 06
        TEXT_DE_EMP: '#777471', // Dropbox Base 12
        TEXT: '#1E1919', // Dropbox Core Graphite
        PRIMARY: '#0F503C', // Dropbox Accent Canopy
        LINK: '#0061FE', // Dropbox Core Blue
        LINK_HOVER: '#3984FF', // Dropbox Core Blue Night
        HIGHLIGHT: '#FAD24B', // Dropbox Accent Banana
      },
    },
    fontSize: {
      display: '20vw',
      ...defaultTheme.fontSize,
    },
  },
  plugins: [],
};
