<script setup>
import InstallAppButton from '@/components/InstallAppButton.vue'
</script>

<template>
    <section>
        <div class="actions-layout">
            <img
                class="service-flyer"
                src="@/assets/images/flyer.webp"
                alt="Little Friends on Wheels mobile veterinary services flyer with services, service areas, contact information, and appointment request QR code"
                loading="eager"
                decoding="async"
            >

            <div class="actions-content">
                <h2>How can we help?</h2>
                <div class="buttons-wrapper">
                    <!-- <a href="#meet-dr-liane" class="btn btn-orange">Meet Dr. Liane</a> -->
                    <a href="#new-client" class="btn btn-orange">New Client?</a>
                    <a href="https://littlefriendsvetservices.securevetsource.com/index.pml" class="btn btn-orange">Shop!</a>
                    <!-- <a href="#gallery" class="btn btn-orange">Gallery</a> -->
                    <a href="#contact-info" class="btn btn-orange">Contact Us</a>
                    <a href="mailto:info@littlefriendsvet.com?subject=Medical%20Records%20Request" class="btn btn-orange">Request Medical Records</a>
                    <InstallAppButton />
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    padding: clamp(48px, 7vw, 90px) 30px;
    background: var(--navigation-background);
}
.actions-layout {
    display: grid;
    grid-template-columns: minmax(320px, 470px) minmax(300px, 520px);
    align-items: center;
    justify-content: center;
    gap: clamp(36px, 6vw, 82px);
    max-width: 1200px;
    margin: auto;
}
.service-flyer {
    display: block;
    width: 100%;
    max-height: 740px;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: 0 16px 45px rgb(0 0 0 / 18%);
}
.actions-content h2 {
    margin-bottom: 24px;
    color: var(--content-teal);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    text-align: center;
}
:global(html[data-theme="dark"] .actions-content h2) {
    color: #102626;
}
.actions-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.buttons-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
}
.buttons-wrapper :deep(.btn) {
    display: flex;
    min-height: 54px;
    align-items: center;
    justify-content: center;
    text-align: center;
}
@media screen and (max-width: 760px) {
    section {
        padding-right: 20px;
        padding-left: 20px;
    }
    .actions-layout {
        grid-template-columns: 1fr;
        gap: 36px;
    }
    .service-flyer {
        width: min(100%, 420px);
        max-height: none;
        margin: auto;
    }
}
</style>
