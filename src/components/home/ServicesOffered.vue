<template>
    <section>
        <div class="header">
            <div class="header-starburst">
                <img src="@/assets/images/Starburst_group_left_Orange-Teal.png" alt="">
            </div>
            <h1 class="heading-line">Services Offered</h1>
        </div>
        <div class="services">
            <div class="service-item" :class="{ active: activeIndex === 0 }" @click="toggleService(0)">
                <i class="bi bi-heart-pulse"></i>
                <p>Wellness services including examinations and immunizations</p>
                <div v-if="activeIndex === 0" class="service-overlay">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>

            <div class="service-item" :class="{ active: activeIndex === 1 }" @click="toggleService(1)">
                <i class="bi bi-shield-check"></i>
                <p>Parasite prevention</p>
                <div v-if="activeIndex === 1" class="service-overlay">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>

            <div class="service-item" :class="{ active: activeIndex === 2 }" @click="toggleService(2)">
                <i class="bi bi-clipboard-heart"></i>
                <p>Illness examinations</p>
                <div v-if="activeIndex === 2" class="service-overlay">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>

            <div class="service-item" :class="{ active: activeIndex === 3 }" @click="toggleService(3)">
                <i class="bi bi-hospital"></i>
                <p>Chronic health condition management</p>
                <div v-if="activeIndex === 3" class="service-overlay">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>

            <div class="service-item" :class="{ active: activeIndex === 4 }" @click="toggleService(4)">
                <i class="bi bi-globe"></i>
                <p>International travel health certificates</p>
                <div v-if="activeIndex === 4" class="service-overlay">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>

            <div class="service-item" :class="{ active: activeIndex === 5 }" @click="toggleService(5)">
                <i class="bi bi-chat-square-heart"></i>
                <p>Behavior concerns</p>
                <div v-if="activeIndex === 5" class="service-overlay">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>

            <div class="service-item" :class="{ active: activeIndex === 6 }" @click="toggleService(6)">
                <i class="ti ti-dog-bowl"></i>
                <p>Nutrition consultations</p>
                <div v-if="activeIndex === 6" class="service-overlay">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const activeIndex = ref(null)

function toggleService(index) {
    activeIndex.value = activeIndex.value === index ? null : index
}

function handleClickOutside(event) {
    if (!event.target.closest('.service-item')) {
        activeIndex.value = null
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
section {
    padding: 10px 30px 70px;
}
.header {
    min-height: 130px;
    padding: 35px 15px;
}
.header-starburst img {
    width: 100px;
    height: auto;
}
.services {
    max-width: 1200px;
    margin: 40px auto;
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
}
.service-item {
    width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    cursor: pointer;
    border-radius: 1rem;
    padding: 10px;
    transition: background-color 0.2s ease;
}
.service-item:hover,
.service-item.active {
    background-color: rgba(0, 128, 128, 0.1);
}
.service-item i {
    font-size: 50px;
    background: var(--primary-teal);
    padding: 20px;
    width: 100px;
    height: 100px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    border-radius: 50%;
    color: white;
}
.service-item p {
    font-size: 18px;
}
.service-overlay {
    position: absolute;
    top: calc(100% + 15px);
    left: 50%;
    transform: translateX(-50%);
    width: 260px;
    background: var(--primary-teal, teal);
    color: white;
    text-align: center;
    padding: 16px 18px;
    border-radius: 0.5rem;
    font-size: 15px;
    line-height: 1.4;
    z-index: 10;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.service-overlay::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 10px 12px 10px;
    border-style: solid;
    border-color: transparent transparent var(--primary-teal, teal) transparent;
}
</style>