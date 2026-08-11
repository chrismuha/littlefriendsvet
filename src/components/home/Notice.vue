<template>
    <section class="orange-bg">
        <div class="text-wrapper">
            <p class="opening">
            It is with deep regret that Little Friends will be closing as of December 30, 2025.
            It has been our absolute pleasure to serve our community and care for your pets over the last decade.
            This has been an extremely difficult decision for me; however, I have reached a point in life where a new path has opened up.
            </p>

            <p>
            I cannot tell you how thankful I am for the many pets and people that I have met over the years in our community.
            It has been an absolute honor. I will cherish the memories of being able to care for the animals and families through
            Little Friends Veterinary Services.
            </p>

            <p>
            For those of you with pets who are on medications or in need of prescriptions, please be sure to contact us within the
            next few weeks to arrange for refills and prescriptions to tide you over for a period of time.
            Please contact us via email at
            <a href="mailto:info@littlefriendsvet.com">info@littlefriendsvet.com</a>,
            phone at
            <a href="tel:+13157960907">(315) 796-0907</a>,
            or text message at
            <a href="sms:+18555534416">(855) 553-4416</a>.
            We will also be happy to provide your pet’s medical records either digitally or as a hard copy.
            Scheduled appointments prior to December 31, 2025 are still in place.
            </p>

            <p>
            The business entity will remain intact throughout 2026 to allow for as seamless a transition as possible for all of our
            patients and clients. You may contact us at any time via email or text message (above) after January 1, 2026 to obtain
            your pet’s medical records or with other questions that we may help you with.
            </p>

            <p class="gratitude">
            With immense gratitude,
            </p>

            <p class="signature">
            <strong>Liane Underwood, DVM</strong>
            </p>
        </div>
    </section>
</template>
<style scoped>
section {
    height: fit-content;
    width: 100%;
    text-align: center;
}
.text-wrapper {
    max-width: 1150px;
    margin: auto;
    padding: 70px 30px;

    display: flex;
    flex-direction: column;
    gap: 14px;
    color: white;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.7;
    text-align: left;
}
.opening {
    font-size: inherit;
    font-weight: inherit;
}
.text-wrapper a {
    color: white;
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;
}
.text-wrapper a:hover {
    color: var(--primary-gold);
}
.gratitude {
    margin-top: 10px;
    font-style: italic;
}
.signature {
    font-size: 22px;
    letter-spacing: .01em;
}

@media screen and (max-width: 640px) {
    .text-wrapper {
        padding: 40px 15px;
    }
}
</style>
