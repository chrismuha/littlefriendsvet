<script setup>
import newClientForm from '@/assets/forms/LFVS-NewClient-Form.pdf'
import newPetInformationForm from '@/assets/forms/LFVS-NewPet-Information.pdf'
</script>

<template>
    <section>
        <img src="@/assets/images/Starburst_group_left_Orange-Teal.png" alt="" class="starburst">
        <div class="content-container">
            <div class="left-section">
                <div class="section-item">
                    <h1>Services We Offer</h1>
                    <div class="text-wrapper">
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
                    </div>
                </div>
                <div class="section-item">
                    <h1>Surgical Services</h1>
                    <div class="text-wrapper">
                        <p>
                            We offer surgical services for cats including spaying and neutering, as well as more advanced surgery and all dental services for cats. We provide all health care for your dog from puppies to seniors, however we do not provide routine surgical services for dogs.  Please contact us with any questions.
                        </p>
                    </div>
                </div>
                <div class="section-item emergency-services">
                    <h1>Emergency Services</h1>
                    <div class="text-wrapper">
                        <p>
                            For after hours emergencies, the following facilities are available:
                        </p>
                        <ul>
                            <li>
                                Veterinary Medical Center of Central New York –
                                <a href="https://www.vmccny.com" target="_blank" rel="noopener noreferrer">
                                    www.vmccny.com
                                </a>
                                <a href="tel:+13154467933">(315) 446-7933</a> – available 24 hours a day, 7 days a week
                            </li>

                            <li>
                                Waterville Veterinary Clinic – for clients to the south –
                                <a href="tel:+13158414021">(315) 841-4021</a> – nights and weekends
                            </li>

                            <li>
                                Northcountry Animal Hospital – for clients to the north –
                                <a href="tel:+13157859505">(315) 785-9505</a> – nights and weekends
                            </li>

                            <li>
                                Urgent Veterinary Care in Auburn –
                                <a href="https://www.urgentcare.vet" target="_blank" rel="noopener noreferrer">
                                    www.urgentcare.vet
                                </a>;
                                <a href="tel:+13155153047">315-515-3047</a>. Services and hours limited, please check their website or call them.
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="section-item">
                    <h1>Spay Neuter Now</h1>
                    <div class="text-wrapper">
                        <p>
                            Dr. Underwood partners with <b>Spay Neuter Now</b> to offer low cost spay and neuter services for cats to income qualified families. For cats only, we offer this service for qualified families right at our office. For dogs, Town and Country Veterinary Clinic in Massena offers this service to qualified families. The application must be submitted to Spay Neuter Now and qualified families will be contacted to schedule their pets. Click on the link for more information and to print or submit the application.
                        </p>
                        <p>
                            <a href="https://www.spayneuternow.org/" class="btn btn-orange">Learn More About Spay Neuter Now</a>
                        </p>
                    </div>
                </div>
                <div id="new-client" class="section-item new-client-section">
                    <h1>New Client?</h1>
                    <div class="text-wrapper">
                        <p>
                            Complete our online form,<br>
                            or download and fill out both PDFs below.
                        </p>
                        <div class="new-client-buttons">
                            <RouterLink to="/intake" class="new-client-button primary">
                                <i class="bi bi-laptop" aria-hidden="true"></i>
                                Complete the Online Form
                            </RouterLink>
                            <a
                                :href="newClientForm"
                                class="new-client-button"
                                target="_blank"
                                rel="noopener"
                            >
                                <i class="bi bi-file-earmark-pdf" aria-hidden="true"></i>
                                Download Client Info
                            </a>
                            <a
                                :href="newPetInformationForm"
                                class="new-client-button"
                                target="_blank"
                                rel="noopener"
                            >
                                <i class="bi bi-file-earmark-pdf" aria-hidden="true"></i>
                                Download Pet Info
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-section">
                <div class="image-wrapper">
                    <img src="@/assets/images/exam_area_LFVS-e02b910a.webp" alt="Little Friends veterinary surgical suite" loading="lazy" decoding="async">
                    <img src="@/assets/images/IMG_7720.webp" alt="Veterinarian holding a black cat" loading="lazy" decoding="async">
                    <img src="@/assets/images/Starburst_group_right_Orange-Teal.png" alt="" class="starburst2">
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    position: relative;
    padding: clamp(70px, 8vw, 110px) 40px;
    color: var(--content-text);
    font-size: 18px;
    font-weight: 400;
}
.content-container {
    max-width: 1500px;
    margin: auto;
    line-height: 1.6;
    display: flex;
    gap: clamp(40px, 5vw, 76px);
}
.starburst {
    position: absolute;
    top: 0;
    left: 0;
    height: 150px;
    opacity: 50%;
    z-index: -1;
}
.btn {
    font-size: 14px;
    padding: 0 30px;
    line-height: 38px;
}
.section-item h1 {
    font-family: 'Galada';
    font-size: 2rem;
    color: var(--content-teal);
    font-weight: 400;
}
.section-item p,
.section-item li {
    line-height: 1.65;
}
.left-section {
    flex: 1 1 auto;
    min-width: 0;
    gap: 42px;
}
.left-section > .section-item:not(:last-child) {
    padding-bottom: 38px;
    border-bottom: 1px solid var(--separator-color);
}
.text-wrapper > ul {
    display: grid;
    gap: 14px;
    padding-left: 1.35rem;
}
.text-wrapper > ul > li {
    padding-left: 0.35rem;
}
.text-wrapper > ul > li::marker {
    color: var(--primary-orange);
    font-size: 1.15em;
}
.text-wrapper li > ul {
    display: grid;
    gap: 10px;
    margin-top: 14px;
    padding: 18px 22px 18px 42px;
    border-left: 4px solid var(--primary-teal);
    border-radius: 0 0.7rem 0.7rem 0;
    background: color-mix(in srgb, var(--primary-teal) 8%, transparent);
}
.text-wrapper li > ul li::marker {
    color: var(--content-teal);
}
.new-client-section {
    margin-top: 45px;
    text-align: center;
}
.new-client-section h1 {
    font-family: inherit;
    font-size: 42px;
    font-weight: 400;
}
.new-client-section .text-wrapper {
    align-items: center;
}
.new-client-buttons {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
}
.new-client-button {
    display: flex;
    min-height: 56px;
    padding: 11px 16px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: .2rem;
    background: #5a5a5a;
    color: white;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.25;
    text-decoration: none;
}
.new-client-button.primary {
    background: var(--button-orange);
}
.new-client-button i {
    flex-shrink: 0;
    font-size: 19px;
}
.new-client-buttons a:hover {
    background: #444;
    color: white;
    text-decoration: none;
}
.emergency-services a {
    color: var(--content-teal);
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;
}
.emergency-services a:hover {
    color: var(--secondary-orange);
}
.section-item, .left-section, .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.right-section {
    width: 26%;
    max-width: 360px;
    flex-shrink: 0;

}
.right-section .image-wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.right-section img {
    width: 100%;
    border-radius: 0.5rem;
}
.starburst2 {
    height: 100px;
    object-fit: contain;
}
@media screen and (max-width: 960px) {
    .content-container {
        flex-direction: column;
    }
    .right-section {
        width: 100%;
        max-width: none;
    }
    .new-client-buttons {
        grid-template-columns: 1fr;
    }
}
</style>
