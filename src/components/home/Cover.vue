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
        <strong>Mailing Address</strong><br>
        PO Box 437<br>
        <span class="address-line">Lyons Falls, NY 13368</span>
      </address>

      <!--
        Carousel temporarily hidden until the new photo set is ready.
        Restore with:
        <LegacyHomeCarousel />
        and import it from '@/components/archive/LegacyHomeCarousel.vue'.
      -->

      <!-- <div class="cover-button">
        <a href="#foryou" aria-label="Continue to the next section">
          <i class="bi bi-chevron-down" aria-hidden="true"></i>
        </a>
      </div> -->
    </div>

    <nav class="quick-actions" aria-label="Quick contact and emergency actions">
      <a href="tel:+13157960907">
        <i class="bi bi-telephone" aria-hidden="true"></i>
        Call
      </a>
      <a href="sms:+18555534416">
        <i class="bi bi-chat-dots" aria-hidden="true"></i>
        Text
      </a>
      <a href="mailto:info@littlefriendsvet.com">
        <i class="bi bi-envelope" aria-hidden="true"></i>
        Email
      </a>
      <a
        class="emergency-advice-action"
        href="https://vettriage.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="bi bi-heart-pulse" aria-hidden="true"></i>
        Emergency Advice
        <span class="sr-only"> (opens in a new tab)</span>
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
  min-height: clamp(230px, 29svh, 300px);
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
  padding: 0;
  margin-bottom: 0;
  width: 100%;
  margin-right: 0;
  box-sizing: border-box;
  align-items: center;
  gap: 4px;
}

.logo-image {
  position: absolute;
  top: -14px;
  left: 50%;
  width: min(118vw, 1700px);
  margin: 0;
  transform: translateX(-50%);
  transform-origin: center;
}

.logo-image img {
  display: block;
  width: 100%;
  max-height: 46vh;
  object-fit: contain;
}

.business-address {
  position: absolute;
  top: 50%;
  right: clamp(16px, 3vw, 44px);
  left: auto;
  width: clamp(215px, 20vw, 285px);
  transform: translateY(-50%);
  color: white;
  font-size: clamp(1.05rem, 2vw, 1.5rem);
  font-style: normal;
  font-weight: 700;
  line-height: 1.45;
  text-align: center;
  white-space: nowrap;
  text-shadow: 0 2px 10px rgb(0 0 0 / 20%);
}

.business-address strong {
  color: var(--primary-gold);
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

.quick-actions {
  position: absolute;
  right: auto;
  bottom: 34px;
  left: 50%;
  top: auto;
  z-index: 3;
  display: grid;
  width: min(560px, calc(100% - 40px));
  grid-template-columns: repeat(4, 1fr);
  gap: 9px;
  transform: translateX(-50%);
}

.quick-actions a {
  display: flex;
  min-height: 38px;
  padding: 6px 10px;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border: 2px solid white;
  border-radius: 0.3rem;
  background: var(--button-orange);
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
}

.quick-actions .emergency-advice-action {
  background: #d91b5c;
}

@media (max-width: 960px) {
  .cover-items {
    width: 100%;
    margin-right: 0;
    padding: 0;
    gap: 10px;
  }

  .logo-image {
    width: min(128vw, 1550px);
    max-width: none;
    margin-bottom: 0;
  }

  .logo-image img {
    max-height: 44vh;
  }

}

@media (min-width: 961px) and (max-height: 850px) {
  .cover-items {
    margin-bottom: 0;
  }

  .logo-image img {
    max-height: 45vh;
  }

}

@media (max-width: 640px) {
  section {
    min-height: 320px;
  }

  .cover-items {
    padding: 0;
    align-self: flex-start;
  }

  .logo-image {
    top: -4px;
  }

  .business-address {
    top: auto;
    right: auto;
    bottom: 72px;
    left: 50%;
    width: auto;
    transform: translateX(-50%);
    white-space: nowrap;
  }

  .logo-image img {
    max-height: 38vh;
  }

  .cover-button {
    display: none;
  }

  .quick-actions {
    position: absolute;
    right: 15px;
    bottom: 16px;
    left: 15px;
    top: auto;

    z-index: 2;
    display: grid;
    width: auto;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    transform: none;
  }

  .quick-actions a {
    display: flex;
    min-height: 42px;

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
    max-height: 36vh;
  }

  .quick-actions a {
    min-height: 38px;
    font-size: 0.8rem;
  }
}

@media (max-width: 300px) {
  .quick-actions {
    grid-template-columns: 1fr;
  }
}

/* Stable header layout: logo, address, and actions occupy separate grid areas. */
section {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(420px, 900px) minmax(300px, 1fr);
  grid-template-areas:
    ". logo address"
    ". actions .";
  min-height: 300px;
  padding: 12px 24px;
  gap: 8px 20px;
}

.cover-items {
  display: contents;
}

.logo-image {
  position: static;
  grid-area: logo;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  transform: none;
}

.logo-image img {
  max-height: 190px;
}

.business-address {
  position: static;
  grid-area: address;
  width: 100%;
  transform: none;
  padding: 0 12px;
  font-size: clamp(1rem, 1.45vw, 1.3rem);
  white-space: normal;
}

.address-line {
  white-space: nowrap;
}

.quick-actions {
  position: static;
  grid-area: actions;
  width: min(760px, 100%);
  margin: 0 auto;
  transform: none;
}

@media (max-width: 1100px) {
  section {
    grid-template-columns: minmax(0, 1fr) 270px;
    grid-template-areas:
      "logo address"
      "actions actions";
    padding: 12px 18px;
  }

  .logo-image,
  .logo-image img {
    width: 100%;
    max-height: 170px;
  }
}

@media (max-width: 640px) {
  section {
    grid-template-columns: 1fr;
    grid-template-areas:
      "logo"
      "address"
      "actions";
    min-height: 390px;
    padding: 12px 15px;
  }

  .logo-image img {
    max-height: 185px;
  }

  .business-address {
    width: auto;
  }

  .quick-actions {
    position: static;
    width: 100%;
    transform: none;
  }
}
</style>
