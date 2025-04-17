/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        kohsantepheap: ['Koh Santepheap', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        koulen: ['Koulen', 'sans-serif'],
        battambong: ['Battambang', 'sans-serif'],
      },
      backgroundColor:{
        'primary': '#EEEBEB',
        'secondary': '#2EB8EB',
        'third':'#11CEE8',
      },
      colors:{
        'primary': '#EEEBEB',
        'secondary': '#2EB8EB',
        'third':'#11CEE8',
      }
    },
  },
  plugins: [],
}