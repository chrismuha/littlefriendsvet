<script setup>
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'

const [emblaRef] = emblaCarouselVue(
    {
        loop: true,
        align: 'start',
        dragFree: false,
        skipSnaps: false,
        duration: 40,
    },
    [
        Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true
        })
    ]
)
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
          src="@/assets/images/LittleFriendsLogo_10.png"
          alt="LittleFriendsLogo"
        >
      </div>

      <div class="embla" ref="emblaRef">
        <div class="embla__container">
          <div class="embla__slide">
            <img src="@/assets/images/LittleFriendsLogo_10.png" alt="">
          </div>

          <div class="embla__slide">
            <img src="@/assets/images/LittleFriendsLogo_10.png" alt="">
          </div>

          <div class="embla__slide">
            <img src="@/assets/images/LittleFriendsLogo_10.png" alt="">
          </div>

          <div class="embla__slide">
            <img src="@/assets/images/LittleFriendsLogo_10.png" alt="">
          </div>

          <div class="embla__slide">
            <img src="@/assets/images/LittleFriendsLogo_10.png" alt="">
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
  height: 100vh;
  width: 100%;
  overflow-y: hidden;

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
}

.logo-image {
  margin: auto;
  transform: translateY(60px);
}

.logo-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.embla {
  overflow: hidden;
  max-width: 800px;
  margin: auto;

  cursor: grab;
  user-select: none;
}

.embla:active {
  cursor: grabbing;
}

.embla__container {
  display: flex;
}

.embla__slide {
  flex: 0 0 auto;
  height: 200px;
  margin-right: 20px;
}

.embla__slide img {
  height: 100%;
  width: auto;
  display: block;

  pointer-events: none;
}

.cover-button {
  width: fit-content;
  margin: auto;
  flex-shrink: 0;
  transform: translateY(-36px);
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

@media screen and (max-width: 640px) {
  .cover-items {
    padding: 0 15px;
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
    border-radius: .25rem;
    background: var(--primary-orange);
    color: white;
    font-weight: 700;
    text-decoration: none;
  }
}
</style>
