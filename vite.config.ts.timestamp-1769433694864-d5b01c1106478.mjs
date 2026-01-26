// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/makri/Documents/@DEV%20-%20CODE/PORTFOLIO/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/makri/Documents/@DEV%20-%20CODE/PORTFOLIO/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/makri/Documents/@DEV%20-%20CODE/PORTFOLIO/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    // Minification for both JS and CSS
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2
        // Multiple passes for better compression
      },
      mangle: true
    },
    // CSS minification
    cssMinify: true,
    // Code splitting optimization
    rollupOptions: {
      external: ["/_vercel/insights/script.js"],
      output: {
        manualChunks: {
          "vue-router": ["vue-router"],
          axios: ["axios"]
        },
        // Optimize chunk naming
        chunkFileNames: "js/[name].[hash].js",
        entryFileNames: "js/[name].[hash].js",
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) {
            return "assets/[name].[hash][extname]";
          }
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/png|jpe?g|gif|svg/.test(ext)) {
            return "img/[name].[hash][extname]";
          } else if (/woff|woff2|eot|ttf|otf/.test(ext)) {
            return "fonts/[name].[hash][extname]";
          } else if (ext === "css") {
            return "css/[name].[hash][extname]";
          }
          return "assets/[name].[hash][extname]";
        }
      }
    },
    // Target modern browsers
    target: "es2020",
    // CSS code splitting
    cssCodeSplit: true,
    // Reduce chunk size warnings
    chunkSizeWarningLimit: 1e3,
    // Sourcemaps for production debugging (optional)
    sourcemap: false,
    // Optimize dependencies
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  // Optimize dependencies pre-bundling
  optimizeDeps: {
    include: ["vue", "vue-router", "axios"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtYWtyaVxcXFxEb2N1bWVudHNcXFxcQERFViAtIENPREVcXFxcUE9SVEZPTElPXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtYWtyaVxcXFxEb2N1bWVudHNcXFxcQERFViAtIENPREVcXFxcUE9SVEZPTElPXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9tYWtyaS9Eb2N1bWVudHMvQERFViUyMC0lMjBDT0RFL1BPUlRGT0xJTy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gJ25vZGU6dXJsJ1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5cbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3Z1ZSgpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIC8vIE1pbmlmaWNhdGlvbiBmb3IgYm90aCBKUyBhbmQgQ1NTXG4gICAgbWluaWZ5OiAndGVyc2VyJyxcbiAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICBjb21wcmVzczoge1xuICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXG4gICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWUsXG4gICAgICAgIHBhc3NlczogMiwgLy8gTXVsdGlwbGUgcGFzc2VzIGZvciBiZXR0ZXIgY29tcHJlc3Npb25cbiAgICAgIH0sXG4gICAgICBtYW5nbGU6IHRydWUsXG4gICAgfSxcbiAgICAvLyBDU1MgbWluaWZpY2F0aW9uXG4gICAgY3NzTWluaWZ5OiB0cnVlLFxuICAgIC8vIENvZGUgc3BsaXR0aW5nIG9wdGltaXphdGlvblxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbJy9fdmVyY2VsL2luc2lnaHRzL3NjcmlwdC5qcyddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgICd2dWUtcm91dGVyJzogWyd2dWUtcm91dGVyJ10sXG4gICAgICAgICAgYXhpb3M6IFsnYXhpb3MnXSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gT3B0aW1pemUgY2h1bmsgbmFtaW5nXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiAnanMvW25hbWVdLltoYXNoXS5qcycsXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnanMvW25hbWVdLltoYXNoXS5qcycsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiBhc3NldEluZm8gPT4ge1xuICAgICAgICAgIGlmICghYXNzZXRJbmZvLm5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL1tuYW1lXS5baGFzaF1bZXh0bmFtZV0nXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGluZm8gPSBhc3NldEluZm8ubmFtZS5zcGxpdCgnLicpXG4gICAgICAgICAgY29uc3QgZXh0ID0gaW5mb1tpbmZvLmxlbmd0aCAtIDFdXG4gICAgICAgICAgaWYgKC9wbmd8anBlP2d8Z2lmfHN2Zy8udGVzdChleHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2ltZy9bbmFtZV0uW2hhc2hdW2V4dG5hbWVdJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoL3dvZmZ8d29mZjJ8ZW90fHR0ZnxvdGYvLnRlc3QoZXh0KSkge1xuICAgICAgICAgICAgcmV0dXJuICdmb250cy9bbmFtZV0uW2hhc2hdW2V4dG5hbWVdJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXh0ID09PSAnY3NzJykge1xuICAgICAgICAgICAgcmV0dXJuICdjc3MvW25hbWVdLltoYXNoXVtleHRuYW1lXSdcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICdhc3NldHMvW25hbWVdLltoYXNoXVtleHRuYW1lXSdcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBUYXJnZXQgbW9kZXJuIGJyb3dzZXJzXG4gICAgdGFyZ2V0OiAnZXMyMDIwJyxcbiAgICAvLyBDU1MgY29kZSBzcGxpdHRpbmdcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXG4gICAgLy8gUmVkdWNlIGNodW5rIHNpemUgd2FybmluZ3NcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDEwMDAsXG4gICAgLy8gU291cmNlbWFwcyBmb3IgcHJvZHVjdGlvbiBkZWJ1Z2dpbmcgKG9wdGlvbmFsKVxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgLy8gT3B0aW1pemUgZGVwZW5kZW5jaWVzXG4gICAgY29tbW9uanNPcHRpb25zOiB7XG4gICAgICB0cmFuc2Zvcm1NaXhlZEVzTW9kdWxlczogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICAvLyBPcHRpbWl6ZSBkZXBlbmRlbmNpZXMgcHJlLWJ1bmRsaW5nXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInLCAnYXhpb3MnXSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRVLFNBQVMsZUFBZSxXQUFXO0FBRS9XLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUgrTCxJQUFNLDJDQUEyQztBQU1oUSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDO0FBQUEsRUFDZixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBQUEsSUFFTCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxlQUFlO0FBQUEsUUFDZixRQUFRO0FBQUE7QUFBQSxNQUNWO0FBQUEsTUFDQSxRQUFRO0FBQUEsSUFDVjtBQUFBO0FBQUEsSUFFQSxXQUFXO0FBQUE7QUFBQSxJQUVYLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyw2QkFBNkI7QUFBQSxNQUN4QyxRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUEsVUFDWixjQUFjLENBQUMsWUFBWTtBQUFBLFVBQzNCLE9BQU8sQ0FBQyxPQUFPO0FBQUEsUUFDakI7QUFBQTtBQUFBLFFBRUEsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCLGVBQWE7QUFDM0IsY0FBSSxDQUFDLFVBQVUsTUFBTTtBQUNuQixtQkFBTztBQUFBLFVBQ1Q7QUFDQSxnQkFBTSxPQUFPLFVBQVUsS0FBSyxNQUFNLEdBQUc7QUFDckMsZ0JBQU0sTUFBTSxLQUFLLEtBQUssU0FBUyxDQUFDO0FBQ2hDLGNBQUksb0JBQW9CLEtBQUssR0FBRyxHQUFHO0FBQ2pDLG1CQUFPO0FBQUEsVUFDVCxXQUFXLHlCQUF5QixLQUFLLEdBQUcsR0FBRztBQUM3QyxtQkFBTztBQUFBLFVBQ1QsV0FBVyxRQUFRLE9BQU87QUFDeEIsbUJBQU87QUFBQSxVQUNUO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsUUFBUTtBQUFBO0FBQUEsSUFFUixjQUFjO0FBQUE7QUFBQSxJQUVkLHVCQUF1QjtBQUFBO0FBQUEsSUFFdkIsV0FBVztBQUFBO0FBQUEsSUFFWCxpQkFBaUI7QUFBQSxNQUNmLHlCQUF5QjtBQUFBLElBQzNCO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsT0FBTyxjQUFjLE9BQU87QUFBQSxFQUN4QztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
