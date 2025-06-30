/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#24256d',
        background: '#e9e8e9',
        accent: '#8aafce',
      },
      fontFamily: {
        heading: ['Glacial Indifference', 'Arial', 'sans-serif'],
        body: ['ITC Avant Garde Gothic', 'Avenir', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 