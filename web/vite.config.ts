import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../shared'),
    },
  },
  base: '/hack', // also change main.tsx
  build: {
    outDir: 'dist',
    // assetsDir: 'assets',
    // rollupOptions: {
    //   // Copy 404.html to root for GitHub Pages SPA routing
    //   input: {
    //     main: './index.html',
    //     // 404: './public/404.html'
    //   }
    // }
  },

  server: {
    port: 3000, // your Vite dev server port
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // your backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // optional
      },
    },
  },
})
