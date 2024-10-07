import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': "#00b16a",
        'custom-grey':'#d5d6d8',
        'custom-blue':'#006bff',
        'custom-blue-2':'#8fc8ff',
        'custom-grey-2':'#5d7993',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        '32px': '32px',  
        '57px': '57px', 
        '28px': '28px',
        '102px': '102px',
      
      },
      lineHeight: {
        '28.64': '28.64px',  // Custom line height
      },
    },
  },
  plugins: [],
};
export default config;
