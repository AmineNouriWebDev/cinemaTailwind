/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff3333",
        sexondary: {
          100: "#9dc3ff",
          200: "#5b9aff",
        },
      },
      fontFamily: {
        bodyFont: ["Amiri"],
      },
    },
  },
  plugins: [],
};
