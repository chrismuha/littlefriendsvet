<template>
    <section id="gallery">
        <div class="bg-graphic"></div>
        <div
            class="slideshow-wrapper"
            :style="{
                '--zoom-duration': zoomDuration + 'ms'
            }"
        >
            <div
                class="slideshow-image-container"
                role="region"
                aria-label="Little Friends photo slideshow"
                tabindex="0"
                @wheel="handleWheel"
                @keydown="handleKeydown"
                @pointerdown="handlePointerDown"
                @pointerup="handlePointerUp"
                @pointercancel="resetPointer"
            >

                <img
                    :key="currentIndex"
                    :src="images[currentIndex]"
                    class="slide current"
                />

                <img
                    v-if="isTransitioning"
                    :key="'prev-' + previousIndex"
                    :src="images[previousIndex]"
                    :class="['slide', 'previous', { 'previous-animate': previousReady }]"
                    :style="{
                        '--zoom-delay': previousZoomDelay + 'ms',
                        transform: `scale(${previousStartScale})`
                    }"
                />

                <div class="controls">
                    <button type="button" aria-label="Previous photo" @click="prevSlide">
                        <i class="bi bi-chevron-left" aria-hidden="true"></i>
                    </button>
                    <button type="button" aria-label="Next photo" @click="nextSlide">
                        <i class="bi bi-chevron-right" aria-hidden="true"></i>
                    </button>
                </div>

            </div>
        </div>
        <div class="separator"></div>
        <div class="text">
            We accept cash, credit/debit cards, pre-approved local checks and Care Credit for payment
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const imageModules = import.meta.glob(
    "@/assets/images/slideshow/*.{jpg,jpeg,png,webp,avif}",
    {
        eager: true,
        import: "default"
    }
);

const images = Object.entries(imageModules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src]) => src);

const currentIndex = ref(0);
const previousIndex = ref(0);
const isTransitioning = ref(false);
const previousReady = ref(false);

const previousZoomDelay = ref(0);
const previousStartScale = ref(1);

let interval = null;
let transitionTimeout = null;
let wheelUnlockTimeout = null;
let wheelLocked = false;
let wheelDelta = 0;
let pointerStartX = null;
let pointerStartY = null;
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let reducedMotion = motionPreference.matches;
let slideStartTime = performance.now();

const SLIDE_DURATION = 5000;
const FADE_DURATION = 800;
const ZOOM_BUFFER = 1000;

const zoomDuration = SLIDE_DURATION + FADE_DURATION + ZOOM_BUFFER;

function startSlideshow() {
    clearInterval(interval);
    interval = null;

    if (reducedMotion) return;

    interval = setInterval(() => {
        nextSlide(false);
    }, SLIDE_DURATION);
}

function resetTimer() {
    startSlideshow();
}

function changeSlide(newIndex, reset = true) {
    clearTimeout(transitionTimeout);

    const elapsed = Math.min(performance.now() - slideStartTime, zoomDuration);
    previousZoomDelay.value = -elapsed;
    previousStartScale.value = 1 + 0.2 * (elapsed / zoomDuration);

    previousIndex.value = currentIndex.value;
    currentIndex.value = newIndex;
    slideStartTime = performance.now();

    isTransitioning.value = true;
    previousReady.value = false;

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            previousReady.value = true;
        });
    });

    transitionTimeout = setTimeout(() => {
        isTransitioning.value = false;
    }, FADE_DURATION);

    if (reset) {
        resetTimer();
    }
}

function nextSlide(reset = true) {
    changeSlide(
        (currentIndex.value + 1) % images.length,
        reset
    );
}

function prevSlide() {
    changeSlide(
        (currentIndex.value - 1 + images.length) % images.length,
        true
    );
}

function handleWheel(event) {
    const horizontalDelta = event.deltaX;
    const isHorizontalGesture = Math.abs(horizontalDelta) >= 2
        && Math.abs(horizontalDelta) >= Math.abs(event.deltaY) * .5;

    if (!isHorizontalGesture) return;

    event.preventDefault();

    clearTimeout(wheelUnlockTimeout);
    wheelUnlockTimeout = setTimeout(() => {
        wheelLocked = false;
        wheelDelta = 0;
    }, 180);

    if (wheelLocked) return;

    wheelDelta += horizontalDelta;
    if (Math.abs(wheelDelta) < 12) return;

    wheelLocked = true;
    if (wheelDelta > 0) nextSlide();
    else prevSlide();
}

