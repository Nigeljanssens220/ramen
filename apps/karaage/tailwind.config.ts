import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  presets: [require('@ramen/tailwindcss-config')],
} satisfies Config
