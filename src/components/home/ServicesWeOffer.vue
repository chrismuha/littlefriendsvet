<script setup>
import newClientForm from '@/assets/forms/LFVS-NewClient-Form.pdf'
import newPetInformationForm from '@/assets/forms/LFVS-NewPet-Information.pdf'
</script>

<template>
    <section>
        <img src="@/assets/images/Starburst_group_left_Orange-Teal.png" alt="" class="starburst">
        <div class="content-container">
            <div class="left-section">
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
        </div>
    </section>
</template>
<style scoped>
section {
    position: relative;
    padding: clamp(70px, 8vw, 110px) 40px;
    color: var(--content-text);
    font-size: 18px;
    font-weight: 500;
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
    top: 14px;
    left: 14px;
    height: 96px;
    opacity: 0.22;
    z-index: -1;
}
.section-item h1 {
    font-family: 'Galada';
    font-size: 2rem;
    color: var(--content-teal);
    font-weight: 400;
}
:global(html[data-theme="dark"] .section-item h1) {
    color: white;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.45);
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
    font-weight: 600;
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
:global(html[data-theme="dark"] .new-client-button.primary:hover) {
    background: var(--accent-orange-text);
    color: #102626;
}
.emergency-services a {
    color: var(--content-teal);
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;
}
:global(html[data-theme="dark"] .emergency-services a) {
    color: var(--link-text);
}

@media screen and (min-width: 961px) {
    .section-item p a,
    .section-item li a {
        white-space: nowrap;
    }
}
.emergency-services a:hover {
    color: var(--secondary-orange);
}
:global(html[data-theme="dark"] .emergency-services a:hover) {
    color: white;
}
.section-item, .left-section, .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

@media screen and (max-width: 960px) {
    .content-container {
        flex-direction: column;
    }
    .new-client-buttons {
        grid-template-columns: 1fr;
    }
}
</style>
