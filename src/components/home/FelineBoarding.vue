<template>
    <section>
        <div class="text-content">
            <h1>Feline Boarding</h1>
            <p>
                We now offer boarding for kitties! Your feline friend can stay in a luxury kitty condo with us while you are away. Kitty condos are super comfy with a separate area for the litter pan, soft bedding and a choice of perching shelves. Each kitty has his or her own condo. Your kitty will be in a quiet, warm, safe space with soft music and NO dogs anywhere. Safety is our utmost priority and since we are a veterinary facility, your kitty will be closely monitored. Call us today to book your kitty's luxury stay with Little Friends!
            </p>
        </div>
       <div class="gallery">
            <img src="@/assets/images/Gallery_1.jpg">
            <img src="@/assets/images/Gallery_2.jpg">
            <img src="@/assets/images/Gallery_3.jpg">
            <img src="@/assets/images/Gallery_4.jpg">
        </div>
    </section>
</template>
<style scoped>
section {
    padding: 70px 40px;
}
.text-content h1 {
    color: #075f5f;
    font-family: 'Galada';
    font-size: 52px;
    font-weight: 400;
    line-height: 1.2;
    text-align: center;
    width: fit-content;
    margin: auto;
}
.text-content h1::after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    margin: 3px auto 0;
    border-radius: 999px;
    background: var(--primary-orange);
}
.text-content p {
    font-size: 24px;
    font-weight: 400;
    line-height: 1.55;
    margin-top: 20px;
}
.text-content {
    max-width: 1100px;
    margin: auto;
}

.gallery {
    max-width: 800px;
    margin: auto;
    display: grid;
    gap: 30px;
    margin-top: 30px;
    grid-template-columns: 3fr 1fr;
    grid-template-areas:
        "big img2"
        "big img3"
        "big img4";
}

.gallery img {
    width: 100%;
    height: auto;
    display: block;
}

.gallery img:nth-child(1) {
    grid-area: big;
    align-self: center;
}

.gallery img:nth-child(2) {
    grid-area: img2;
}

.gallery img:nth-child(3) {
    grid-area: img3;
}

.gallery img:nth-child(4) {
    grid-area: img4;
}

@media (max-width: 960px) {
    .gallery {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-areas: none;
    }

    .gallery img {
        grid-area: auto !important;
    }

    section {
        padding: 70px 30px;
    }
    .text-content h1 {
        font-size: 35.7px;
    }
}
@media screen and (max-width: 450px) {
    .gallery {
        grid-template-columns: repeat(1, minmax(0,1fr));
        max-width: 200px;
    }
}
</style>
