import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
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
    /*
    proxy: {
      '/prod': {
        target: 'lmao.com',
        changeOrigin: true,
      }
    }
    */
  },
  build: {
    chunkSizeWarningLimit:  500
  },
  define: {
    global: {},
  }

})
