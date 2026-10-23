import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: { xs: "375px", sm: "480px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px", "3xl": "1920px" },
    extend: {
      colors: {
        ink: "#101010",
        charcoal: "#191919",
        red: "#C8192E",
        gold: "#C8192E",
        paper: "#F6F5F3",
        gray: { DEFAULT: "#686563", onInk: "#D5D2D0" },
        line: "#E4E1DF",
        lineOnInk: "rgba(255,255,255,0.16)",
        stone: "#EEECE9",
        forest: "#191919",
        cream: "#F6F5F3",
      },
      fontFamily: {
        display: ["var(--font-sans)", "Arial", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: { prose: "72ch" },
      transitionTimingFunction: { church: "cubic-bezier(0.22, 1, 0.36, 1)" },
      boxShadow: { soft: "0 12px 32px rgba(16,16,16,.08)", elevated: "0 22px 60px rgba(16,16,16,.16)" },
    },
  },
  plugins: [],
};
export default config;
