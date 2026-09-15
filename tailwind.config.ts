import type { Config } from "tailwindcss";

/**
 * Design tokens ported 1:1 from the existing static site's
 * assets/css/style.css custom properties, so the visual identity
 * carries over exactly rather than being reinterpreted.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xs: "375px", // small mobile
      sm: "480px", // large mobile
      md: "768px", // tablet
      lg: "1024px", // small laptop
      xl: "1280px", // desktop
      "2xl": "1536px", // large desktop
      "3xl": "1920px", // ultrawide
    },
    extend: {
      colors: {
        ink: "#090A0C", // obsidian — hero, footer, cinematic sections
        charcoal: "#FFFFFF", // card / form surface
        red: "#6E1F32", // Surefire Burgundy — primary accent
        gold: "#D6A647", // Architectural Gold — headings, fine lines on dark
        paper: "#F8F4EB", // warm ivory — page bg, text-on-dark
        gray: {
          DEFAULT: "#6B5C58", // secondary copy on light
          onInk: "#C9B9AE", // secondary copy on dark
        },
        line: "#E7DFD1",
        lineOnInk: "rgba(248,244,235,0.14)",
        stone: "#F1EADC",
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
    },
  },
  plugins: [],
};

export default config;
