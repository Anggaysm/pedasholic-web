/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
        PublicSans: ["Public Sans"],
      },
      colors: {
        primary: "#CB482C",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
