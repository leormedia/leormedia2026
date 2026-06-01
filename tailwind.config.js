module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: "#E8D9C0", // base beige
          100: "#F4EEE2", // lighter shade
          200: "#CBBCA1", // darker shade
        },

        primary: {
          DEFAULT: "#FFB624", //yellow
          100: "#f37a20", //orange
        },
      },
      fontSize: {
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '24px': '24px',
        '26px': '26px',
        '28px': '28px',
        '30px': '30px',
        '48px': '48px',
        '50px': '50px',
        '72px': '72px',
      },
      // fontFamily: {
      //   TuskerGrotesk: ["TuskerGrotesk", "sans-serif"], // Changed from 'tusker' to 'TuskerGrotesk'
      //},
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
