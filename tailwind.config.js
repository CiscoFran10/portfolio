/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          from: { transform: "translateY(-110%)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        slideUp: "slideUp 1s ease",
      },
    },
  },
  plugins: [],
};
