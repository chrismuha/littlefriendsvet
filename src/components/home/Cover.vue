<template>
  <section>
    <div class="cover-bg">
      <video
        autoplay
        playsinline
        loop
        muted
        preload="metadata"
      >
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

      <address class="business-address">
        PO Box 437<br>
        Lyons Falls, NY 13368
      </address>

      <!--
        Carousel temporarily hidden until the new photo set is ready.
        Restore with:
        <LegacyHomeCarousel />
        and import it from '@/components/archive/LegacyHomeCarousel.vue'.
      -->

      <div class="cover-button">
        <a href="#foryou" aria-label="Continue to the next section">
          <i class="bi bi-chevron-down" aria-hidden="true"></i>
        </a>
      </div>
    </div>

    <nav class="mobile-actions" aria-label="Quick contact actions">
      <a href="tel:+13157960907">
        <i class="bi bi-telephone" aria-hidden="true"></i>
        Call
      </a>
      <a href="sms:+18555534416">
        <i class="bi bi-chat-dots" aria-hidden="true"></i>
        Text
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
  background: var(--bright-teal);
  min-height: clamp(220px, 30svh, 320px);
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
  align-items: center;
  gap: clamp(12px, 2vh, 24px);
}

.logo-image {
  width: min(96vw, 1180px);
  margin: 0 auto 12px;
}

.logo-image img {
  display: block;
  width: 100%;
  max-height: 22vh;
  object-fit: contain;
}

.business-address {
  color: white;
  font-size: clamp(1.35rem, 2.5vw, 2rem);
  font-style: normal;
  font-weight: 700;
  line-height: 1.45;
  text-align: center;
  text-shadow: 0 2px 10px rgb(0 0 0 / 20%);
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
    max-width: 900px;
    margin-bottom: 0;
  }

  .logo-image img {
    max-height: 21vh;
  }

}

@media (min-width: 961px) and (max-height: 850px) {
  .cover-items {
    margin-bottom: 0;
  }

  .logo-image img {
    max-height: 22vh;
  }

}

@media (max-width: 640px) {
  section {
    min-height: 300px;
  }

  .cover-items {
    padding: 0 15px;
    align-self: flex-start;
  }

  .logo-image img {
    max-height: 20vh;
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
    grid-template-columns: repeat(2, 1fr);
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

    background: var(--button-orange);
    color: white;

    font-weight: 700;
    text-decoration: none;
  }
}

@media (max-width: 400px) {
  .logo-image img {
    max-height: 24vh;
  }

  .mobile-actions a {
    min-height: 44px;
    font-size: 0.85rem;
  }
}

@media (max-width: 300px) {
  .mobile-actions {
    grid-template-columns: 1fr;
  }
}
</style>
