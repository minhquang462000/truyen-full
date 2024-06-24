import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
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
      transitionProperty: {
        "min-height": "min-height",
        "max-height": "max-height",
        "max-width": "max-width",
      },
      content: {
        link: 'url("/icons/link.svg")',
      },
      perspective: {
        "300": "300px",
      },
      rotate: {
        "-3": "-3deg",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        ".perspective-300": {
          perspective: "300px",
        },
        ".rotate-y-3": {
          transform: "rotateY(-3deg)",
        },
      });
    },
  ],
};
export default config;
