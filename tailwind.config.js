/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}","./index.html"],
  theme: {
    extend: {
      brightness: {
        30: '.30',
        175: '1.75',
      }
    },
  },
  plugins: [],
}