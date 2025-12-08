/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b0b0b",
        section: "#0f1724",
        card: "#121212",
        secondary: "#FEC613",
        accent: "#FF8A00",
        "text-light": "#b4b4b4",
      },
      backgroundImage: {
        "btn-gradient": "linear-gradient(90deg,#FEC613 0%,#FF8A00 100%)",
      },
    },
  },
  plugins: [],
};
