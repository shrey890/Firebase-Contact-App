/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        grey:'#323334',
        yellow:'#F6820C',
        'dark-yellow':'#FFEAAE',
      }
    },
  },
  plugins: [],
}