<template>
    <section class="online-store orange-bg" aria-labelledby="online-store-title">
        <div class="store-copy">
            <p class="store-eyebrow">Convenient home delivery</p>
            <h2 id="online-store-title">Pet medications and food, delivered to your door.</h2>
            <p class="store-description">
                Shop our online pharmacy, or order prescription and healthy pet diets through
                Purina Vet Direct with free delivery. Use Clinic ID <strong>5NE5D</strong> when signing up.
            </p>
            <div class="store-links">
                <a
                    class="store-link"
                    href="https://littlefriendsvetservices.securevetsource.com/index.pml"
                >
                    Online pharmacy
                    <i class="bi bi-arrow-right" aria-hidden="true"></i>
                </a>
                <a class="store-link" href="https://www.proplanvetdirect.com/">
                    Purina Vet Direct
                    <i class="bi bi-arrow-right" aria-hidden="true"></i>
                </a>
            </div>
        </div>
        <div class="store-image">
            <img
                src="@/assets/images/Businesscard.image4-f1df1fbc.jpg"
                alt="Little Friends Veterinary Services contact card"
                loading="eager"
                decoding="async"
            >
        </div>
    </section>
</template>

<style scoped>
.online-store {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(190px, 240px);
    align-items: center;
    gap: clamp(20px, 3vw, 34px);
    padding: clamp(22px, 3vw, 34px) max(24px, calc((100vw - 960px) / 2));
    color: white;
}

.store-copy {
    max-width: 540px;
}

.store-eyebrow {
    margin: 0 0 5px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.11em;
    text-transform: uppercase;
}
:global(html[data-theme="dark"] .store-eyebrow) {
    color: white;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

.store-copy h2 {
    margin: 0;
    color: white;
    font-size: clamp(1.5rem, 2.6vw, 2.1rem);
    font-weight: 500;
    line-height: 1.12;
}

.store-description {
    margin-top: 10px;
    line-height: 1.5;
}

.store-links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 14px;
}

.store-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    min-height: 42px;
    margin-top: 0;
    padding: 8px 16px;
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
