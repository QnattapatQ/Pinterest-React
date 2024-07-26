/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '640px',            
      'lg': '756px',            
      'xl': '850px',            
      '2xl': '1008px',            
      '3xl': '1260px',            
      '4xl': '1513px',            
    },
    extend: {},
  },
  plugins: [],
}

