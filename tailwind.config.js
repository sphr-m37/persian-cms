/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iryek: ['iran-yekan', 'sans-serif']
      }
    },
    container: {
      center:true,
      padding: {
        DEFAULT: '10px',
        sm:'20px'
      }
    }
  },
  plugins: [],
}