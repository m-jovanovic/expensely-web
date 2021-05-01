const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      black: colors.black,
      white: colors.white,

      gray: colors.blueGray,
      red: colors.red,
      yellow: colors.amber,
      teal: colors.teal,
      cyan: colors.cyan,
      "light-blue": colors.lightBlue,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
