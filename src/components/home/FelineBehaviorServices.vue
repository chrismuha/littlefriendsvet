<template>
    <section>
        <div class="content-container fixed-bg fbc-container">
            <div class="content-wrapper">
                1
            </div>
        </div>
        <div class="content-container orange-bg orange-container">
            2
        </div>
        <div class="content-container fixed-bg panks-container">
            <div class="content-wrapper">
                3
            </div>
        </div>
    </section>
</template>
<style scoped>
.fbc-container {
    background-image: url("@/assets/images/catphoto_left.jpg");
}
.panks-container {
    background-image: url("@/assets/images/catphoto_right.jpg");
}

.content-container {
    width: 100%;
    min-height: 500px;
}
.content-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: var(--golden-bg);
}

</style>