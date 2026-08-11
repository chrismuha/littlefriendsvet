<template>
    <section>
        <div class="body-container">
            <div class="header">
                <!-- <div class="header-starburst">
                    <img src="@/assets/images/Starburst_group_left_Orange-Teal.png" alt="">
                </div> -->
                <h1>Areas Served</h1>
            </div>
            <div class="services">
                <div class="service-item">
                    <i class="bi bi-geo-alt-fill"></i>
                    <p>Lyons Falls area</p>
                </div>
                <div class="service-item">
                    <i class="bi bi-geo-alt-fill"></i>
                    <p>Boonville area</p>
                </div>
                <div class="service-item">
                    <i class="bi bi-geo-alt-fill"></i>
                    <p>Lowville area</p>
                </div>
                <div class="service-item">
                    <i class="bi bi-geo-alt-fill"></i>
                    <p>Brantingham area</p>
                </div>
                <div class="service-item">
                    <i class="bi bi-geo-alt-fill"></i>
                    <p>Old Forge area</p>
                </div>
            </div>
            <div class="details">
                <p>
                    Phone: <a href="tel:3157960907">315-796-0907</a><br>
                    Text: <a href="sms:8555534416">855-553-4416</a><br>
                    Email: <a href="mailto:info@littlefriendsvet.com">info@littlefriendsvet.com</a><br>
                    Address: PO Box 437, Lyons Falls, NY 13368
                </p>
                <p>
                    Appointments are by reservation only <br>
                    Emergency consultations provided based on availability - contact is the same as above.
                </p>
                <p>
                    For surgical emergencies, or when I am not available, contact the Veterinary Medical Center of Central New York:
                    <a href="https://www.vmccny.com" target="_blank" rel="noopener noreferrer">
                        www.vmccny.com
                    </a>
                    — <a href="tel:3154467933">315-446-7933</a>.
                </p>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    background: var(--section-background);
    padding: 10px 30px;
}
.body-container {
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "header   services"
        "details  services";
    column-gap: 30px;
    align-items: start;
}
a {
    color: var(--content-teal);
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;
}
.header {
    grid-area: header;
    min-height: 130px;
    padding: 35px 15px;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.header h1 {
    margin: 0;
}
.header-starburst img {
    width: 100px;
    height: auto;
}
.services {
    grid-area: services;
    margin: 40px auto;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    flex-direction: column;
}
.service-item {
    width: 400px;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 16px;
    gap: 10px;
    border: teal 3px solid;
    padding: 10px 30px;
    border-radius: 0.5rem;
    text-align: left;
    font-weight: 400;
}
.service-item i {
    color: teal;
    font-size: 24px;
}
.details {
    grid-area: details;
    padding: 0 15px;
}
.details {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
@media (max-width: 960px) {
    .body-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .header {
        text-align: center;
        align-items: center;
        width: 100%;
        padding-bottom: 0;
    }

    .services {
        order: 2;
        width: 100%;
        margin: 20px 0;
        align-items: center;
    }

    .service-item {
        width: min(100%, 500px);
        box-sizing: border-box;
    }

    .details {
        order: 3;
        width: 100%;
        max-width: 500px;
        text-align: center;
        padding: 40px 15px;
    }
}
</style>