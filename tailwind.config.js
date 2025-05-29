/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'martial': '#9C0000', // dark red for martial arts theme
        'coding': '#004E98', // deep blue for coding theme
        'gaming': '#731982', // purple for gaming theme
      },
      fontFamily: {
        'cyber': ['Orbitron', 'sans-serif'],
        'main': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
