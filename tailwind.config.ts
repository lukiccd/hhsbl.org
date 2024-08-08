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
        "birdRight": "url('../../public/birdRight.svg')",
        "hero-backround-blog": "url('../../public/blog-post.webp')",
        "proskomidijaBackground": "url('../../public/proskomidijaBackround.webp')",
        "mapLinearBg": "linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 60%,  #000 100%)"
      },
      colors: {
        yellowColor: '#FFCE50',
      },
    },
  },
  plugins: [],
};
export default config;
