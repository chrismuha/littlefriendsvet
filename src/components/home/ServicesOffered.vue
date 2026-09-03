<template>
    <section class="services-section" aria-label="Our Services">
        <div class="services-content">
            <header class="services-intro">
                <p class="services-eyebrow">Compassionate care at every stage</p>
                <h2 id="our-services-title">Services Offered</h2>
                <p>Select a service to learn more.</p>
            </header>

            <div class="services">
                <div
                    v-for="(service, index) in services"
                    :key="service.title"
                    class="service-card"
                >
                    <button
                        type="button"
                        class="service-item"
                        :aria-haspopup="isMobile ? 'dialog' : undefined"
                        :aria-expanded="activeIndex === index"
                        :aria-controls="!isMobile ? `service-details-${index}` : undefined"
                        @click="toggleService(index, $event)"
                        @keydown="handleServiceButtonKeydown($event, index)"
                    >
                        <i :class="service.icon" aria-hidden="true"></i>
                        <span>{{ service.title }}</span>
                    </button>

                    <Transition name="service-popover">
                        <div
                            v-if="!isMobile && activeIndex === index"
                            :id="`service-details-${index}`"
                            class="service-popover"
                            role="region"
                            :aria-label="`${service.title} details`"
                        >
                            <p>{{ service.description }}</p>
                            <div v-if="service.images" class="boarding-preview">
                                <img
                                    v-for="(image, imageIndex) in service.images"
                                    :key="image"
                                    :src="image"
                                    :alt="service.imageAlt || `${service.title} photo ${imageIndex + 1}`"
                                >
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>

        <Teleport to="body">
            <Transition name="service-modal">
                <div
                    v-if="isMobile && activeService"
                    class="service-backdrop"
                    @click.self="closeService"
                >
                    <div
                        class="service-dialog"
                        role="dialog"
                        aria-modal="true"
                        :aria-labelledby="`service-title-${activeIndex}`"
                    >
                        <button
                            ref="closeButton"
                            type="button"
                            class="service-close"
                            aria-label="Close service details"
                            @click="closeService"
                        >
                            <i class="bi bi-x-lg" aria-hidden="true"></i>
                        </button>

                        <div class="service-dialog-heading">
                            <i :class="activeService.icon" aria-hidden="true"></i>
                            <h2 :id="`service-title-${activeIndex}`">
                                {{ activeService.title }}
                            </h2>
                        </div>

                        <div class="service-description">
                            <p>{{ activeService.description }}</p>
                            <div v-if="activeService.images" class="boarding-preview">
                                <img
                                    v-for="(image, imageIndex) in activeService.images"
                                    :key="image"
                                    :src="image"
                                    :alt="activeService.imageAlt || `${activeService.title} photo ${imageIndex + 1}`"
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </section>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
// import boardingImage1 from '@/assets/images/Gallery_1.jpg'
// import boardingImage2 from '@/assets/images/Gallery_2.jpg'
// import boardingImage3 from '@/assets/images/Gallery_3.jpg'
// import boardingImage4 from '@/assets/images/Gallery_4.jpg'
import felineBehaviorImage from '@/assets/images/Mousie_claws.jpg'

const services = [
    {
        icon: 'bi bi-heart-pulse',
        title: 'Wellness services',
        description: 'Examinations, including puppies, kittens, new pets, and seniors; immunizations such as rabies, distemper, and others based on your pet\'s lifestyle; an ongoing comprehensive healthcare plan for the life of your pet; and preventative healthcare testing.',
    },
    {
        icon: 'bi bi-shield-check',
        title: 'Parasite prevention',
        description: 'Safe and effective parasite prevention based on your pet\'s health and lifestyle.',
    },
    {
        icon: 'bi bi-clipboard-heart',
        title: 'Illness examinations',
        description: 'A full examination, including testing, if your pet is not feeling well.',
    },
    {
        icon: 'bi bi-hospital',
        title: 'Chronic health condition management',
        description: 'Management of chronic health conditions, such as arthritis, skin conditions, allergies, diabetes, and any other conditions your pet may be experiencing.',
    },
    {
        icon: 'bi bi-globe',
        title: 'International travel health certificates',
        description: 'As a USDA-accredited veterinarian, Dr. Underwood can provide health certificates for international travel for your pets, including Canada.',
    },
    {
        icon: 'bi bi-chat-square-heart',
        title: 'Behavior concerns',
        description: 'Behavior concerns such as anxiety, litter box use, aggression, and other common challenges can be addressed. Declawing cats is illegal in New York, and Dr. Underwood can provide feline-focused guidance on safe, effective alternatives and managing scratching behavior.',
        images: [felineBehaviorImage],
        imageAlt: 'Cat demonstrating healthy scratching behavior',
    },
    {
        icon: 'ti ti-dog-bowl',
        title: 'Nutrition consultations',
        description: 'Nutrition counseling for your pet based on science and evidence-based nutritional recommendations.',
    },
    // {
    //     icon: 'bi bi-house-heart',
    //     title: 'Feline boarding',
    //     description: 'Your cat can stay in a private luxury kitty condo with a separate litter area, soft bedding, and perching shelves. Our quiet, warm boarding area has soft music, no dogs, and close monitoring by our veterinary team. Call to reserve your kitty\'s stay.',
    //     images: [boardingImage1, boardingImage2, boardingImage3, boardingImage4],
    // },
]

