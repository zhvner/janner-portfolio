import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/janner-portfolio",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Separate vendor libraries from the main bundle
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Adjust warning limit (optional)
  },
})
