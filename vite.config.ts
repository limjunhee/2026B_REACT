import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['memorabilia-alter-sustained-substantially.trycloudflare.com'],
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false
      },
      '/practice6': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false
      }
    }
  },
})