const activeIndex = ref(null)
const closeButton = ref(null)
const isMobile = ref(false)
let triggerElement = null
let mobileQuery = null

const activeService = computed(() => (
    activeIndex.value === null ? null : services[activeIndex.value]
))

function handleKeydown(event) {
    if (event.key === 'Escape') closeService()
}

function handleServiceButtonKeydown(event, index) {
    const direction = {
        ArrowLeft: -1,
        ArrowUp: -1,
        ArrowRight: 1,
        ArrowDown: 1,
    }[event.key]

    if (!direction) return
    event.preventDefault()
    const buttons = event.currentTarget
        .closest('.services')
        ?.querySelectorAll('.service-item')
    if (!buttons?.length) return
    buttons[(index + direction + buttons.length) % buttons.length].focus()
}

function handleOutsideClick(event) {
    if (!isMobile.value && !event.target.closest('.service-card')) closeService(false)
}

function handleViewportChange(event) {
    isMobile.value = event.matches
    closeService(false)
}

async function toggleService(index, event) {
    if (activeIndex.value === index) {
        closeService()
        return
    }

    activeIndex.value = index
    triggerElement = event.currentTarget
    document.addEventListener('keydown', handleKeydown)

    if (!isMobile.value) return

    document.body.classList.add('service-modal-open')
    await nextTick()
    closeButton.value?.focus()
}

function closeService(restoreFocus = true) {
    if (activeIndex.value === null) return

    activeIndex.value = null
    document.body.classList.remove('service-modal-open')
    document.removeEventListener('keydown', handleKeydown)
    if (restoreFocus) nextTick(() => triggerElement?.focus())
}

onMounted(() => {
    mobileQuery = window.matchMedia('(max-width: 767px)')
    isMobile.value = mobileQuery.matches
    mobileQuery.addEventListener('change', handleViewportChange)
    document.addEventListener('click', handleOutsideClick)
})

onBeforeUnmount(() => {
    document.body.classList.remove('service-modal-open')
    document.removeEventListener('keydown', handleKeydown)
    document.removeEventListener('click', handleOutsideClick)
    mobileQuery?.removeEventListener('change', handleViewportChange)
})
</script>

<style scoped>
.services-section {
    padding: 0;
}

:global(html[data-theme="dark"] .services-section) {
    background: var(--section-background);
}

.services-content {
    padding: clamp(52px, 7vw, 82px) 30px;
}

.services-intro {
    max-width: 720px;
    margin: 0 auto 44px;
    text-align: center;
}

.services-eyebrow {
    margin: 0 0 9px;
    font-size: 9.84pt;
    font-weight: 800;
    letter-spacing: 0.11em;
    text-transform: uppercase;
}

.services-eyebrow {
    color: var(--content-teal);
}

:global(html[data-theme="dark"] .services-eyebrow) {
    color: var(--color-white);
    text-shadow: 0 1px 3px var(--overlay-dark-40);
}

.services-intro h2 {
    margin: 0;
    color: var(--heading-text);
    font-size: clamp(26.4pt, 5vw, 42pt);
    font-weight: 500;
    line-height: 1.1;
}

.services-intro > p:last-child {
    margin: 12px 0 0;
    font-size: 12.6pt;
    font-weight: 500;
}

.services {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 260px);
    gap: 30px;
    justify-content: center;
    align-items: flex-start;
}

.service-card {
    position: relative;
    width: 260px;
}

.service-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0;
    border-radius: 1rem;
    padding: 10px;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font: inherit;
    text-align: center;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.service-item:hover {
    background-color: var(--overlay-teal-10);
    transform: translateY(-2px);
}

:global(html[data-theme="dark"] .service-item) {
    border: 1px solid var(--overlay-bright-teal-35);
    background: var(--surface-background);
}

:global(html[data-theme="dark"] .service-item:hover) {
    background: color-mix(in srgb, var(--surface-background) 88%, white);
}

:global(html[data-theme="dark"] .service-item > i) {
    border: 2px solid var(--overlay-light-45);
    background: var(--button-teal);
    color: var(--color-white);
}

.service-item:focus-visible {
    outline: 3px solid var(--primary-orange);
    outline-offset: 4px;
}

