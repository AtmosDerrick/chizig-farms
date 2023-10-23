/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3a432e",
        secondary: "#406e52",

        "primary-100": "#faf9dd",
      },
    },
  },
  plugins: [],
};
