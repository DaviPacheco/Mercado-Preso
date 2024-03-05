import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'md': '768px',
        'lg': '1280px',
        'xl': '1920px',
        '2xl': '2560px',
        '3xl': '3440px',
      },
      colors: {
        'zambira': '#5A5A5A',
        'Gray85': '#D9D9D9',
        'tchovis': '#C7EE3F',
        'fundo': '#E5E5E5',
      }
    },
  },
  plugins: [],
};
export default config;
