/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#39B0A3",
          200: "#39B0A3",
          300: "#1D9C8F",
          400: "#078477",
        },
        secondary: {
          100: "#E391E3",
          200: "#CD5FCD",
          300: "#B63BB6",
          400: "#8A078A",
        },
        accent: {
          800: "#FFF4A3",
          900: "#FFEE76",
          1000: "#FFEA53",
          950: "#FBE22F",
        },
      },
    },
  },
  plugins: [],
};
