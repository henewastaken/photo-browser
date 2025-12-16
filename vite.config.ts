import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: 'https://henewastaken.github.io/photo-browser/',
  build: {
    outDir: 'dist',
  },

  plugins: [react()],
  server: {
    hmr: {
      overlay: true,
    },
  },
});
