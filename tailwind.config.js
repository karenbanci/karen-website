/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#202023",
          light: "#F5F5F5",
        },
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
          100: "#FFF4A3",
          200: "#FFEE76",
          300: "#FFEA53",
          400: "#FBE22F",
        },
      },
    },
  },
  plugins: [],
};
