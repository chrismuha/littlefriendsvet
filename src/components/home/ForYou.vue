<template>
    <section id="foryou">
        <div class="header">
            <div class="header-starburst">
                <img src="@/assets/images/Starburst_group_left_Orange-Teal.png" alt="">
            </div>
            <h1 class="heading-line">Little Friends Vet is here for you!</h1>
        </div>
        <div class="body-content">
            <div class="text-wrapper wrapped-intro">
                <div class="individual-image">
                    <img src="@/assets/images/Individual.jpg" alt="Veterinary care tailored to an individual pet" loading="eager" decoding="async">
                </div>
                <p>
                    Welcome to Little Friends Vet … on Wheels! Many of you remember us from our brick and mortar practice in Lyons Falls. We are back and offering the same expert, compassionate care now in the comfort of home. We offer exclusive house call service to your pets with Dr. Liane Underwood. With over 30 years of experience, Dr. Underwood offers the very best care for your pets. We care for cats, dogs, small mammals, reptiles and basic care for birds.
                </p>
                <p>
                    We provide wellness and illness exams. We offer all necessary immunizations for your pet based on health and life style. We provide the safest and most effective parasite preventatives. We offer a full line of medications and nutrition for your pets through our online pharmacy and partnership with Purina Veterinary Diets and Purina Pro Plan, with delivery directly to your home. We can help you manage chronic health conditions with your pet - such as arthritis, allergies and diabetes and many more. We offer behavior consultations for issues such as anxiety, litter box use and other basic behavior concerns. Dr. Underwood is a USDA Accredited veterinarian and can provide health certificates for international travel with your pet (including Canada!). We offer end of life care in partnership with Forever Meadows Pet Memorialization and Cremation services.
                </p>
                <p>
                    For emergencies, you may reach out to us via text message - <a href="sms:+18555534416">click the link to text us anytime</a>. While not always available, Dr. Underwood does her best to reply whenever possible. We also partner with Vet Triage for direct consultation with a veterinarian 24 hours a day - <a href="https://vettriage.com/" target="_blank" rel="noopener noreferrer">click the link</a>. And, for serious or surgical emergencies, the <a href="https://www.vmccny.com" target="_blank" rel="noopener noreferrer">Veterinary Medical Center of Central New York</a> is available 24/7/365. And, when we are not immediately available for a house call, Dr. Underwood is able to provide telemedicine services for current patients.
                </p>
                <p>
                    Scheduling is by appointment only. Please <a href="mailto:info@littlefriendsvet.com?subject=Appointment%20Reservation%20Request">contact us to request a reservation</a>. We serve the areas around Lyons Falls, Boonville, Lowville, Brantingham and Old Forge. Estimates for your visit are provided before your appointment and a deposit is requested when scheduling to ensure our availability to focus on your pet's care. We accept cash, pre-approved checks, credit/debit cards and Care Credit. There is a processing fee added to credit card transactions.
                </p>
                <p>
                    Thank you for considering us to care for your little friends!
                </p>
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
.individual-image {
    float: left;
    width: clamp(160px, 20vw, 230px);
    margin: 4px 30px 18px 0;
    shape-outside: circle(50%);
}
.individual-image img {
    display: block;
    border-radius: 50%;
    width: 100%;
}
.text-wrapper {
    flex: 1;
    color: var(--page-text);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.65;
}
.text-wrapper a {
    color: var(--content-teal);
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;
}
:global(html[data-theme="dark"] .text-wrapper a) {
    color: var(--link-text);
}
@media screen and (min-width: 961px) {
    .wrapped-intro a {
        white-space: nowrap;
    }
}
@media screen and (max-width: 960px) {
    .text-wrapper {
        font-size: 17px;
    }
}
.wrapped-intro p + p {
    margin-top: 20px;
}
.wrapped-intro::after {
    display: block;
    clear: both;
    content: '';
}
.ending-image {
    height: 65px;
}
.ending-image img {
    height: 100%;
}
@media screen and (max-width: 960px) {
    .individual-image {
        width: clamp(140px, 35vw, 190px);
        margin-right: 22px;
    }
}
</style>
