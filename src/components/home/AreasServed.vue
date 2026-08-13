<template>
    <section class="areas-section" aria-labelledby="areas-served-title">
        <div class="areas-container">
            <header class="areas-intro">
                <p class="eyebrow">Local care, close to home</p>
                <h2 id="areas-served-title">Areas Served</h2>
                <p class="intro-copy">
                    Little Friends provides veterinary care for pets and families in the
                    communities surrounding Lyons Falls and beyond.
                </p>
            </header>

            <div class="coverage-card">
                <div class="coverage-heading">
                    <span class="coverage-icon" aria-hidden="true">
                        <i class="bi bi-geo-alt-fill"></i>
                    </span>
                    <div>
                        <h3>Our service area</h3>
                        <p>Serving pets and their people in these nearby communities.</p>
                    </div>
                </div>

                <ul class="location-list" aria-label="Communities served">
                    <li v-for="location in locations" :key="location">
                        <i class="bi bi-check2" aria-hidden="true"></i>
                        <span>{{ location }}</span>
                    </li>
                </ul>
            </div>

            <div class="contact-card">
                <div class="contact-copy">
                    <p class="eyebrow">Plan your visit</p>
                    <h3>Appointments are by reservation</h3>
                    <p>
                        Call, text, or email to ask about availability. Emergency consultations
                        may be available depending on the schedule.
                    </p>
                </div>

                <address class="contact-actions">
                    <a class="contact-action" href="tel:+13157960907">
                        <i class="bi bi-telephone-fill" aria-hidden="true"></i>
                        <span>
                            <small>Call</small>
                            315-796-0907
                        </span>
                    </a>
                    <a class="contact-action" href="sms:+18555534416">
                        <i class="bi bi-chat-dots-fill" aria-hidden="true"></i>
                        <span>
                            <small>Text</small>
                            855-553-4416
                        </span>
                    </a>
                    <a class="contact-action contact-action-wide" href="mailto:info@littlefriendsvet.com">
                        <i class="bi bi-envelope-fill" aria-hidden="true"></i>
                        <span>
                            <small>Email</small>
                            info@littlefriendsvet.com
                        </span>
                    </a>
                </address>

                <p class="mailing-address">
                    <i class="bi bi-mailbox" aria-hidden="true"></i>
                    <span class="mailing-address-copy">
                        <strong>Mailing address</strong>
                        <span>PO Box 437</span>
                        <span>Lyons Falls, NY 13368</span>
                    </span>
                </p>
            </div>

            <aside class="emergency-card" aria-labelledby="emergency-care-title">
                <div class="emergency-icon" aria-hidden="true">
                    <i class="bi bi-hospital"></i>
                </div>
                <div class="emergency-copy">
                    <h3 id="emergency-care-title">Need surgical emergency care?</h3>
                    <p>
                        When Little Friends is unavailable, contact the Veterinary Medical Center
                        of Central New York.
                    </p>
                </div>
                <div class="emergency-actions">
                    <a href="tel:+13154467933">
                        <i class="bi bi-telephone" aria-hidden="true"></i>
                        315-446-7933
                    </a>
                    <a href="https://www.vmccny.com" target="_blank" rel="noopener noreferrer">
                        Visit VMCCNY
                        <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i>
                        <span class="sr-only"> (opens in a new tab)</span>
                    </a>
                </div>
            </aside>
        </div>
    </section>
</template>

<script setup>
const locations = [
    'Lyons Falls area',
    'Boonville area',
    'Lowville area',
    'Brantingham area',
    'Old Forge area',
]
</script>

<style scoped>
.areas-section {
    position: relative;
    overflow: hidden;
    padding: clamp(70px, 9vw, 120px) 30px;
    background:
        radial-gradient(circle at 92% 8%, rgba(22, 162, 162, 0.17), transparent 30rem),
        var(--section-background);
}

.areas-section::before {
    content: '';
    position: absolute;
    top: -140px;
    right: -110px;
    width: 340px;
    height: 340px;
    border: 54px solid rgba(22, 162, 162, 0.08);
    border-radius: 50%;
    pointer-events: none;
}

.areas-container {
    position: relative;
    max-width: 1180px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(480px, 1.2fr);
    gap: 36px;
}

.areas-intro {
    align-self: center;
    padding: 20px 18px 20px 0;
}

.eyebrow {
    margin: 0 0 10px;
    color: var(--content-teal);
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

.areas-intro h2 {
    margin: 0;
    color: var(--heading-text);
    font-size: clamp(3rem, 7vw, 5.5rem);
    font-weight: 500;
    line-height: 0.98;
}

.intro-copy {
    max-width: 560px;
    margin: 24px 0 0;
    color: var(--page-text);
    font-size: clamp(1.05rem, 2vw, 1.25rem);
    line-height: 1.65;
}

.coverage-card,
.contact-card,
.emergency-card {
    border: 1px solid rgba(22, 162, 162, 0.2);
    border-radius: 1.5rem;
    background: var(--surface-background);
    box-shadow: 0 18px 50px rgba(3, 48, 48, 0.1);
}

.coverage-card {
    padding: clamp(28px, 4vw, 42px);
}

.coverage-heading {
    display: flex;
    align-items: center;
    gap: 18px;
}

.coverage-icon {
    display: grid;
    flex: 0 0 auto;
    width: 64px;
    height: 64px;
    place-items: center;
    border-radius: 50%;
    background: var(--primary-teal);
    color: white;
    font-size: 28px;
}

.coverage-heading h3,
.contact-card h3,
.emergency-card h3 {
    margin: 0;
    color: var(--heading-text);
    font-size: clamp(1.4rem, 2.6vw, 1.85rem);
    line-height: 1.2;
}

.coverage-heading p {
    margin: 7px 0 0;
    line-height: 1.5;
}

.location-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    margin: 28px 0 0;
    padding: 0;
    list-style: none;
}

