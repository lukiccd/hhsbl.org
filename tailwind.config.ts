import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/hram-hrista-spasitelja.webp')", 
        "svestenstvo-bg": "url('../../public/svestenstvoPozadina.png')",
        "birdLeft": "url('../../public/birdLeft.svg')",
        "birdRight": "url('../../public/birdRight.svg')"
      },
      colors: {
        yellowColor: '#FFCE50',
      },
    },
  },
  plugins: [],
};
export default config;