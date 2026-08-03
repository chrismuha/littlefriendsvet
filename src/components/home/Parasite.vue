<template>
    <section class="teal-bg">
        <div class="content-container">
            <div class="image-section">
                <img src="@/assets/images/Ixodus_ricinus.jpg" alt="Close-up view of a tick">
            </div>
            <div class="text-wrapper">
                Remember year-round parasite prevention to keep your pet comfortable and your family safe! Ticks are active in winter and fleas can be present indoors. There are even new, invasive species of ticks that are large and aggressive - protect your pets and family today. Little Friends has safe and effective products for every budget!
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    width: 100%;
    padding: 70px 40px;
}
.content-container {
    max-width: 1400px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
}
.image-section {
    width: 170%;
}
.image-section img {
    width: 100%;
    border-radius: 50%;
}
.text-wrapper {
    font-size: 24px;
    font-weight: 400;
    line-height: 1.55;
}
@media screen and (max-width:960px) {
    .content-container {
        flex-direction: column;
        align-items: start;
        justify-content: start;
    }
    .image-section {
        max-width: 500px;
        width: unset;
    }
}
</style>
