import { type Config } from 'tailwindcss'

export default {
  content: ['./**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  presets: [require('@ramen/tailwindcss-config')],
} satisfies Config
