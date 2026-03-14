import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [mkcert()],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  build: {
    outDir: 'dist',
  },
});
