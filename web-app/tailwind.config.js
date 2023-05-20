/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("tailwindcss-flip"),
    require('tailwind-scrollbar'),
  ],
  daisyui: {
    themes: ["winter", "night"],
    rtl: true,
    darkTheme: "night",
  },
}

