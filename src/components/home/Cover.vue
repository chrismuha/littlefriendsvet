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
        src="@/assets/videos/stars-bg.mp4"
        autoplay
        playsinline
        loop
        muted
        preload="auto"
      ></video>
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
        <a href="#foryou">
          <img
            src="@/assets/images/Arrow-Down_03.gif"
            alt="for you button"
          >
        </a>
      </div>
    </div>
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
  width: 30%;
  margin: auto;
}

.cover-button img {
  width: 100%;
  height: auto;
  max-height: 100px;
  object-fit: contain;
}

@media screen and (max-width: 640px) {
  .cover-items {
    padding: 0 15px;
  }
}
</style>
