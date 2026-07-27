<template>
    <section>
        <div class="row-wrapper">
            <div class="row">
                <div class="row-item">
                    <div class="title">
                        <i class="bi bi-telephone"></i>
                        <p>Contact Information</p>
                    </div>
                    <div class="details">
                        <p>Give us a Call: <a href="tel:3153486389">315-348-6389</a></p>
                        <p>Send us a Text: <a href="sms:+18555534416">855-553-4416</a></p>
                    </div>
                </div>
                <div class="row-item">
                    <div class="title">
                        <i class="bi bi-geo-alt"></i>
                        <p>Location</p>
                    </div>
                    <div class="details">
                        <p><a href="https://www.google.com/maps/place/6793+McAlpine+St,+Lyons+Falls,+NY+13368/@43.618744,-75.3682801,19z/data=!3m1!4b1!4m5!3m4!1s0x89d8e86c596b1b69:0x69aa35c7c2b6d304!8m2!3d43.618743!4d-75.3677329" target="_blank" rel="noopener">6793B McAlpine St</a></p>
                        <p><a href="https://www.google.com/maps/place/6793+McAlpine+St,+Lyons+Falls,+NY+13368/@43.618744,-75.3682801,19z/data=!3m1!4b1!4m5!3m4!1s0x89d8e86c596b1b69:0x69aa35c7c2b6d304!8m2!3d43.618743!4d-75.3677329" target="_blank" rel="noopener">Lyons Falls, NY 13368</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row-wrapper orange-bg">
            <div class="row">
                <div class="row-item">
                    <div class="title">
                        <i class="bi bi-clock"></i>
                        <p>Office Hours</p>
                    </div>
                    <div class="details">
                        <p>Monday, Tuesday, Thursday & Friday</p>
                        <p>9am to 4pm</p>
                        <p>Closed on Wednesdays</p>
                    </div>
                </div>
                <div class="row-item notice">
                    <div>
                        <b>Hours are subject to change at any time.</b>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    font-size: 16px;
    color: black;
}
.title {
    font-size: 24px;
    display: flex;
    align-items: center;
}
.title i {
    width: 70px;
    font-size: 40px;
}
.details {
    margin-left: 70px;
    padding: 10px 0;
}
.row {
    gap: 30px;
    padding: 20px 40px;
    max-width: 1400px;
    margin: auto;
}
.row-item {
    width: 100%;
    padding: 30px;
}
.notice {
    display: flex;
    align-items: center;
}
@media screen and (max-width: 800px) {
    .title {
        flex-direction: column;
        align-items: start;
    }
    .details {
        margin: 0;
    }
    .row {
        flex-wrap: wrap;
    }
    .orange-bg {
        gap: 10px;
    }
    .orange-bg .row-item:not(.notice) {
        padding-bottom: 0;
    }
    .notice {
        padding-top: 0;
    }
}
</style>