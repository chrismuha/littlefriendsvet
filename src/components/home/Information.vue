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
                        <p>Call us: <a href="tel:+13157960907">315-796-0907</a></p>
                        <p>Text us: <a href="sms:+18555534416">855-553-4416</a></p>
                    </div>
                </div>
                <div class="row-item">
                    <div class="title">
                        <i class="bi bi-geo-alt"></i>
                        <p>Mailing Address</p>
                    </div>
                    <div class="details">
                        <p>PO Box 437</p>
                        <p>Lyons Falls, NY 13368</p>
                    </div>
                </div>
                <div class="row-item office-hours">
                    <div class="title">
                        <i class="bi bi-clock"></i>
                        <p>Office Hours</p>
                    </div>
                    <div class="details">
                        <p class="time">By reservation only</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    font-size: 12pt;
    color: var(--color-black);
}
.contact-location {
    background: var(--primary-gold);
    color: var(--content-text);
}
.contact-location .title {
    color: var(--content-teal);
    font-weight: 700;
}
.contact-location .title i {
    color: var(--primary-orange);
}
.contact-location a {
    color: var(--content-teal);
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;
}
.contact-location a:hover {
    color: var(--secondary-orange);
}
.title {
    font-size: 14.25pt;
    display: flex;
    align-items: center;
}
.title p {
    white-space: nowrap;
}
.title i {
    width: 42px;
    font-size: 21pt;
}
.details {
    margin-left: 42px;
    padding: 6px 0 0;
    color: var(--color-charcoal);
}
.row {
    display: grid;
    grid-template-columns: minmax(0, 1.18fr) repeat(2, minmax(0, 1fr));
    gap: 18px;
    padding: 22px 30px;
    max-width: 1240px;
    margin: auto;
}
.details p {
    white-space: nowrap;
}
.row-item {
    width: 100%;
    padding: 18px;
    border-radius: 0.8rem;
    background: var(--overlay-light-42);
}
.office-hours .details {
    margin-left: 42px;
}
.office-hours .details .time {
    margin: 0;
    font-size: 12.75pt;
    font-weight: 700;
}
@media screen and (max-width: 800px) {
    .title {
        flex-direction: column;
        align-items: start;
    }
    .details {
        margin: 0;
    }
    .details p {
        white-space: normal;
    }
    .office-hours .details {
        margin-left: 0;
    }
    .row {
        grid-template-columns: 1fr;
    }
}
</style>
