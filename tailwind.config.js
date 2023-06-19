/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/UI/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/animations/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        root: {
          black: "var(--black)",
          grey: "var(--grey)",
          "grey-primary": "var(--grey-primary)",
          "grey-secondary": "var(--grey-secondary)",
          "grey-tiertiary": "var(--grey-tiertiary)",
          yellow: "var(--yellow)",
        },
      },
      fontFamily: {
        body: "var(--base-font)",
        heading: "var(--heading-font)",
        display: "var(--display-font)",
      },
    },
  },
  plugins: [],
};
