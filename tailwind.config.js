module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        textColor: "#707070",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-rtl")],
};
