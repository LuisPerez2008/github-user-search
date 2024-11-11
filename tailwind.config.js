/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '840px',
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

