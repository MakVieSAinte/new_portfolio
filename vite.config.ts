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
    // Minification for both JS and CSS
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2, // Multiple passes for better compression
      },
      mangle: true,
    },
    // CSS minification
    cssMinify: true,
    // Code splitting optimization
    rollupOptions: {
      external: ['/_vercel/insights/script.js'],
      output: {
        manualChunks: {
          'vue-router': ['vue-router'],
          axios: ['axios'],
        },
        // Optimize chunk naming
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
        assetFileNames: assetInfo => {
          if (!assetInfo.name) {
            return 'assets/[name].[hash][extname]'
          }
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|gif|svg/.test(ext)) {
            return 'img/[name].[hash][extname]'
          } else if (/woff|woff2|eot|ttf|otf/.test(ext)) {
            return 'fonts/[name].[hash][extname]'
          } else if (ext === 'css') {
            return 'css/[name].[hash][extname]'
          }
          return 'assets/[name].[hash][extname]'
        },
      },
    },
    // Target modern browsers
    target: 'es2020',
    // CSS code splitting
    cssCodeSplit: true,
    // Reduce chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Sourcemaps for production debugging (optional)
    sourcemap: false,
    // Optimize dependencies
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  // Optimize dependencies pre-bundling
  optimizeDeps: {
    include: ['vue', 'vue-router', 'axios'],
  },
})
