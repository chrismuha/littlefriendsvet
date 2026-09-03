<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const installPrompt = ref(null)
const instructionsOpen = ref(false)
const installed = ref(false)

const isIos = computed(() => /iphone|ipad|ipod/i.test(window.navigator.userAgent))

const checkInstalled = () => {
  installed.value = window.matchMedia('(display-mode: standalone)').matches
    || window.navigator.standalone === true
}

const captureInstallPrompt = (event) => {
  event.preventDefault()
  installPrompt.value = event
}

const handleInstalled = () => {
  installed.value = true
  installPrompt.value = null
}

const installApp = async () => {
  if (installPrompt.value) {
    await installPrompt.value.prompt()
    const choice = await installPrompt.value.userChoice
    if (choice.outcome === 'accepted') installed.value = true
    installPrompt.value = null
    return
  }

  instructionsOpen.value = true
}

onMounted(() => {
  checkInstalled()
  window.addEventListener('beforeinstallprompt', captureInstallPrompt)
  window.addEventListener('appinstalled', handleInstalled)
})

onUnmounted(() => {
  window.removeEventListener('beforeinstallprompt', captureInstallPrompt)
  window.removeEventListener('appinstalled', handleInstalled)
})
</script>

<template>
  <button
    v-if="!installed"
    type="button"
    class="btn btn-orange install-button"
    @click="installApp"
  >
    <i class="bi bi-download" aria-hidden="true"></i>
    Download App
  </button>

  <Teleport to="body">
    <div
      v-if="instructionsOpen"
      class="install-overlay"
      role="presentation"
      @click.self="instructionsOpen = false"
    >
      <section
        class="install-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="install-dialog-title"
      >
        <button
          type="button"
          class="install-close"
          aria-label="Close install instructions"
          @click="instructionsOpen = false"
        >
          &times;
        </button>

        <img src="@/assets/images/Starburst_group_left_Orange-Teal.png" alt="">
        <h2 id="install-dialog-title">Install Little Friends Vet</h2>

        <p v-if="isIos">
          Tap the Share button in Safari, then choose <strong>Add to Home Screen</strong>.
        </p>
        <p v-else>
          Open your browser menu and choose <strong>Install app</strong> or
          <strong>Add to Home screen</strong>.
        </p>

        <button type="button" class="install-done" @click="instructionsOpen = false">
          Got it
        </button>
      </section>
    </div>
  </Teleport>
</template>

<style scoped>
.install-button {
  cursor: pointer;
  font-family: inherit;
}

.install-button i {
  margin-right: 8px;
}

.install-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: grid;
  place-items: center;
  padding: 20px;
  background: var(--overlay-dark-58);
}

.install-dialog {
  position: relative;
  width: min(420px, 100%);
  padding: 30px;
  border-radius: 16px;
  background: var(--surface-background);
  color: var(--page-text);
  text-align: center;
  box-shadow: 0 20px 60px var(--overlay-dark-30);
}

.install-dialog img {
  width: 70px;
  height: 70px;
  object-fit: contain;
}

.install-dialog h2 {
  margin: 12px 0;
  color: var(--content-teal);
}

.install-dialog p {
  margin-bottom: 22px;
  font-size: 17px;
  line-height: 1.55;
}

.install-close {
  position: absolute;
  top: 10px;
  right: 14px;
  background: transparent;
  color: var(--heading-text);
  cursor: pointer;
  font-size: 30px;
  line-height: 1;
}

.install-done {
  min-height: 46px;
  padding: 10px 28px;
  border-radius: .25rem;
  background: var(--button-orange);
  color: var(--color-white);
  cursor: pointer;
  font: inherit;
  font-weight: 700;
}
</style>
