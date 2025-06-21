/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', './src/**/*.{vue,js,ts,jsx,tsx}',
    // 'node_modules/preline/dist/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#FF99C9",
        secondary: "#CAD4E7",
        myblack: "oklch(20.5% 0 0)",
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
    // require('@tailwindcss/typography')
    // require('preline/plugin'),
  ],
}
