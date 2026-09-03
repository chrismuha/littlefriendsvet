<script setup>
import { computed, onMounted, ref } from 'vue'
import starImage from '@/assets/images/Starburst_group_left_Orange-Teal.png'

const STORAGE_KEY = 'little-friends-theme'
const isDark = ref(false)
const starElement = ref(null)

const label = computed(() => isDark.value ? 'Use light mode' : 'Use dark mode')

const applyTheme = (theme, persist = false) => {
  isDark.value = theme === 'dark'
  document.documentElement.dataset.theme = theme
  const themeColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-teal')
    .trim()
  document.querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', themeColor)

  if (persist) localStorage.setItem(STORAGE_KEY, theme)
}

const toggleTheme = () => {
  applyTheme(isDark.value ? 'light' : 'dark', true)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const star = starElement.value
      star?.getAnimations().forEach(animation => animation.cancel())
      star?.animate(
        [
          { transform: 'translateZ(0) rotate(0deg)' },
          { transform: 'translateZ(0) rotate(360deg)' }
        ],
        { duration: 400, easing: 'ease-out' }
      )
    })
  })
}

onMounted(() => {
  applyTheme(localStorage.getItem(STORAGE_KEY) || 'light')
})
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="label"
    :title="label"
    @click="toggleTheme"
  >
    <img ref="starElement" :src="starImage" alt="">
    <span>{{ isDark ? 'Light mode' : 'Dark mode' }}</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  position: fixed;
  bottom: 5%;
  left: 30px;
  z-index: 9999;
  display: grid;
  width: 85px;
  justify-items: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--heading-text);
  font-family: inherit;
  cursor: pointer;
  transition: transform .2s;
}

.theme-toggle:focus-visible {
  outline: 3px solid var(--button-orange);
  outline-offset: 4px;
}

@media (hover: hover) and (pointer: fine) {
  .theme-toggle:hover {
    transform: scale(1.08) rotate(4deg);
  }
}

.theme-toggle img {
  display: block;
  width: 72px;
  height: 72px;
  object-fit: contain;
  backface-visibility: hidden;
  will-change: transform;
  transition: transform .35s ease;
}

.theme-toggle span {
  display: block;
  margin-top: 0;
  color: var(--heading-text);
  font-size: 10.5pt;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .theme-toggle {
    left: 15px;
    width: 68px;
  }

  .theme-toggle img {
    width: 58px;
    height: 58px;
  }

  .theme-toggle span {
    font-size: 9pt;
  }
}

@media (prefers-reduced-motion: reduce) {
  .theme-toggle,
  .theme-toggle img {
    transition: none;
  }

}
</style>
