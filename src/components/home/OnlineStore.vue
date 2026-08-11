<template>
    <section class="online-store orange-bg" aria-labelledby="online-store-title">
        <div class="store-copy">
            <p class="store-eyebrow">Convenient home delivery</p>
            <h2 id="online-store-title">Pet medications and food, delivered to your door.</h2>
            <a
                class="store-link"
                href="https://littlefriendsvetservices.securevetsource.com/index.pml"
            >
                Shop our online store
                <i class="bi bi-arrow-right" aria-hidden="true"></i>
            </a>
        </div>
        <div class="store-image">
            <img
                src="@/assets/images/Businesscard.image4-f1df1fbc.jpg"
                alt="Little Friends Veterinary Services contact card"
                loading="lazy"
                decoding="async"
            >
        </div>
    </section>
</template>

<style scoped>
.online-store {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 420px);
    align-items: center;
    gap: clamp(36px, 6vw, 80px);
    padding: clamp(54px, 8vw, 86px) max(30px, calc((100vw - 1200px) / 2));
    color: white;
}

.store-copy {
    max-width: 720px;
}

.store-eyebrow {
    margin: 0 0 9px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.11em;
    text-transform: uppercase;
}

.store-copy h2 {
    margin: 0;
    color: white;
    font-size: clamp(2rem, 4.5vw, 3.5rem);
    font-weight: 500;
    line-height: 1.12;
}

.store-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    min-height: 50px;
    margin-top: 28px;
    padding: 12px 20px;
    border: 2px solid white;
    border-radius: 0.45rem;
    color: white;
    font-weight: 800;
    text-decoration: none;
    transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.store-link:hover {
    background: white;
    color: var(--secondary-orange);
    transform: translateY(-2px);
}

.store-link:focus-visible {
    outline: 3px solid white;
    outline-offset: 4px;
}

.store-image {
    overflow: hidden;
    border: 5px solid rgba(255, 255, 255, 0.34);
    border-radius: 1rem;
    box-shadow: 0 20px 50px rgba(72, 18, 0, 0.24);
}

.store-image img {
    display: block;
    width: 100%;
    height: auto;
}

@media (max-width: 600px) {
    .online-store {
        grid-template-columns: 1fr;
        padding-right: 24px;
        padding-left: 24px;
    }

    .store-image {
        width: min(100%, 420px);
    }
}

@media (prefers-reduced-motion: reduce) {
    .store-link {
        transition: none;
    }
}
</style>
