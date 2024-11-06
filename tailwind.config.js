/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#B00000",
        secondary: "#18191F",
        third: "#FFFFFF",
        fourth: "#2E2E2E",
      },
      fontFamily: {
        Poppins: ["Poppins", "arial"],
      },
      boxShadow: {
        shadowButton: "0px 0px 5px 1px #D78080"
      }
    },
  },
  plugins: [],
};
