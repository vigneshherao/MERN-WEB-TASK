/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': '#1B1B32',
        'custom-dark-purple': '#0A0A23',
        'customYellow': '#FEBF42',
        'customGray': '#F5F6F7',
      },
    },
  },
  plugins: [],
}
