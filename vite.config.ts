import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import 'dotenv/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: 'https://ecommerce-frontend-o6kk.onrender.com',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8000/',
      '/images': 'http://localhost:8000/'
    }
  }
})
