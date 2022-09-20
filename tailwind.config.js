/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pepper: "#ff0055",
        mint: "#00ffaa",
      },
    },
    fontFamily: {
      rox: "Roxborough", // Serif
      flex: "Roboto Flex", // Sans-serif
      jet: "JetBrains Mono", // Mono
    },
  },
  plugins: [],
};
