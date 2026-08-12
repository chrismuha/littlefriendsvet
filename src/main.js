import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.css'
import './assets/css/photoGridLightbox.css';

import 'bootstrap-icons/font/bootstrap-icons.css'
import '@tabler/icons-webfont/dist/tabler-icons.min.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

if (import.meta.env.DEV && 'serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    const registrations = await navigator.serviceWorker.getRegistrations()
    const hadRegistrations = registrations.length > 0

    await Promise.all(registrations.map((registration) => registration.unregister()))

    if ('caches' in window) {
      const cacheNames = await caches.keys()
      await Promise.all(
        cacheNames
          .filter((name) => name.startsWith('little-friends-vet-'))
          .map((name) => caches.delete(name))
      )
    }

    if (hadRegistrations && !sessionStorage.getItem('dev-service-worker-cleared')) {
      sessionStorage.setItem('dev-service-worker-cleared', 'true')
      window.location.reload()
    }
  })
}

if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    let refreshing = false

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshing) return
      refreshing = true
      window.location.reload()
    })

    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`, {
      updateViaCache: 'none',
    }).then((registration) => {
      const checkForUpdates = () => registration.update().catch(() => {})

      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') checkForUpdates()
      })

      window.addEventListener('online', checkForUpdates)
      window.setInterval(checkForUpdates, 60 * 60 * 1000)
      checkForUpdates()
    }).catch(() => {})
  })
}
