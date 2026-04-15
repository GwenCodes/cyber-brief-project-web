/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // root-level pages
    "./articles/**/*.html", // article pages
    "./components/**/*.html", // header/footer includes
    "./src/**/*.{html,js}", // scripts + any dev HTML
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
