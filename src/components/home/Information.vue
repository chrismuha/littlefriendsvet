<template>
    <section>
        <div id="contact-info" class="row-wrapper contact-location">
            <div class="row">
                <div class="row-item">
                    <div class="title">
                        <i class="bi bi-telephone"></i>
                        <p>Contact Information</p>
                    </div>
                    <div class="details">
                        <p>Give us a Call: <a href="tel:+13157960907">315-796-0907</a></p>
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
        <div class="row-wrapper orange-bg office-hours">
            <div class="row">
                <div class="row-item">
                    <div class="title">
                        <i class="bi bi-clock"></i>
                        <p>Office Hours</p>
                    </div>
                    <div class="details">
                        <p class="days">Monday, Tuesday, Thursday & Friday</p>
                        <p class="time">9am to 4pm</p>
                        <p class="closed">Closed on Wednesdays</p>
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
.contact-location {
    background: var(--primary-gold);
    color: #2f2f2f;
}
.contact-location .title {
    color: #075f5f;
    font-weight: 700;
}
.contact-location .title i {
    color: var(--primary-orange);
}
.contact-location a {
    color: #075f5f;
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;
}
.contact-location a:hover {
    color: var(--secondary-orange);
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
.office-hours .row {
    max-width: 850px;
    flex-direction: column;
    align-items: center;
    gap: 0;
    text-align: center;
}
.office-hours .row-item {
    padding: 24px 30px;
}
.office-hours .title {
    justify-content: center;
    font-size: 28px;
    font-weight: 700;
}
.office-hours .title i {
    width: auto;
    margin-right: 14px;
}
.office-hours .details {
    margin-left: 0;
    font-size: 18px;
    font-weight: 400;
}
.office-hours .details .days {
    font-size: 22px;
    font-weight: 700;
}
.office-hours .details .time {
    margin: 4px 0;
    font-size: 24px;
    font-weight: 700;
}
.office-hours .details .closed {
    font-weight: 700;
}
.office-hours .notice {
    justify-content: center;
    width: auto;
    padding-top: 18px;
    border-top: 1px solid rgba(255, 255, 255, .55);
    font-size: 16px;
    font-style: italic;
    line-height: 1.5;
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
