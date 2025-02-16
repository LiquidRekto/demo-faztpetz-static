import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  envPrefix: 'APP_',
  server: {
    
    proxy: {
      '/api': {
        target: 'http://localhost:8080/fptutor',
        changeOrigin: true,
        secure: false,
      }
    }
    
  },
  build: {
    chunkSizeWarningLimit:  500
  },
  define: {
    global: {},
  }

})
