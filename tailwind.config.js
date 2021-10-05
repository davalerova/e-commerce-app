module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      main: "#7258DB",
      white: "#fff",
      second: "#FFD55D",
      black: "#000",
      gray: "#F3F4F6",
      dark_gray: "#6C757D",
      purple: "#7C2EEE",
      red: "#E90129",
      green: "#04A367",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
