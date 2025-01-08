import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    // NextUI
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Here you can override the default font or add new ones
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Here you can override the default colors or add new ones
      }
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            // Here you can override the nextui colors or add your own primary & secondary colors
          },
        },
      },
    }),
  ],
} as Config
