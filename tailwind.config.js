/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
    fontFamily: {
      signature: ["'Satisfy', cursive;"],
      signature1: ["'Cormorant Garamond', serif;"]
    },
   },
  },
  plugins: [],
}

