import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      backgroundImage: {
       hero: 'url("/home/backgrnd.png")',
       abt: 'url("/home/bg2.jpg")'
      },
    },
  },
  plugins: [],
  
};
export default config;
