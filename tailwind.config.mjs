/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      accent: {
        light: "#5E755E",
        dark: "#9bc19b",
      },
      foreground: {
        light: "#000000",
        dark: "#ffffff",
      },
      shadow: {
        light: "#a2a2a2",
        dark: "#9f9f9f",
      },
      background: {
        light: "#ffffff",
        dark: "#070707",
      },
    },
    fontFamily: {
      sans: ["Noto Sans Variable", "Noto Sans Bengali Variable", "system-ui"],
      mono: ["Fira Mono", "monospace"],
    },
    extend: {
      spacing: {
        128: "36rem",
        256: "44rem",
      },
    },
  },
  plugins: [],
};