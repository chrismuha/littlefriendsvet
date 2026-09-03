<!--
    Historical archive only. This component is intentionally not imported or
    rendered by the website. The current service circles are maintained in
    components/home/ServicesOffered.vue.
-->
<template>
    <section class="legacy-services-we-offer">
        <h1>Services We Offer</h1>
        <ul>
            <li>Care for pets of all ages – from new pet care to senior pet care.</li>
            <li>We offer care for cats, dogs, small mammals, birds and reptiles – even fish!</li>
            <li>
                Preventative health care including:
                <ul>
                    <li>Examinations – annual wellness exams or if your pet is not feeling well</li>
                    <li>
                        Vaccinations including Rabies and Distemper for both dogs and cats; Lyme,
                        Leptosporosis and Kennel cough for your dog; and Feline Leukemia for your cat
                    </li>
                    <li>
                        Parasite prevention including flea and tick preventatives for your dog and cat;
                        and heartworm preventatives for your dog
                    </li>
                    <li>
                        Laboratory testing including stool and urine testing, heartworm and Lyme testing,
                        feline leukemia/FIV testing, and all types of blood tests.
                    </li>
                </ul>
            </li>
            <li>
                Care for new pets, like puppies and kittens to provide a life-long plan of health and
                wellness
            </li>
            <li>
                Care for senior pets with a focus on prevention and treatment of disease common to older
                pets
            </li>
            <li>
                Diagnosis and management of chronic health conditions such as diabetes, arthritis, skin
                conditions and more.
            </li>
            <li>
                Special focus on feline behavior issues – we offer behavioral consultations for cats for
                problems such as inappropriate elimination (not using the litter box) and aggression.
            </li>
            <li>Training and behavior consultations for dogs and puppies.</li>
            <li>
                Grooming services for cats including bathing, brushing, nail trims, sanitary clips and
                full lion cut clips.
            </li>
            <li>End of life care.</li>
        </ul>

        <div class="legacy-surgical-services">
            <h1>Surgical Services</h1>
            <p>
                We offer surgical services for cats including spaying and neutering, as well as more advanced surgery and all dental services for cats. We provide all health care for your dog from puppies to seniors, however we do not provide routine surgical services for dogs. Please contact us with any questions.
            </p>
            <div class="legacy-surgical-images">
                <img src="@/assets/images/exam_area_LFVS-e02b910a.webp" alt="Little Friends veterinary surgical suite">
                <img src="@/assets/images/IMG_7720.webp" alt="Veterinarian holding a black cat">
            </div>
        </div>

        <div class="legacy-spay-neuter-now">
            <h1>Spay Neuter Now</h1>
            <p>
                Dr. Underwood partners with <b>Spay Neuter Now</b> to offer low cost spay and neuter services for cats to income qualified families. For cats only, we offer this service for qualified families right at our office. For dogs, Town and Country Veterinary Clinic in Massena offers this service to qualified families. The application must be submitted to Spay Neuter Now and qualified families will be contacted to schedule their pets. Click on the link for more information and to print or submit the application.
            </p>
            <p>
                <a href="https://www.spayneuternow.org/">Learn More About Spay Neuter Now</a>
            </p>
        </div>
    </section>
</template>

<style scoped>
.legacy-services-we-offer > ul {
    display: grid;
    gap: 14px;
    padding-left: 1.35rem;
}

.legacy-services-we-offer > ul > li::marker {
    color: var(--primary-orange);
    font-size: 13.8pt;
}

.legacy-services-we-offer li > ul {
    display: grid;
    gap: 10px;
    margin-top: 14px;
    padding: 18px 22px 18px 42px;
    border-left: 4px solid var(--primary-teal);
    border-radius: 0 0.7rem 0.7rem 0;
    background: color-mix(in srgb, var(--primary-teal) 8%, transparent);
}

.legacy-services-we-offer li > ul li::marker {
    color: var(--content-teal);
}

.legacy-surgical-services,
.legacy-spay-neuter-now {
    margin-top: 42px;
}

.legacy-surgical-images {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    margin-top: 24px;
}

.legacy-surgical-images img {
    width: 100%;
    border-radius: 0.5rem;
}
</style>
