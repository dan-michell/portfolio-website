module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        wave: "wave 3.5s infinite",
        swipe: "swipe 2.5s infinite",
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
        swipe: {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(28deg)" },
          "30%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(0deg)" },
          "70%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
