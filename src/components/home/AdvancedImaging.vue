<template>
    <section>
        <div class="content-container">
            <div class="left-image">
                <img src="@/assets/images/IMG_5080.jpg" alt="Dog wearing protective goggles during laser therapy" loading="lazy" decoding="async">
            </div>
            <div class="right-section">
                <h1>Advanced Imaging, Diagnostic and Therapeutic Services</h1>
                <p>
                    Advanced imaging services for your pet include digital ultrasound, therapeutic laser therapy and digital ECG.
                </p>
                <div class="image-row row">
                    <img src="@/assets/images/IMG_5138.jpg" alt="Black cat receiving a digital ultrasound examination" loading="lazy" decoding="async">
                    <img src="@/assets/images/ultraImaging.webp" alt="Veterinary team performing an ultrasound on a dog" loading="lazy" decoding="async">
                </div>
                <p>
                    Our top of the line digital ultrasound will allow us to check your pet's heart, or check for pregnancy, and much much more!
                </p>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    background: var(--section-background);
    padding: 70px 30px;
    color: var(--page-text);
}
h1 {
    font-size: 31.5pt;
    font-weight: 500;
}
.content-container {
    display: flex;
    gap: 20px;
    align-items: center;
    max-width: 1400px;
    margin: auto;
}
.right-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-shrink: 2;
    font-size: 18pt;
}
.left-image {
    max-width: 30%;
}
img {
    width: 100%;
}

.image-row {
    gap: 20px;
    width: 100%;
    justify-content: space-between;
}

.image-row img {
    flex: 1;
    min-width: 0;
    max-width: 450px;
}

@media screen and (max-width: 960px) {
    .content-container {
        flex-direction: column;
    }
    .image-row {
        flex-direction: column;
    }
    .left-image {
        max-width: 100%;
    }
    .image-row img:nth-child(2) {
        max-width: unset;
        width: 100%;
        object-fit: cover;
    }
}
</style>
