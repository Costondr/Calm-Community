import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        calm: {
          teal:    '#2A9D8F',
          dark:    '#1A3C40',
          warm:    '#E9C46A',
          soft:    '#F4F1ED',
          text:    '#2D2D2D',
          muted:   '#6B7280',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
