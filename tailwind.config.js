/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./index.html"],
  theme: {
    extend: {
      colors : {
        darkbrown: "#4D2A15",
        brown: "#7B4F35",
        background: "#D5C8BB",
        background_two: "#B78A6C",
        black1: "#131415"
      },

      boxShadow: {
        '3xl': '-5px 5px 0 1px rgba(#4D2A15)',
      }
    },
    fontFamily :{
      'signika': ['Signika Negative', 'sans-serif']
    } 
  },
  plugins: [],
}
