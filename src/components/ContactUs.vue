<template>
    <section>
        <div class="left-section teal-bg">
            <img src="@/assets/images/LittleFriendsOnWheelsLogo-approved.webp" alt="Little Friends on Wheels" loading="lazy" decoding="async">
        </div>
        <div class="separator"></div>
        <div class="right-section">
            <div class="header">
                <h1 class="heading-line">Contact Us</h1>
            </div>
            <div class="form">
                <div class="row">
                    <div class="left">
                        <div class="input-field">
                            <i class="bi bi-person-circle"></i>
                            <input type="text" name="2" placeholder="Your Name" data-default="" value="" required>
                        </div>
                        <div class="input-field">
                            <i class="bi bi-envelope-open-fill"></i>
                            <input type="email" name="3" placeholder="Your Email Address" data-default="" value="" required data-validation="email">
                        </div>
                        <div class="input-field">
                            <i class="bi bi-telephone-fill"></i>
                            <input type="text" name="4" placeholder="Phone Number" data-default="" value="" required>
                        </div>
                    </div>
                    <div class="right">
                        <div class="input-field">
                            <i class="bi bi-emoji-laughing-fill"></i>
                            <input type="text" name="5" placeholder="Pet's Name &amp; Type" data-default="" value="">
                        </div>
                        <div class="input-field message-box">
                            <i class="bi bi-chat-left-fill"></i>
                            <textarea name="6" placeholder="Type Your Message Here" data-default="" value="" required></textarea>
                        </div>
                    </div>
                </div>
                <input type="submit" value="Send Message" class="btn btn-orange">
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    display: flex;
    max-width: 1400px;
    margin: auto;
    gap: 30px;
    min-height: 500px;
    padding: 70px 30px;
    font-size: 13px;
    align-items: stretch;
}
.header {
    padding: 0px;
    min-height: fit-content;
    padding-bottom: 20px;
}
.form .row {
    gap: 20px;
}
.form .row > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.separator {
    width: 2px;
    align-self: stretch;
    background: var(--separator-color);
}
.left-section, .right-section {
    width: 100%;
}
.left-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--bright-teal);
}
.left-section img {
    width: 100%;
}
.right-section h1 {
    text-align: center;
    margin: auto;
    font-weight: 500;
    color: var(--heading-text);
    font-size: 2rem;
}


.btn-orange {
    background: var(--button-orange);
    color: var(--color-white);
    margin-top: 50px;
    cursor: pointer;
    font-size: 16px;
}
.row > div {
    flex: 1;
}

@media screen and (max-width: 960px) {
    section {
        flex-direction: column;
        padding: 40px 15px;
    }
    .separator {
        width: 100%;
        height: 2px;
    }
}
@media screen and (max-width: 590px) {
    section {
        flex-direction: column;
        padding: 40px 15px;
    }
    .row {
        flex-direction: column;
    }
    .input-field textarea {
        min-height: 100px;
    }
}
</style>
