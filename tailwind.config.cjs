/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: "Bebas Neue",
      },
      colors: {
        red_primary: "#e50914",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
