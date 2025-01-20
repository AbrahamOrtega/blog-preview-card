import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#f4d04e",
        gray: {
          500: "#6b6b6b",
          950: "#121212"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
