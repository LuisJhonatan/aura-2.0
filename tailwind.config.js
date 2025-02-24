module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'personalized': 'linear-gradient(to bottom, #ffffff, #4B5238)',
      },
      colors: {
        primary: '#4B5238',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}