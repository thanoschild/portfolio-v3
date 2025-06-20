import type { Config } from "tailwindcss";

const config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: "var(--bg-color)",
          main: "var(--main-color)",
          caret: "var(--caret-color)",
          sub: "var(--sub-color)",
          "sub-alt": "var(--sub-alt-color)",
          text: "var(--text-color)"
        },
      },
    },
  },
} satisfies Config;

export default config;
