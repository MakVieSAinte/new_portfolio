import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
      },
    },
    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-router': ['vue-router'],
          axios: ['axios'],
        },
      },
    },
    // Target modern browsers to reduce bundle size
    target: 'es2020',
    // Reduce unused code
    cssCodeSplit: true,
  },
})
