<template>
    <footer>
        <div class="footer-container">
            <p>
                © Little Friends Veterinary Services, PLLC
            </p>
            <button
                type="button"
                class="scroll-top"
                @click="scrollToTop"
                aria-label="Back to top"
            >
                <i class="bi bi-chevron-up" aria-hidden="true"></i>
            </button>
            <img src="@/assets/images/LittleFriendsOnWheelsLogo-approved.webp" alt="Little Friends on Wheels" loading="eager" decoding="async">
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
    color: var(--color-white);
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
    width: 310px;
    max-width: 100%;
}
.scroll-top {
    padding: 8px;
    background: transparent;
    color: var(--color-white);
    cursor: pointer;
    font-family: inherit;
}
.scroll-top i {
    cursor: pointer;
    font-size: 24px;
}
.scroll-top:focus-visible {
    outline: 3px solid white;
    outline-offset: 3px;
}
@media screen and (max-width: 750px) {
    .footer-container {
        flex-direction: column;
    }
    .scroll-top {
        order: 1;
    }
    .footer-container img {
        order: 3;
        width: 260px;
    }
    .footer-container p {
        order: 2;
    }
}
</style>
