module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "mont": ["Montserrat", "sans-serif"]
    },
    extend: {
      colors: {
        "theme-blue": "#375DFE",
        "theme-blue-overlay-from": "#4C6BFE",
        "theme-blue-overlay-to": "#1D4DF9",
        "theme-white": "#FDFDFD",
        "theme-green": "#20D032",
        "theme-black": "#25262E",
        "theme-gray": "#6D6D6D",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
