/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FD841F",
        secondary: "#E14D2A",
        red_theme: "#CD104D",
        purple_theme: "#9C2C77",
        blackrussian:  '#434344', 
        lightgray: '#F5F5F5', 
      },
      keyframes: {
        popup: {
          "0%": { transform: "translateX(-10px)", opacity: 0.6 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slice: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        popup: "popup .25s ease-in-out 1",
        slice: "slice 10s linear infinite",
      },
    },
  },
  plugins: [],
};