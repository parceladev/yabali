/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        paragraph: ["Roboto", "sans-serif"],
        gilroy1: ["Gilroy-Bold", "sans-serif"],
        gilroy2: ["Gilroy-Thin", "sans-serif"],
      },
      colors: {
        primary: "#508D69",
      },
      backgroundColor: {
        primary: "#508D69",
        secondary: "#E9FFF2",
        secondary2: "#FFEBB9",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
