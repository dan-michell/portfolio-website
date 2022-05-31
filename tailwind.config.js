module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        wave: "wave 3.5s infinite",
        fade: "fadeOut 500ms ease-in",
      },
      transitionProperty: {
        "transition-duration": "500ms",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(14deg)" },
          "30%": { transform: "rotate(-8deg)" },
          "40%": { transform: "rotate(14deg)" },
          "50%": { transform: "rotate(-4deg)" },
          "60%": { transform: "rotate(10deg)" },
          "70%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
