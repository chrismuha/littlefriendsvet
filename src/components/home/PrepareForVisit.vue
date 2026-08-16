<template>
    <section class="visit-section" aria-labelledby="prepare-title">
        <div class="visit-content">
            <header class="visit-intro">
                <p class="visit-eyebrow">A little planning goes a long way</p>
                <h2 id="prepare-title">Prepare for Your Visit</h2>
                <p>Select your pet to learn more.</p>
            </header>

            <div class="visit-options">
                <div v-for="(pet, index) in pets" :key="pet.title" class="visit-card">
                    <button
                        type="button"
                        class="visit-item"
                        :aria-haspopup="isMobile ? 'dialog' : undefined"
                        :aria-expanded="activeIndex === index"
                        :aria-controls="!isMobile ? `visit-details-${index}` : undefined"
                        @click="togglePet(index, $event)"
                    >
                        <i :class="pet.icon" aria-hidden="true"></i>
                        <span>{{ pet.title }}</span>
                    </button>

                    <Transition name="visit-popover">
                        <div
                            v-if="!isMobile && activeIndex === index"
                            :id="`visit-details-${index}`"
                            class="visit-popover"
                            role="region"
                            :aria-label="`${pet.title} visit preparation details`"
                        >
                            <p>{{ pet.description }}</p>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>

        <Teleport to="body">
            <Transition name="visit-modal">
                <div v-if="isMobile && activePet" class="visit-backdrop" @click.self="closePet">
                    <div class="visit-dialog" role="dialog" aria-modal="true" :aria-labelledby="`visit-title-${activeIndex}`">
                        <button ref="closeButton" type="button" class="visit-close" aria-label="Close visit preparation details" @click="closePet">
                            <i class="bi bi-x-lg" aria-hidden="true"></i>
                        </button>
                        <div class="visit-dialog-heading">
                            <i :class="activePet.icon" aria-hidden="true"></i>
                            <h2 :id="`visit-title-${activeIndex}`">{{ activePet.title }}</h2>
                        </div>
                        <div class="visit-description">
                            <p>{{ activePet.description }}</p>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </section>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const pets = [
    {
        icon: 'ti ti-dog',
        title: 'Dogs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        icon: 'ti ti-cat',
        title: 'Cats',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
]

const activeIndex = ref(null)
const closeButton = ref(null)
const isMobile = ref(false)
let triggerElement = null
let mobileQuery = null

const activePet = computed(() => activeIndex.value === null ? null : pets[activeIndex.value])

function handleKeydown(event) {
    if (event.key === 'Escape') closePet()
}

function handleOutsideClick(event) {
    if (!isMobile.value && !event.target.closest('.visit-card')) closePet(false)
}

function handleViewportChange(event) {
    isMobile.value = event.matches
    closePet(false)
}

async function togglePet(index, event) {
    if (activeIndex.value === index) {
        closePet()
        return
    }
    activeIndex.value = index
    triggerElement = event.currentTarget
    document.addEventListener('keydown', handleKeydown)
    if (!isMobile.value) return
    document.body.classList.add('visit-modal-open')
    await nextTick()
    closeButton.value?.focus()
}

function closePet(restoreFocus = true) {
    if (activeIndex.value === null) return
    activeIndex.value = null
    document.body.classList.remove('visit-modal-open')
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
    document.body.classList.remove('visit-modal-open')
    document.removeEventListener('keydown', handleKeydown)
    document.removeEventListener('click', handleOutsideClick)
    mobileQuery?.removeEventListener('change', handleViewportChange)
})
</script>

