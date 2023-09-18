import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [Vue(), VueJsx()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    sourcemap: true,
    target: 'ES2018',
    lib: {
      name: 'LCVueSimulatorRenderer',
      entry: 'src/index.ts',
      fileName: () => 'vue-simulator-renderer.js',
      formats: ['umd'],
    },
    outDir:
      'D:\\2026\\project\\lowcode-engine\\KNXCloud\\lowcode-engine-vue\\lowcode-engine-demo\\public\\js',
    emptyOutDir: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
        // file: 'D:/2026/project/lowcode-engine/KNXCloud/lowcode-engine-vue/packages/lowcode-engine-demo/public/vue-simulator-renderer.js',
        assetFileNames({ name }) {
          return name === 'style.css' ? 'vue-simulator-renderer.css' : name!;
        },
      },
    },
  },
});
