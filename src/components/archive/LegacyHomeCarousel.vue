<!--
    Temporarily hidden homepage carousel. Keep this component for reuse when
    the replacement photo set is ready.
-->
<script setup>
import { onMounted, onUnmounted } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'

const imageModules = import.meta.glob(
    '@/assets/images/homeslide/*.{jpg,jpeg,png,webp,avif}',
    { eager: true, import: 'default' }
)

const images = Object.entries(imageModules)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src]) => src)

const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
const autoplayPlugin = Autoplay({
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    playOnInit: !motionPreference.matches,
})

const [emblaRef, emblaApi] = emblaCarouselVue(
    { loop: true, align: 'start', duration: 40 },
    [autoplayPlugin]
)

let wheelLocked = false
let wheelUnlockTimer = null
let wheelDelta = 0

function handleWheel(event) {
    const horizontalDelta = event.deltaX
    const isHorizontalGesture = Math.abs(horizontalDelta) >= 2
        && Math.abs(horizontalDelta) >= Math.abs(event.deltaY) * 0.5

    if (!isHorizontalGesture) return
    event.preventDefault()

    clearTimeout(wheelUnlockTimer)
    wheelUnlockTimer = setTimeout(() => {
        wheelLocked = false
        wheelDelta = 0
    }, 180)

    if (wheelLocked) return
    wheelDelta += horizontalDelta
    if (Math.abs(wheelDelta) < 12) return

    wheelLocked = true
    if (wheelDelta > 0) emblaApi.value?.scrollNext()
    else emblaApi.value?.scrollPrev()
}

function handleKeydown(event) {
    if (event.key === 'ArrowLeft') {
        event.preventDefault()
        emblaApi.value?.scrollPrev()
    }
    if (event.key === 'ArrowRight') {
        event.preventDefault()
        emblaApi.value?.scrollNext()
    }
}

function handleMotionPreference(event) {
    if (event.matches) autoplayPlugin.stop()
    else autoplayPlugin.play()
}

onMounted(() => motionPreference.addEventListener('change', handleMotionPreference))
onUnmounted(() => {
    clearTimeout(wheelUnlockTimer)
    motionPreference.removeEventListener('change', handleMotionPreference)
})
</script>

<template>
    <div
        ref="emblaRef"
        class="embla"
        role="region"
        aria-label="Little Friends community photo slider"
        tabindex="0"
        @wheel="handleWheel"
        @keydown="handleKeydown"
    >
        <div class="embla__container">
            <div v-for="(image, index) in images" :key="image" class="embla__slide">
                <img :src="image" :alt="`Little Friends community photo ${index + 1}`">
            </div>
        </div>
    </div>
</template>

<style scoped>
.embla {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    overflow: hidden;
    cursor: grab;
    user-select: none;
}

.embla__container {
    display: flex;
    align-items: center;
}

.embla__slide {
    flex: 0 0 clamp(180px, 15vw, 300px);
    aspect-ratio: 3 / 4;
    margin-right: clamp(16px, 2vw, 40px);
}

.embla__slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    pointer-events: none;
}
</style>
