import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'white-40': 'rgba(255, 255, 255, 0.4)',
        'red-15': 'rgba(255, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
export default config;
