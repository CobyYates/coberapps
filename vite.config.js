import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['row', 'flickity-wrapper'].includes(tag),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      // Add an alias for the FlickityWrapper component
      '@components': path.resolve(__dirname, 'src/components/carousel'), // Adjust this path as needed
    },
  },
});