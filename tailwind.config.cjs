/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#508FF433",
        "gradient-start": "#83C9FC",
        "gradient-end": "#02AFF3",
        "background-color": "#F2FBFE",
        "statsCard-divider": "#EBF2F7",
        "arrow-blue": "#02AFF3",
        "sidebar-gray": "#C7C7CC",
        "blue-dark": "#02AFF3",
      },
    },
  },
  plugins: [],
}
