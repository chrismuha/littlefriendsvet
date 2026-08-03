<script setup>
import InstallAppButton from '@/components/InstallAppButton.vue'
</script>

<template>
    <section>
        <div class="buttons-wrapper">
            <a href="#meet-dr-liane" class="btn btn-orange">Meet Dr. Liane</a>
            <a href="#new-client" class="btn btn-orange">New Client?</a>
            <a href="https://littlefriendsvetservices.securevetsource.com/index.pml" class="btn btn-orange">Shop!</a>
            <a href="#gallery" class="btn btn-orange">Gallery</a>
            <a href="#contact-info" class="btn btn-orange">Contact Us</a>
            <a href="mailto:info@littlefriendsvet.com?subject=Medical%20Records%20Request" class="btn btn-orange">Request Medical Records</a>
            <InstallAppButton />
        </div>
    </section>
</template>
<style scoped>
section {
    padding: 100px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--navigation-background)
}
.buttons-wrapper {
    display: flex;
    flex-wrap: wrap;
    max-width: 1400px;
    margin: auto;
    gap: 15px;
    justify-content: center;
}
</style>