<style scoped>
.visit-section { padding: 0; }
:global(html[data-theme="dark"] .visit-section) { background: var(--section-background); }
.visit-content { padding: clamp(52px, 7vw, 82px) 30px; }
.visit-intro { max-width: 720px; margin: 0 auto 44px; text-align: center; }
.visit-eyebrow { margin: 0 0 9px; color: var(--accent-orange-text); font-size: 0.82rem; font-weight: 800; letter-spacing: 0.11em; text-transform: uppercase; }
.visit-intro h2 { margin: 0; color: var(--heading-text); font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 500; line-height: 1.1; }
.visit-intro > p:last-child { margin: 12px 0 0; font-size: 1.05rem; font-weight: 500; }
.visit-options { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(2, 260px); gap: 30px; justify-content: center; align-items: flex-start; }
.visit-card { position: relative; width: 260px; }
.visit-item { width: 100%; display: flex; flex-direction: column; align-items: center; border: 0; border-radius: 1rem; padding: 10px; background: transparent; color: inherit; cursor: pointer; font: inherit; text-align: center; transition: background-color 0.2s ease, transform 0.2s ease; }
.visit-item:hover { background-color: color-mix(in srgb, var(--primary-orange) 10%, transparent); transform: translateY(-2px); }
:global(html[data-theme="dark"] .visit-item) { border: 1px solid rgba(123, 222, 215, 0.35); background: var(--surface-background); }
:global(html[data-theme="dark"] .visit-item:hover) { background: color-mix(in srgb, var(--surface-background) 88%, white); }
.visit-item:focus-visible { outline: 3px solid var(--primary-teal); outline-offset: 4px; }
.visit-item > i, .visit-dialog-heading > i { display: inline-flex; align-items: center; justify-content: center; flex: 0 0 auto; width: 100px; height: 100px; padding: 20px; border-radius: 50%; background: var(--primary-orange); color: white; font-size: 50px; }
.visit-item > i { margin: 10px 0; }
.visit-item span { font-size: 18px; font-weight: 700; }
.visit-popover { position: absolute; top: calc(100% + 16px); left: 50%; z-index: 20; width: 300px; padding: 20px 22px; border-radius: 0.8rem; background: var(--primary-orange); color: white; box-shadow: 0 14px 36px rgba(0, 0, 0, 0.24); font-size: 0.98rem; font-weight: 500; line-height: 1.55; text-align: center; transform: translateX(-50%); }
.visit-popover::before { content: ''; position: absolute; bottom: 100%; left: 50%; border-width: 0 11px 13px; border-style: solid; border-color: transparent transparent var(--primary-orange); transform: translateX(-50%); }
.visit-popover-enter-active, .visit-popover-leave-active { transition: opacity 0.18s ease, transform 0.18s ease; }
.visit-popover-enter-from, .visit-popover-leave-to { opacity: 0; transform: translate(-50%, -6px); }
.visit-backdrop { position: fixed; inset: 0; z-index: 10000; display: grid; place-items: center; overflow-y: auto; padding: 28px; background: rgba(47, 17, 3, 0.64); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }
.visit-dialog { position: relative; width: min(620px, 100%); overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 1.25rem; background: var(--surface-background); color: var(--page-text); box-shadow: 0 24px 80px rgba(0, 0, 0, 0.38); }
.visit-dialog-heading { display: flex; flex-direction: column; align-items: center; gap: 18px; padding: 48px 64px 34px; text-align: center; }
.visit-dialog-heading h2 { margin: 0; color: var(--heading-text); font-size: clamp(1.65rem, 4vw, 2.25rem); font-weight: 500; line-height: 1.2; }
.visit-description { padding: 28px 44px 34px; background: var(--primary-orange); color: white; font-size: clamp(1rem, 2.4vw, 1.2rem); line-height: 1.55; text-align: center; }
.visit-close { position: absolute; top: 14px; right: 14px; z-index: 1; display: inline-grid; width: 44px; height: 44px; place-items: center; border: 0; border-radius: 50%; background: rgba(0, 0, 0, 0.08); color: var(--heading-text); cursor: pointer; font-size: 22px; transition: background-color 0.2s ease, transform 0.2s ease; }
.visit-close:hover { background: rgba(0, 0, 0, 0.16); transform: scale(1.06); }
.visit-close:focus-visible { outline: 3px solid var(--primary-teal); outline-offset: 2px; }
.visit-modal-enter-active, .visit-modal-leave-active { transition: opacity 0.2s ease; }
.visit-modal-enter-active .visit-dialog, .visit-modal-leave-active .visit-dialog { transition: transform 0.2s ease, opacity 0.2s ease; }
.visit-modal-enter-from, .visit-modal-leave-to { opacity: 0; }
.visit-modal-enter-from .visit-dialog, .visit-modal-leave-to .visit-dialog { opacity: 0; transform: translateY(12px) scale(0.98); }

@media (max-width: 600px) {
    .visit-content { padding-right: 18px; padding-left: 18px; }
    .visit-options { grid-template-columns: minmax(0, 260px); }
    .visit-backdrop { align-items: center; padding: 16px; }
    .visit-dialog-heading { padding: 54px 28px 28px; }
    .visit-dialog-heading > i { width: 88px; height: 88px; font-size: 42px; }
    .visit-description { padding: 24px; }
}

@media (prefers-reduced-motion: reduce) {
    .visit-item, .visit-popover-enter-active, .visit-popover-leave-active, .visit-close, .visit-modal-enter-active, .visit-modal-leave-active, .visit-modal-enter-active .visit-dialog, .visit-modal-leave-active .visit-dialog { transition: none; }
}
</style>

<style>
body.visit-modal-open { overflow: hidden; }
</style>
