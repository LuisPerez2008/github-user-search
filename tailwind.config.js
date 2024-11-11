/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '840px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        "fondo": "#141C2F",
        "principal": "#1F2A48",
        "secundario": "#0079FE",
        "font-sec": "#8F95A3"
      },
      fontFamily: {
        principal: ['Space Mono', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}

