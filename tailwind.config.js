/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        'custom-red': '#F02E2F',
        'custom-red-1':'#E47171',
        'secundario':'#FE8F00',
        'secundario-1':'#BD0026',
        'plomo-0':'#A9A9A9',
        'aux':'#994845',
        'cerna':'#a61818',
        'portada':'#F6F7F9',
        'tabla':'#BC0000'
      },
    },
  },
  plugins: [],
}
