import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgba(27,142,236,0.03)',
        primary: '#1B8EEC',
        primaryHover: '#0084F0',
      },
    },
  },
  plugins: [],
};
export default config;
