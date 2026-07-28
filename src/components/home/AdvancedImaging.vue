<template>
    <section>
        <div class="content-container">
            <div class="left-image">
                <img src="@/assets/images/IMG_5080.jpg">
            </div>
            <div class="right-section">
                <h1>Advanced Imaging, Diagnostic and Therapeutic Services</h1>
                <p>
                    .....for your pet with digital ultrasound, therapeutic laser therapy and digital ECG. 
                </p>
                <div class="image-row row">
                    <img src="@/assets/images/IMG_5138.jpg">
                    <img src="@/assets/images/ultraImaging.jpg">
                </div>
                <p>
                    <b>
                        Our top of the line digital ultrasound will allow us to check your pet's heart, or check for pregnancy, and much much more!
                    </b>
                </p>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    background: var(--secondary-white);
    padding: 70px 30px;
    color: #333;
}
b {
    font-weight: 900;
}
h1 {
    font-size: 42px;
    font-weight: 300;
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
    font-size: 24px;
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
        width: 100%;
        object-fit: cover;
    }
}
</style>