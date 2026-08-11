<template>
    <section class="services-section" aria-labelledby="our-services-title">
        <div class="teal-bg services-banner">
            <div class="header header-v3">
                <div class="header-starburst">
                    <img src="@/assets/images/Starburst_group_left_Orange-Teal.png" alt="">
                </div>
                <h1 id="our-services-title">Our Services</h1>
            </div>
        </div>

        <div class="services-content">
            <header class="services-intro">
                <p class="services-eyebrow">Compassionate care at every stage</p>
                <h2>Services Offered</h2>
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
                            {{ service.description }}
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
                            {{ activeService.description }}
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </section>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const services = [
    {
        icon: 'bi bi-heart-pulse',
        title: 'Wellness services including examinations and immunizations',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        icon: 'bi bi-shield-check',
        title: 'Parasite prevention',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        icon: 'bi bi-clipboard-heart',
        title: 'Illness examinations',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        icon: 'bi bi-hospital',
        title: 'Chronic health condition management',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        icon: 'bi bi-globe',
        title: 'International travel health certificates',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        icon: 'bi bi-chat-square-heart',
        title: 'Behavior concerns',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        icon: 'ti ti-dog-bowl',
        title: 'Nutrition consultations',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
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

.services-banner .header {
    margin-bottom: 0;
}

.services-banner .header h1 {
    color: white;
}

.services-content {
    padding: clamp(64px, 8vw, 96px) 30px;
}

.services-intro {
    max-width: 720px;
    margin: 0 auto 44px;
    text-align: center;
}

.services-eyebrow {
    margin: 0 0 9px;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.11em;
    text-transform: uppercase;
}

.services-eyebrow {
    color: var(--content-teal);
}

.services-intro h2 {
    margin: 0;
    color: var(--heading-text);
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    font-weight: 500;
    line-height: 1.1;
}

.services-intro > p:last-child {
    margin: 12px 0 0;
    font-size: 1.05rem;
    font-weight: 500;
}

.services {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
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
    background-color: rgba(0, 128, 128, 0.1);
    transform: translateY(-2px);
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
    color: white;
    font-size: 50px;
}

.service-item > i {
    margin: 10px 0;
}

.service-item span {
    font-size: 18px;
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
    color: white;
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.24);
    font-size: 0.98rem;
    font-weight: 500;
    line-height: 1.55;
    text-align: center;
    transform: translateX(-50%);
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
    background: rgba(3, 31, 31, 0.64);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}

.service-dialog {
    position: relative;
    width: min(620px, 100%);
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 1.25rem;
    background: var(--surface-background);
    color: var(--page-text);
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.38);
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
    font-size: clamp(1.65rem, 4vw, 2.25rem);
    font-weight: 500;
    line-height: 1.2;
}

.service-description {
    padding: 28px 44px 34px;
    background: var(--primary-teal);
    color: white;
    font-size: clamp(1rem, 2.4vw, 1.2rem);
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
    background: rgba(0, 0, 0, 0.08);
    color: var(--heading-text);
    cursor: pointer;
    font-size: 22px;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.service-close:hover {
    background: rgba(0, 0, 0, 0.16);
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
        font-size: 42px;
    }

    .service-description {
        padding: 24px;
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
