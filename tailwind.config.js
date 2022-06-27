/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(420px, 1fr))',
        'auto-fit': 'repeat(auto-fit, minmax(350px, 1fr))',
      }
    },
  },
  plugins: [],
}
