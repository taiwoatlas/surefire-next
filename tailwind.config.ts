import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        ink: "#10291F",
        charcoal: "#FFFFFF",
        red: "#315D43",
        gold: "#D8BB76",
        paper: "#F8F7F2",
        gray: {
          DEFAULT: "#756F63",
          onInk: "#D4DDD5",
        },
        line: "#E6E2D8",
        lineOnInk: "rgba(255,255,255,0.16)",
        stone: "#F0EEE5",
        forest: "#18382B",
        cream: "#F5F1E7",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        prose: "72ch",
      },
      transitionTimingFunction: {
        church: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        soft: "0 12px 32px rgba(24,56,43,.08)",
      },
    },
  },
  plugins: [],
};

export default config;
