/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // root-level HTML files (index.html, article.html)
    "./components/*.html", // your new reusable components
    "./css/**/*.css", // any custom CSS files
    "./src/**/*.{html,js}", // article pages, scripts, or nested HTML
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
