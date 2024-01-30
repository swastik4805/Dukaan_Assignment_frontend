/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // customFont: ['"Custom Font"', "Galano Grotesque"],
        // Add more custom font families as needed
      },
      colors:{
        blue:{
          700:"#146eb4",
        }
      }
    },
  },
  plugins: [],
}