.service-item > i,
.service-dialog-heading > i {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    width: 100px;
    height: 100px;
    padding: 20px;
    border-radius: 50%;
    background: var(--primary-teal);
    color: var(--color-white);
    font-size: 37.5pt;
}

.service-item > i {
    margin: 10px 0;
}

.service-item span {
    font-size: 13.5pt;
    font-weight: 700;
}

.service-popover {
    position: absolute;
    top: calc(100% + 16px);
    left: 50%;
    z-index: 20;
    width: 300px;
    padding: 20px 22px;
    border-radius: 0.8rem;
    background: var(--primary-teal);
    color: var(--color-white);
    box-shadow: 0 14px 36px var(--overlay-dark-24);
    font-size: 11.76pt;
    font-weight: 500;
    line-height: 1.55;
    text-align: center;
    transform: translateX(-50%);
}

.service-card:last-child .service-popover {
    width: min(480px, 90vw);
}

.boarding-preview {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    margin-top: 16px;
}

.boarding-preview img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 0.45rem;
    object-fit: cover;
}

.service-popover::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    border-width: 0 11px 13px;
    border-style: solid;
    border-color: transparent transparent var(--primary-teal);
    transform: translateX(-50%);
}

:global(html[data-theme="dark"] .service-popover) {
    background: var(--primary-orange);
    color: var(--color-white);
}

:global(html[data-theme="dark"] .service-popover::before) {
    border-color: transparent transparent var(--primary-orange);
}

.service-popover-enter-active,
.service-popover-leave-active {
    transition: opacity 0.18s ease, transform 0.18s ease;
}

.service-popover-enter-from,
.service-popover-leave-to {
    opacity: 0;
    transform: translate(-50%, -6px);
}

.service-backdrop {
    position: fixed;
    inset: 0;
    z-index: 10000;
    display: grid;
    place-items: center;
    overflow-y: auto;
    padding: 28px;
    background: var(--overlay-deep-teal-64);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}

.service-dialog {
    position: relative;
    width: min(620px, 100%);
    overflow: hidden;
    border: 1px solid var(--overlay-light-12);
    border-radius: 1.25rem;
    background: var(--surface-background);
    color: var(--page-text);
    box-shadow: 0 24px 80px var(--overlay-dark-38);
}

.service-dialog-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    padding: 48px 64px 34px;
    text-align: center;
}

.service-dialog-heading h2 {
    margin: 0;
    color: var(--heading-text);
    font-size: clamp(19.8pt, 4vw, 27pt);
    font-weight: 500;
    line-height: 1.2;
}

.service-description {
    padding: 28px 44px 34px;
    background: var(--primary-teal);
    color: var(--color-white);
    font-size: clamp(12pt, 2.4vw, 14.4pt);
    line-height: 1.55;
    text-align: center;
}

.service-close {
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 1;
    display: inline-grid;
    width: 44px;
    height: 44px;
    place-items: center;
    border: 0;
    border-radius: 50%;
    background: var(--overlay-dark-08);
    color: var(--heading-text);
    cursor: pointer;
    font-size: 16.5pt;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.service-close:hover {
    background: var(--overlay-dark-16);
    transform: scale(1.06);
}

.service-close:focus-visible {
    outline: 3px solid var(--primary-orange);
    outline-offset: 2px;
}

.service-modal-enter-active,
.service-modal-leave-active {
    transition: opacity 0.2s ease;
}

.service-modal-enter-active .service-dialog,
.service-modal-leave-active .service-dialog {
    transition: transform 0.2s ease, opacity 0.2s ease;
}

.service-modal-enter-from,
.service-modal-leave-to {
    opacity: 0;
}

.service-modal-enter-from .service-dialog,
.service-modal-leave-to .service-dialog {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
}

@media (max-width: 600px) {
    .services-content {
        padding-right: 18px;
        padding-left: 18px;
    }

    .service-backdrop {
        align-items: center;
        padding: 16px;
    }

    .service-dialog-heading {
        padding: 54px 28px 28px;
    }

    .service-dialog-heading > i {
        width: 88px;
        height: 88px;
        font-size: 31.5pt;
    }

    .service-description {
        padding: 24px;
    }
}

@media (max-width: 920px) {
    .services {
        grid-template-columns: repeat(2, 260px);
    }
}

@media (max-width: 600px) {
    .services {
        grid-template-columns: minmax(0, 260px);
    }
}

@media (prefers-reduced-motion: reduce) {
    .service-item,
    .service-popover-enter-active,
    .service-popover-leave-active,
    .service-close,
    .service-modal-enter-active,
    .service-modal-leave-active,
    .service-modal-enter-active .service-dialog,
    .service-modal-leave-active .service-dialog {
        transition: none;
    }
}
</style>

<style>
body.service-modal-open {
    overflow: hidden;
}
</style>
