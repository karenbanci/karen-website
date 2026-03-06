/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#0A091A",
          light: "#F5F5F5",
        },
        primary: {
          100: "#FFF4A3",
          200: "#FFEE76",
          300: "#FFEA53",
          400: "#FBE22F",
          500: "#F5AF33",
        },
        secondary: {
          100: "#E391E3",
          200: "#CD5FCD",
          300: "#B63BB6",
          400: "#8A078A",
        },
        accent: {
          100: "#39B0A3",
          200: "#39B0A3",
          300: "#1D9C8F",
          400: "#078477",
        },
        social: {
          linkedin: "#0B65C2",
          twitter: "#272C30",
          github: "#181717",
          // manter se quiser, mas NÃO usar como bg-color no hover:
          instagram:
            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
        },
      },
      backgroundImage: {
        "social-instagram-gradient":
          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
      },
    },
  },
  plugins: [],
};
