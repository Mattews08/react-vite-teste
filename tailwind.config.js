/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primaryText: "#121212",
      secondaryText: "#757575",
      white: "#fff",
      inputBox: "#8A94A4",
      bgPrimary: "#F8F9FA"
    }
  },
  plugins: [],
}

