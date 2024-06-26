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
      colors: {
        b1: 'rgba(10, 25, 47, 0.85)',
        b2 : '#0a192f',
        b3 : '#112240',
        green : 'rgba(102 252 241)',
      },
      fontFamily:{
        custom: ['CustomFont', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      }
    },

  },
  plugins: [],
};
export default config;
