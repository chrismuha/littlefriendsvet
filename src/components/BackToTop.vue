<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import catImage from '@/assets/images/Cat02-70x102.png'

const show = ref(false)
const running = ref(false)
const goingDown = ref(false)
let scrollStopTimer = null

const handleScroll = () => {
  show.value = false
  goingDown.value = window.scrollY >= 200

  clearTimeout(scrollStopTimer)
  scrollStopTimer = setTimeout(() => {
    show.value = window.scrollY >= 200
    goingDown.value = show.value
  }, 250)
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  running.value = true

  setTimeout(() => {
    running.value = false
  }, 1000)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  clearTimeout(scrollStopTimer)
})
</script>

<template>
  <div
    class="gatop-top"
    :class="{
      show,
      'gatop-run': running,
      'gatop-down': goingDown
    }"
    @click="scrollToTop"
  >
    <span>
      <img :src="catImage" alt="" />
    </span>

    <span class="gatop-label">
      Back to top
    </span>
  </div>
</template>

<style scoped>
.gatop-top { width: 82px; position: fixed; bottom: -180px; right: 30px; z-index: 9999; opacity: 1; cursor: pointer; text-align: center; }
.gatop-top img { display: block; width: 46px; height: 67px; margin: 0 auto; object-fit: contain; }
.gatop-top.show { bottom: 5% !important; -webkit-transition: 1.0s; -moz-transition: 1.0s; transition: 1.0s; }
.gatop-top.gatop-run { bottom: 100% !important; -webkit-transition: 1.0s; -moz-transition: 1.0s; transition: 1.0s; }
.gatop-top.gatop-down { -webkit-transition: 1.0s; -ms-transition: 1.0s; -o-transition: 1.0s; -moz-transition: 1.0s; transition: 1.0s; }
.gatop-top:before, .gatop-top:after { content: ""; position: absolute; -o-transition: 0.2s; -webkit-transition: 0.2s; -ms-transition: 0.2s; -moz-transition: 0.2s; transition: 0.2s; opacity: 0; }
.gatop-top:hover:before, .gatop-top:hover:after, .gatop-top.gatop-run:before, .gatop-top.gatop-run:after { opacity: 1; }

.gatop-label {
  display: block;
  margin-top: 0;
  color: var(--heading-text);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
}

.gatop-top:before, .gatop-top.gatop-run:before { margin-left: 0 !important; top: -1px; left: 0px; width: 82px; height: 84px;}

@media (max-width: 640px) {
  .gatop-top { right: 15px; width: 72px; }
  .gatop-top img { width: 40px; height: 58px; }
  .gatop-label { font-size: 12px; }
}
</style>
