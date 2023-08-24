import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: "0",
            bottom: "-100px",
          },
          to: {
            opacity: "1",
            bottom: "0",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 2s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
export default config;
