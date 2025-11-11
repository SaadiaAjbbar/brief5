/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",       // tous les HTML à la racine du dossier src
    "./**/*.html",    // tous les HTML dans les sous-dossiers
    "./**/*.js"       // tous les JS si tu utilises des classes dynamiques
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
