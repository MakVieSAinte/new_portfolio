/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#4dffb5",
        secondary: "#CAD4E7",
        myblack: "#1E152A",
        bordure: "#757575",
        accent: {
          DEFAULT: "#005FB8",
          secondary: "#60CDFF",
        },
      },
      fontFamily: {
        'familjen_grotesk' : ["Familjen Grotesk"]
      }
    },
  },
  plugins: [
    require('preline/plugin')
  ],
}