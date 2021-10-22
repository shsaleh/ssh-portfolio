module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        textColor: "#707070",
      },
      transitionProperty: {
        height: 'height',
        padding: 'padding',
    }
    },
  },
  variants: {
    extend: {
   
      padding:['group-hover'],
      height:['group-hover']
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
