/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      // colors: {
      //   "copper-100": "#efe4d6",
      //   "copper-400": "#c2905d",
      //   "copper-600": "#a15d3e",
      //   "copper-900": "#5c322b",
      //   "pesto-100": "#ece9db",
      //   "pesto-200": "#dbd5bb",
      //   "pesto-400": "#ada36e",
      //   "pesto-600": "#777040",
      //   "pesto-800": "#324516",
      //   "blue-800": "#10282F",
      //   "bone-50": "#f9f6f3",
      //   "makara-50": "#f4f4f2",
      //   "makara-100": "#e4e3dd",
      // },
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
          600: "#1392a7",
          800: "#10282F",
        },
      },
    },
  },
  plugins: [],
};
