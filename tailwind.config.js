/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'bebas': ['Bebas Neue', 'sans-serif'],
      },
      colors:{
        'custom-blue': '#0b32ea'
      }
    },
  },
  plugins: [],
}

