/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#efe4d6",
          400: "#c2905d",
          600: "#a15d3e",
          900: "#5c322b",
        },
        secondary: {
          100: "#ece9db",
          200: "#dbd5bb",
          400: "#ada36e",
          600: "#777040",
          800: "#324516",
        },
        accent: {
          800: "#10282F",
        },
      },
    },
  },
  plugins: [],
};
