const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        BG: '#EEE9E2', // Dropbox Base 06
        TEXT_DE_EMP: '#8E8B87', // Dropbox Base 11
        TEXT: '#1E1919', // Dropbox Core Graphite
        PRIMARY: '#9B6400', // Dropbox Accent Gold
        LINK: '#0061FE', // Dropbox Core Blue
        LINK_HOVER: '#3984FF', // Dropbox Core Blue Night
        ACCENT: {
          1: '#283750', // Dropbox Accent Navy
          2: '#78286E', // Dropbox Accent Plum
          3: '#007891', // Dropbox Accent Ocean
          4: '#0F503C', // Dropbox Accent Canopy
        },
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
