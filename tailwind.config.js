/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "550px",
      md: "1024px",
      lg: "1400px",
      xl: "1800px",
    },
    extend: {},
  },
  plugins: [],
};