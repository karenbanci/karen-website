/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#7928CA',
        },
        secondary: {
          500: '#FF0080',
        },
        accent: {
          500: '#0070F3',
        }
      },
    },
  },
  plugins: [],
} 