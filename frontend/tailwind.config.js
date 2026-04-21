/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fredoka", "Nunito", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      colors: {
        brand: {
          teal: "#0D9488",
          tealDeep: "#0F766E",
          mint: "#A8E6CF",
          yellow: "#FFD93D",
          coral: "#FF6B6B",
          lilac: "#E9D5FF",
          sky: "#BAE6FD",
          cream: "#FFF8E7",
        },
      },
    },
  },
  plugins: [],
};