.location-list li {
    display: flex;
    align-items: center;
    gap: 11px;
    min-height: 52px;
    padding: 12px 16px;
    border-radius: 0.8rem;
    background: color-mix(in srgb, var(--primary-teal) 9%, transparent);
    color: var(--heading-text);
    font-weight: 700;
}

.location-list li:last-child:nth-child(odd) {
    grid-column: 1 / -1;
}

.location-list i {
    color: var(--content-teal);
    font-size: 1.25rem;
}

.contact-card {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: minmax(260px, 0.8fr) minmax(420px, 1.2fr);
    gap: 34px;
    padding: clamp(30px, 5vw, 52px);
}

.contact-copy {
    align-self: center;
}

.contact-copy > p:last-child {
    margin: 14px 0 0;
    color: var(--content-text);
    font-weight: 600;
    line-height: 1.6;
}

.contact-actions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    margin: 0;
    font-style: normal;
}

.contact-action {
    display: flex;
    align-items: center;
    gap: 13px;
    min-width: 0;
    min-height: 72px;
    padding: 14px 16px;
    border: 2px solid transparent;
    border-radius: 0.85rem;
    background: var(--primary-teal);
    color: white;
    font-size: clamp(0.88rem, 1.8vw, 1.05rem);
    font-weight: 800;
    line-height: 1.25;
    text-decoration: none;
    transition: transform 0.2s ease, background-color 0.2s ease;
}

.contact-action:hover {
    background: var(--button-orange);
    color: white;
    transform: translateY(-2px);
}

.contact-action:focus-visible,
.emergency-actions a:focus-visible {
    outline: 3px solid var(--primary-orange);
    outline-offset: 3px;
}

.contact-action > i {
    flex: 0 0 auto;
    font-size: 1.35rem;
}

.contact-action span {
    min-width: 0;
    overflow-wrap: anywhere;
}

.contact-action small {
    display: block;
    margin-bottom: 3px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.contact-action-wide {
    grid-column: 1 / -1;
}

.mailing-address {
    grid-column: 2;
    display: flex;
    align-items: flex-start;
    gap: 11px;
    margin: -18px 0 0;
    color: var(--page-text);
    font-size: 0.95rem;
    font-weight: 700;
}

.mailing-address i {
    margin-top: 2px;
    color: var(--content-teal);
    font-size: 1.2rem;
}

.mailing-address-copy {
    display: grid;
    gap: 1px;
    line-height: 1.2;
}

.mailing-address strong {
    display: block;
    color: var(--heading-text);
}

.mailing-address-copy > span {
    display: block;
    white-space: nowrap;
}

.emergency-card {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: 22px;
    padding: 26px 30px;
    border-color: color-mix(in srgb, var(--primary-orange) 45%, transparent);
}

.emergency-icon {
    display: grid;
    width: 54px;
    height: 54px;
    place-items: center;
    border-radius: 0.8rem;
    background: color-mix(in srgb, var(--primary-orange) 16%, transparent);
    color: var(--secondary-orange);
    font-size: 26px;
}

.emergency-copy p {
    margin: 6px 0 0;
    line-height: 1.5;
}

.emergency-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.emergency-actions a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    padding: 10px 14px;
    border: 1px solid color-mix(in srgb, var(--content-teal) 45%, transparent);
    border-radius: 0.65rem;
    color: var(--content-teal);
    font-weight: 800;
    text-decoration: none;
}

.emergency-actions a:hover {
    background: color-mix(in srgb, var(--primary-teal) 10%, transparent);
    color: var(--content-teal);
}

@media (max-width: 960px) {
    .areas-container {
        grid-template-columns: 1fr;
    }

    .areas-intro {
        padding-right: 0;
        text-align: center;
    }

    .intro-copy {
        margin-right: auto;
        margin-left: auto;
    }

    .contact-card {
        grid-template-columns: 1fr;
    }

    .mailing-address {
        grid-column: 1;
        margin-top: -12px;
    }

    .emergency-card {
        grid-template-columns: auto 1fr;
    }

    .emergency-actions {
        grid-column: 1 / -1;
        padding-left: 76px;
    }
}

@media (max-width: 600px) {
    .areas-section {
        padding: 64px 18px;
    }

    .coverage-card,
    .contact-card {
        border-radius: 1.1rem;
    }

    .coverage-heading {
        align-items: flex-start;
    }

    .coverage-icon {
        width: 52px;
        height: 52px;
        font-size: 23px;
    }

    .location-list,
    .contact-actions {
        grid-template-columns: 1fr;
    }

    .location-list li:last-child:nth-child(odd),
    .contact-action-wide {
        grid-column: auto;
    }

    .emergency-card {
        grid-template-columns: 1fr;
        padding: 24px;
    }

    .emergency-actions {
        grid-column: auto;
        flex-direction: column;
        align-items: stretch;
        padding-left: 0;
    }

    .emergency-actions a {
        justify-content: center;
    }
}

@media (prefers-reduced-motion: reduce) {
    .contact-action {
        transition: none;
    }
}
</style>
