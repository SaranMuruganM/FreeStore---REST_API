import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5100',
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
