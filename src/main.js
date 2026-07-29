import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.css'
import './assets/css/photoGridLightbox.css';

import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

if ('serviceWorker' in navigator) {
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
