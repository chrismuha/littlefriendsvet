<template>
    <section>
        <div class="left-section teal-bg">
            <img src="@/assets/images/LittleFriendsOnWheelsLogo-approved.webp" alt="Little Friends on Wheels">
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
input, textarea {
    font-weight: 900;
    color: #999999a0;
    outline: 1px solid #999999a0;
}
input::placeholder, textarea::placeholder {
    color: #999999a0;
}
input:focus, textarea:focus {
    outline: 2px solid #983049;
}
.separator {
    width: 2px;
    height: 100;
    background: #e5e5e5;
}
.left-section, .right-section {
    width: 100%;
}
.left-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.left-section img {
    width: 100%;
}
.right-section h1 {
    text-align: center;
    margin: auto;
    font-weight: 300;
    color: #333;
    font-size: 2rem;
}
.input-field {
    position: relative;
}
.input-field i {
    position: absolute;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
    pointer-events: none;
    color: #999999a0;
}
.message-box {
    flex-grow: 1;
}
.message-box i {
    top: 26px;
}
.input-field input, .input-field textarea {
    padding: 14px;
    padding-left: 54px;
    width: 100%;
    height: auto;
    max-height: 300px;
}
.input-field textarea {
    resize: vertical;
    min-height: 100%;
}

.btn-orange {
    color: white;
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