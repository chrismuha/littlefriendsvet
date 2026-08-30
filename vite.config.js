import { fileURLToPath, URL } from 'node:url'
import { copyFileSync } from 'node:fs'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '127.0.0.1',
    // Keep development isolated from service workers previously registered on 5194.
    port: 5101,
    strictPort: true,
  },
  plugins: [
    vue(),
    vueDevTools(),
    {
      name: 'spa-404-fallback',
      closeBundle() {
        copyFileSync('dist/index.html', 'dist/404.html')
      },
    },
  ],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
