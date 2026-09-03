<script setup>
import newClientForm from '@/assets/forms/LFVS-NewClient-Form.pdf'
import newPetInformationForm from '@/assets/forms/LFVS-NewPet-Information.pdf'
import vetTriageInstructions from '@/assets/forms/VetTriageServices.pdf'
</script>

<template>
    <section>
        <img src="@/assets/images/Starburst_group_left_Orange-Teal.png" alt="" class="starburst">
        <div class="content-container">
            <div class="left-section">
                <div class="section-item emergency-services">
                    <h1>Emergency Advice</h1>
                    <a
                        class="vet-triage-link"
                        href="https://vettriage.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Get emergency veterinary advice from VetTriage (opens in a new tab)"
                    >
                        <img
                            src="@/assets/images/vet-triage-logo.svg"
                            alt="VetTriage"
                            loading="lazy"
                        >
                        <span>Talk with a veterinarian online, 24/7</span>
                    </a>
                    <a
                        class="vet-triage-instructions"
                        :href="vetTriageInstructions"
                        target="_blank"
                        rel="noopener"
                    >
                        <i class="bi bi-file-earmark-pdf" aria-hidden="true"></i>
                        View instructions for connecting with a VetTriage veterinarian
                        <span class="sr-only"> (opens PDF in a new tab)</span>
                    </a>
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
    position: relative;
    z-index: 1;
    max-width: 1500px;
    margin: auto;
    line-height: 1.6;
    display: flex;
    gap: clamp(40px, 5vw, 76px);
}
.starburst {
    position: absolute;
    top: 22px;
    left: 24px;
    height: clamp(125px, 9vw, 165px);
    opacity: 0.48;
    z-index: 0;
}
.section-item h1 {
    font-family: 'Galada';
    font-size: 2rem;
    color: var(--content-teal);
    font-weight: 400;
}
:global(html[data-theme="dark"] .section-item h1) {
    color: var(--color-white);
    text-shadow: 0 2px 5px var(--overlay-dark-45);
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
    background: var(--color-gray);
    color: var(--color-white);
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
    background: var(--color-gray-strong);
    color: var(--color-white);
    text-decoration: none;
}
:global(html[data-theme="dark"] .new-client-button.primary:hover) {
    background: var(--accent-orange-text);
    color: var(--color-deep-teal-ink);
}
.emergency-services a {
    color: var(--content-teal);
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;
}
.emergency-services .vet-triage-link {
    display: flex;
    width: min(100%, 500px);
    margin: 0 auto;
    padding: clamp(18px, 2.5vw, 26px);
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border: 2px solid color-mix(in srgb, var(--primary-teal) 55%, transparent);
    border-radius: 18px;
    background: var(--color-white);
    box-shadow: 0 12px 32px var(--overlay-dark-10);
    text-align: center;
    text-decoration: none;
    transition: transform 160ms ease, box-shadow 160ms ease;
}
.vet-triage-link img {
    display: block;
    width: min(100%, 350px);
    height: auto;
}
.vet-triage-link span {
    color: var(--color-slate-blue);
    font-size: clamp(1rem, 2vw, 1.2rem);
    transition: color 160ms ease;
}
.emergency-services .vet-triage-link:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 38px var(--overlay-dark-16);
    color: var(--secondary-orange);
    text-decoration: none;
}
.emergency-services .vet-triage-link:hover span {
    color: var(--secondary-orange);
}
.emergency-services .vet-triage-link:focus-visible {
    outline: 4px solid var(--primary-orange);
    outline-offset: 4px;
}
.emergency-services .vet-triage-instructions {
    display: flex;
    width: fit-content;
    max-width: 100%;
    margin: 4px auto 0;
    padding: 12px 18px;
    align-items: center;
    justify-content: center;
    gap: 9px;
    border-radius: 0.3rem;
    background: var(--button-orange);
    color: var(--color-white);
    font-size: 1rem;
    line-height: 1.35;
    text-align: center;
    text-decoration: none;
}
.emergency-services .vet-triage-instructions:hover {
    background: var(--secondary-orange);
    color: var(--color-white);
}
.emergency-services .vet-triage-instructions:focus-visible {
    outline: 4px solid var(--primary-teal);
    outline-offset: 4px;
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
    color: var(--color-white);
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
