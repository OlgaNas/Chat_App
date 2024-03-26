/** @type {import('tailwindcss').Config} */
 export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
// "./index.html", "./src/**/*.{html,js}" module.exports