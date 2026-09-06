import { fileURLToPath, URL } from 'node:url'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

let outputDir

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '127.0.0.1',
    // Keep development isolated from service workers previously registered on 5194.
    port: 5204,
    strictPort: true,
  },
  plugins: [
    vue(),
    vueDevTools(),
    {
      name: 'route-seo-html',
      configResolved(config) {
        outputDir = path.resolve(config.root, config.build.outDir)
      },
      closeBundle() {
        const html = readFileSync(path.join(outputDir, 'index.html'), 'utf8')
        for (const [file, title, description, canonical] of [
          ['intake/index.html', 'New Client Intake | Little Friends Veterinary Services', 'New-client intake form for Little Friends Veterinary Services.', 'https://littlefriendsvet.com/intake'],
          ['404.html', 'Page Not Found | Little Friends Veterinary Services', 'The requested page could not be found.', null],
        ]) {
          const page = html
            .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
            .replace(/(<meta (?:name|property)="(?:og:title|twitter:title)" content=")[^"]*/g, `$1${title}`)
            .replace(/(<meta (?:name|property)="(?:description|og:description|twitter:description)" content=")[^"]*/g, `$1${description}`)
            .replace(/(<meta name="(?:robots|googlebot)" content=")[^"]*/g, '$1noindex, nofollow')
            .replace(/<link rel="canonical"[^>]*>/, canonical ? `<link rel="canonical" href="${canonical}">` : '')
            .replace(/<meta property="og:url"[^>]*>/, canonical ? `<meta property="og:url" content="${canonical}">` : '')
            .replace(/<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g, '')
          const destination = path.join(outputDir, file)
          mkdirSync(path.dirname(destination), { recursive: true })
          writeFileSync(destination, page)
        }
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
