/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      roxborough: "Roxborough",
      flex: "Roboto Flex",
      jet: "JetBrains Mono",
      space: "Space Mono",
    },
  },
  plugins: [],
};
