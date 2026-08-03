<template>
    <footer>
        <div class="footer-container">
            <p>
                © Little Friends Veterinary Services, PLLC
            </p>
            <i
                class="bi bi-chevron-up scroll-top"
                @click="scrollToTop"
                aria-label="Back to top"
                role="button"
                tabindex="0"
            ></i>
            <img src="@/assets/images/LittleFriendsOnWheelsLogo-approved.webp" alt="Little Friends on Wheels">
        </div>
    </footer>
</template>
<script setup>
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
</script>
<style scoped>
footer {
    background: var(--primary-teal);
    color: white;
}
.footer-container {
    display: flex;
    max-width: 1400px;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 40px 30px;
    gap: 30px;
}
.footer-container img {
    width: 300px;
}
.footer-container i {
    cursor: pointer;
    font-size: 24px;
}
@media screen and (max-width: 750px) {
    .footer-container {
        flex-direction: column;
    }
    .footer-container i {
        order: 1;
    }
    .footer-container img {
        order: 3;
    }
    .footer-container p {
        order: 2;
    }
}
</style>
