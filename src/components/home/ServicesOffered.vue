<script setup>
import { PhBowlFood } from '@phosphor-icons/vue';

</script>
<template>
    <section>
        <div class="header">
            <div class="header-starburst">
                <img src="@/assets/images/Starburst_group_left_Orange-Teal.png" alt="">
            </div>
            <h1 class="heading-line">Services Offered</h1>
        </div>
        <div class="services">
            <div class="service-item">
                <i class="bi bi-heart-pulse"></i>
                <p>Wellness services including examinations and immunizations</p>
            </div>
            <div class="service-item">
                <i class="bi bi-shield-check"></i>
                <p>Parasite prevention</p>
            </div>
            <div class="service-item">
                <i class="bi bi-clipboard-heart"></i>
                <p>Illness examinations</p>
            </div>
            <div class="service-item">
                <i class="bi bi-hospital"></i>
                <p>Chronic health condition management</p>
            </div>
            <div class="service-item">
                <i class="bi bi-globe"></i>
                <p>International travel health certificates</p>
            </div>
            <div class="service-item">
                <i class="bi bi-chat-square-heart"></i>
                <p>Behavior concerns</p>
            </div>
            <div class="service-item">
                <i class="ti ti-dog-bowl"></i>
                <p>Nutrition consultations</p>
            </div>
        </div>
    </section>
</template>
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
</style>