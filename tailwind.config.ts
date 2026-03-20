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
        wedding: {
          cream: '#FAF7F2',
          white: '#FFFFFF',
          gold: '#D4A574',
          apricot: '#E8D5C4',
          text: '#4A4A4A',
          muted: '#8B8B8B',
          blush: '#F5E6E0',
          mint: '#E8F0E8',
          sky: '#E0EEF5',
          yellow: '#F5F0E0',
        }
      },
    },
  },
  plugins: [],
}
export default config
