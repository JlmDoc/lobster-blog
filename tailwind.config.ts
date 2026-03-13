import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lobster: {
          red: '#DC2626',
          orange: '#EA580C',
          gold: '#D97706',
        }
      }
    },
  },
  plugins: [],
}

export default config
