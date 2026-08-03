<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import starImage from '@/assets/images/Starburst_group_left_Orange-Teal.png'

const STORAGE_KEY = 'little-friends-theme'
const isDark = ref(false)
const show = ref(true)
let scrollStopTimer = null

const label = computed(() => isDark.value ? 'Use light mode' : 'Use dark mode')

const applyTheme = (theme, persist = false) => {
  isDark.value = theme === 'dark'
  document.documentElement.dataset.theme = theme
  document.querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', isDark.value ? '#075f5f' : '#16a2a2')

  if (persist) localStorage.setItem(STORAGE_KEY, theme)
}

const toggleTheme = () => {
  applyTheme(isDark.value ? 'light' : 'dark', true)
}

const handleScroll = () => {
  show.value = false
  clearTimeout(scrollStopTimer)
  scrollStopTimer = setTimeout(() => {
    show.value = true
  }, 250)
}

onMounted(() => {
  applyTheme(localStorage.getItem(STORAGE_KEY) || 'light')
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  clearTimeout(scrollStopTimer)
})
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :class="{ show, dark: isDark }"
    :aria-label="label"
    :title="label"
    @click="toggleTheme"
  >
    <img :src="starImage" alt="">
    <span>{{ isDark ? 'Light mode' : 'Dark mode' }}</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  position: fixed;
  bottom: -180px;
  left: 30px;
  z-index: 9999;
  display: grid;
  width: 85px;
  justify-items: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--heading-text);
  cursor: pointer;
  transition: bottom 1s, transform .2s;
}

.theme-toggle.show {
  bottom: 5%;
}

.theme-toggle:hover,
.theme-toggle:focus-visible {
  transform: scale(1.08) rotate(4deg);
}

.theme-toggle:focus-visible {
  outline: 3px solid var(--button-orange);
  outline-offset: 4px;
}

.theme-toggle img {
  display: block;
  width: 72px;
  height: 72px;
  object-fit: contain;
  transition: transform .35s ease;
}

.theme-toggle.dark img {
  transform: rotate(180deg);
}

.theme-toggle span {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 0 1px 2px var(--page-background);
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
    font-size: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .theme-toggle,
  .theme-toggle img {
    transition: none;
  }
}
</style>
