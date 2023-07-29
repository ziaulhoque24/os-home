/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: "#29A186",
      },
      screens: {
        sm: "425px",

        md: "768px",

        lg: "992px",

        xl: "1200px",

        "2xl": "1400px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
