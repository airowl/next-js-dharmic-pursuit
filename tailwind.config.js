/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#5975FF",
        second: "#3029D9",
        third: "#111849",
        fourth: "#DAD9FF",
        fifth: "#0B1131",
        sixth: "#A0ABB8",
        font: "#fff",
      },
    },
  },
  plugins: [],
}
