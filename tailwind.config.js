module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        100: "#342F2C",
        200: "#9D4916",
        300: "#CDAD87",
        400: "#413B38",
        500: "#ffffff",
      },
    },
    fontFamily: {
      Sanchez: ["Sanchez, serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1100px",
      },
    },
  },
  plugins: [],
};
