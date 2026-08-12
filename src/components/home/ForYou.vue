<template>
    <section id="foryou">
        <div class="header">
            <div class="header-starburst">
                <img src="@/assets/images/Starburst_group_left_Orange-Teal.png" alt="">
            </div>
            <h1 class="heading-line">Little Friends Vet is here for you!</h1>
        </div>
        <div class="body-content">
            <div class="row">
                <div class="individual-image">
                    <img src="@/assets/images/Individual.jpg" alt="Veterinary care tailored to an individual pet" loading="eager" decoding="async">
                </div>
                <div class="text-wrapper">
                    Welcome to Little Friends Veterinary Services! We are your local, small town, family owned and operated veterinary hospital in beautiful Lyons Falls, NY. We are happy to continue caring for pets and families in a safe, comforting environment.  We ARE accepting new clients and patients!  We are open for all appointments including wellness visits, immunizations, illness and emergencies, puppy and kitten visits and feline surgical services including our community spay and neuter program and feline dentistry, as well as limited canine surgical services. Our appointments are filling quickly, so be sure to call ahead. Contact us by phone, email or text and please be sure to leave a message if you call - we may be busy with another patient and we will do our very best to call you back as soon as we can.  We are also very excited to offer text messaging services!  Text us at <a href="sms:+18555534416">855-553-4416</a>.  We will do our best to respond to text messages as quickly as possible.
                </div>
            </div>
            <div class="text-wrapper">
                At Little Friends, you will always have the same doctor and friendly, caring staff for your pets. For your pet's visit, you will receive a FULL HALF-HOUR with the doctor, not just 15 or 20 minutes! We strive to provide a safe and calm environment with a focus on what is best for your pets and family. We have the safest and most effective parasite preventatives, free home delivery of Purina diets with Royal Canin diets available at our office and the most accurate, up to date information regarding your pet’s health and welfare. Contact us today!
            </div>
            <div class="ending-image">
                <img src="@/assets/images/Starburst_group_left_Orange-Teal.png" alt="">
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    background: var(--section-background);
    padding: 10px 30px 70px;
}
.header {
    min-height: 130px;
    padding: 35px 15px;
}
.header-starburst img {
    width: 100px;
    height: auto;
}
.body-content {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.row {
    gap: 30px;
}
.individual-image {
    width: 200px;
    position: relative;
}
.individual-image img {
    border-radius: 50%;
    width: 100%;
    position: relative;
}
.text-wrapper {
    flex: 1;
    color: var(--page-text);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.65;
}
.text-wrapper a {
    color: var(--content-teal);
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;
}
.ending-image {
    height: 65px;
}
.ending-image img {
    height: 100%;
}
@media screen and (max-width: 960px) {
    .row {
        flex-direction: column;
        padding-top: 40px;
    }
}
</style>