function handleKeydown(event) {
    if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevSlide();
    }
    if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextSlide();
    }
}

function handlePointerDown(event) {
    if (event.pointerType === 'mouse') return;
    pointerStartX = event.clientX;
    pointerStartY = event.clientY;
}

function resetPointer() {
    pointerStartX = null;
    pointerStartY = null;
}

function handlePointerUp(event) {
    if (pointerStartX === null || pointerStartY === null) return;

    const deltaX = event.clientX - pointerStartX;
    const deltaY = event.clientY - pointerStartY;
    resetPointer();

    if (Math.abs(deltaX) < 45 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
    if (deltaX < 0) nextSlide();
    else prevSlide();
}

function handleMotionPreference(event) {
    reducedMotion = event.matches;
    if (reducedMotion) {
        clearInterval(interval);
        interval = null;
    } else {
        startSlideshow();
    }
}

onMounted(() => {
    startSlideshow();
    motionPreference.addEventListener('change', handleMotionPreference);
});

onUnmounted(() => {
    clearInterval(interval);
    clearTimeout(transitionTimeout);
    clearTimeout(wheelUnlockTimeout);
    motionPreference.removeEventListener('change', handleMotionPreference);
});
</script>

<style scoped>
.bg-graphic {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--primary-teal);
    top: 20%;
    left: 0;
    z-index: -1;
}
section {
    position: relative;
    margin-top: 70px;
    padding: 0 100px;
    overflow: hidden;
}
.slideshow-wrapper {
    width: 100%;
}

.separator {
    width: 100%;
    height: 0.5px;
    background: var(--secondary-white);
    margin: 40px 0;
    opacity: 60%;
}

.text {
    text-align: center;
    font-size: 20px;
    color: white;
    padding-bottom: 40px;
}

@media screen and (max-width: 960px) {
    section {
        padding: 0 30px;
    }
}

.slideshow-image-container {
    aspect-ratio: 21 / 9;
    width: 100%;
    position: relative;
    overflow: hidden;
    touch-action: pan-y;
}

.slideshow-image-container:focus-visible {
    outline: 4px solid var(--primary-orange);
    outline-offset: 5px;
}

/* Images */

.slide {
    position: absolute;
    inset: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
}

.current {
    z-index: 2;
    animation:
        fadeIn 0.8s ease,
        zoom var(--zoom-duration) linear forwards;
}

.previous {
    z-index: 1;
    opacity: 1;
}

.previous-animate {
    animation:
        fadeOut 0.8s ease forwards,
        zoom var(--zoom-duration) linear forwards;
    animation-delay: 0s, var(--zoom-delay);
}

/* Controls */

.controls {
    display: flex;
    position: absolute;
    inset: 0;

    align-items: center;
    justify-content: space-between;

    padding: 0 15px;

    pointer-events: none;
    z-index: 10;
}

.controls button {
    display: flex;
    width: 52px;
    height: 52px;
    align-items: center;
    justify-content: center;
    border: 2px solid rgba(255, 255, 255, .9);
    border-radius: 50%;
    background: rgba(0, 0, 0, .58);
    color: white;
    cursor: pointer;
    pointer-events: auto;
    transition: background .15s ease, transform .15s ease;
}

.controls button:hover,
.controls button:focus-visible {
    background: var(--primary-teal);
    transform: scale(1.06);
}

.controls button:focus-visible {
    outline: 3px solid var(--primary-gold);
    outline-offset: 3px;
}

.controls i {
    font-size: 2rem;
    line-height: 1;
}

/* Animations */

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

@keyframes zoom {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.2);
    }
}

@media (prefers-reduced-motion: reduce) {
    .current {
        animation: fadeIn .15s ease;
    }

    .previous-animate {
        animation: fadeOut .15s ease forwards;
    }

    .controls button {
        transition: none;
    }
}
</style>
