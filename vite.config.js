import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', // GitHub Pages向けの相対パス設定
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
