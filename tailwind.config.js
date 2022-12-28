/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    fontFamily: {
      nunito: ["Raleway", "sans-serif"],
      open: ["Open Sans", "sans-serif"],
    },
    extend: {
      outlineWidth: {
        1: "1px",
      },
      backgroundImage: {
        "mobile-bg": "url('/images/bg-curve-mobile.svg')",
        "desktop-bg": "url('/images/bg-curve-desktop.svg')",
      },
      colors: {
        veryDarkBlue: "hsl(243, 87%, 12%)",
        desaturatedBlue: "hsl(238, 22%, 44%)",
        brightBlue: "hsl(224, 93%, 58%)",
        moderateCyan: "hsl(170, 45%, 43%)",
        lightGrayishBlue: "hsl(240, 75%, 98%)",
        lightGray: "hsl(0, 0%, 75%)",
        otherBlue: "#575989",
      },
    },
  },
  plugins: [],
};
