import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: v("ink"),
        card: v("card"),
        canvas: v("canvas"),
        hl: v("hl"),
        brand: "#7367F0",
        primary: { DEFAULT: "#7367F0", light: "#9e95f5", dark: "#5e50ee" },
        accent: { DEFAULT: "#7367F0", cyan: "#00BAD1" },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["'Inter Tight'", "Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("n", ".narrow &");
    }),
  ],
};
export default config;
