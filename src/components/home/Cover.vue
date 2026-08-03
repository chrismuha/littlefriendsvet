<script setup>
import { onMounted, onUnmounted } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'

const logoModules = import.meta.glob(
    '@/assets/images/homeslide/*.{jpg,jpeg,png,webp,avif}',
    {
        eager: true,
        import: 'default'
    }
)

const logoImages = Object.entries(logoModules)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src]) => src)

const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
const autoplayPlugin = Autoplay({
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    playOnInit: !motionPreference.matches
})

const [emblaRef, emblaApi] = emblaCarouselVue(
    {
        loop: true,
        align: 'start',
        dragFree: false,
        skipSnaps: false,
        duration: 40,
    },
    [autoplayPlugin]
)

let wheelLocked = false
let wheelUnlockTimer = null
let wheelDelta = 0

const handleCarouselWheel = (event) => {
    const horizontalDelta = event.deltaX
    const isHorizontalGesture = Math.abs(horizontalDelta) >= 2
        && Math.abs(horizontalDelta) >= Math.abs(event.deltaY) * .5

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

const handleCarouselKeydown = (event) => {
    if (event.key === 'ArrowLeft') {
        event.preventDefault()
        emblaApi.value?.scrollPrev()
    }
    if (event.key === 'ArrowRight') {
        event.preventDefault()
        emblaApi.value?.scrollNext()
    }
}

const handleMotionPreference = (event) => {
    if (event.matches) autoplayPlugin.stop()
    else autoplayPlugin.play()
}

onMounted(() => {
    motionPreference.addEventListener('change', handleMotionPreference)
})

onUnmounted(() => {
    clearTimeout(wheelUnlockTimer)
    motionPreference.removeEventListener('change', handleMotionPreference)
})
</script>

<template>
  <section>
    <div class="cover-bg">
      <video
        autoplay
        playsinline
        loop
        muted
        preload="auto"
      >
        <source src="@/assets/videos/stars-bg.webm" type="video/webm">
        <source src="@/assets/videos/stars-bg.mp4" type="video/mp4">
      </video>
    </div>

    <div class="cover-items">
      <div class="logo-image">
        <img
          src="@/assets/images/LittleFriendsOnWheelsLogo-approved.webp"
          alt="Little Friends on Wheels — Mobile Veterinary Services"
        >
      </div>

      <div
        class="embla"
        ref="emblaRef"
        role="region"
        aria-label="Little Friends logo slider"
        tabindex="0"
        @wheel="handleCarouselWheel"
        @keydown="handleCarouselKeydown"
      >
        <div class="embla__container">
          <div
            v-for="(image, index) in logoImages"
            :key="image"
            class="embla__slide"
          >
            <img
              :src="image"
              :alt="`Business logo ${index + 1} of ${logoImages.length}`"
            >
          </div>
        </div>
      </div>

      <div class="cover-button">
        <a href="#foryou" aria-label="Continue to the next section">
          <i class="bi bi-chevron-down" aria-hidden="true"></i>
        </a>
      </div>
    </div>

    <nav class="mobile-actions" aria-label="Quick contact actions">
      <a href="tel:+13153486389">
        <i class="bi bi-telephone" aria-hidden="true"></i>
        Call
      </a>
      <a href="sms:+18555534416">
        <i class="bi bi-chat-dots" aria-hidden="true"></i>
        Text
      </a>
      <a href="#contact-info">
        <i class="bi bi-calendar-check" aria-hidden="true"></i>
        Book
      </a>
    </nav>
  </section>
</template>

<style scoped>
.cover-bg video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;

  mix-blend-mode: screen;
  opacity: 20%;
}

section {
  position: relative;
  background: var(--primary-teal);
  min-height: 100svh;
  width: 100%;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
}

.cover-items {
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
}

.logo-image {
  width: min(92vw, 900px);
  margin: 0 auto 12px;
}

.logo-image img {
  display: block;
  width: 100%;
  max-height: 43vh;
  object-fit: contain;
}

.embla {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  overflow: hidden;
  cursor: grab;
  user-select: none;
}

.embla:active {
  cursor: grabbing;
}

.embla:focus-visible {
  outline: 4px solid var(--primary-orange);
  outline-offset: 5px;
}

.embla__container {
  display: flex;
  align-items: center;
}

.embla__slide {
  flex: 0 0 clamp(180px, 15vw, 300px);
  aspect-ratio: 3 / 4;
  height: auto;
  margin-right: clamp(16px, 2vw, 40px);
}

.embla__slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  image-rendering: auto;
  display: block;
  pointer-events: none;
}

.cover-button {
  width: fit-content;
  margin: auto;
  flex-shrink: 0;
}

.cover-button a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px 14px;
  color: white;
  text-decoration: none;
}

.cover-button i {
  display: block;
  font-size: 56px;
  line-height: 1.2;
}

.mobile-actions {
  display: none;
}

@media (max-width: 960px) {
  .cover-items {
    width: 100%;
    padding: 0 20px;
    gap: 10px;
  }

  .logo-image {
    width: 100%;
    max-width: 700px;
    margin-bottom: 0;
  }

  .logo-image img {
    max-height: 32vh;
  }

  .embla {
    max-width: none;
    width: 100%;
  }

  .embla__slide {
    flex: 0 0 30%;
    height: 140px;
    margin-right: 12px;
  }

  .embla__slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

@media (max-width: 640px) {
  .cover-items {
    padding: 0 15px;
  }

  .logo-image img {
    max-height: 28vh;
  }

  .embla__slide {
    flex: 0 0 48%;
    height: 110px;
    margin-right: 10px;
  }

  .cover-button {
    display: none;
  }

  .mobile-actions {
    position: absolute;
    right: 15px;
    bottom: 16px;
    left: 15px;

    z-index: 2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .mobile-actions a {
    display: flex;
    min-height: 48px;

    align-items: center;
    justify-content: center;
    gap: 6px;

    border: 2px solid white;
    border-radius: 0.25rem;

    background: var(--primary-orange);
    color: white;

    font-weight: 700;
    text-decoration: none;
  }
}

@media (max-width: 400px) {
  .logo-image img {
    max-height: 24vh;
  }

  .embla__slide {
    height: 90px;
  }

  .mobile-actions a {
    min-height: 44px;
    font-size: 0.85rem;
  }
}

@media (max-width: 300px) {
  .embla__slide {
    flex: 0 0 70%;
    height: 75px;
  }

  .mobile-actions {
    grid-template-columns: 1fr;
  }
}
</style>
