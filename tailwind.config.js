/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "copper-100": "#efe4d6",
        "copper-400": "#c2905d",
        "copper-600": "#a15d3e",
        "copper-900": "#5c322b",
        "pesto-100": "#ece9db",
        "pesto-200": "#dbd5bb",
        "pesto-400": "#ada36e",
        "pesto-600": "#777040",
        "bone-50": "#f9f6f3",
        "makara-50": "#f4f4f2",
        "makara-100": "#e4e3dd",
      },
    },
  },
  plugins: [],
};
