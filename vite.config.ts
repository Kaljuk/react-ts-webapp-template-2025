import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: process.env.OPEN_BROWSER === 'true',
    hmr: process.env.NODE_ENV === 'development',
  },
  plugins: [react()],
})
