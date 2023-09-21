/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container :{
      center : true,
      padding : '1px'
    },
    extend: {
      colors:{
        main: "#171d21",
        yellow: "#ffcc00"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

