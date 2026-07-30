<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['next'])

const form = reactive({
    fullName: '',
    email: '',
    streetAddress: '',
    cityStateZip: '',
    homePhone: '',
    workPhone: '',
    mobilePhone: '',
    previousVet: '',
    message: '',
    emergencyContactName: '',
    emergencyPhone: '',
    financialPolicy: false,
    photoRelease: false
})

const errors = reactive({})

function clearErrors() {
    Object.keys(errors).forEach(key => delete errors[key])
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidPhone(phone) {
    if (!phone.trim()) return true

    const cleaned = phone.replace(/[^\d]/g, '')

    return cleaned.length >= 7 && cleaned.length <= 15
}

function validateForm() {
    clearErrors()

    if (!form.fullName.trim()) {
        errors.fullName = 'This field is required'
    }

    if (!form.email.trim()) {
        errors.email = 'This field is required'
    } else if (!isValidEmail(form.email)) {
        errors.email = 'Please enter a valid email address'
    }

    if (!form.homePhone.trim()) {
        errors.homePhone = 'This field is required'
    } else if (!isValidPhone(form.homePhone)) {
        errors.homePhone = 'Please enter a valid phone number'
    }

    if (
        form.workPhone.trim() &&
        !isValidPhone(form.workPhone)
    ) {
        errors.workPhone = 'Please enter a valid phone number'
    }

    if (
        form.mobilePhone.trim() &&
        !isValidPhone(form.mobilePhone)
    ) {
        errors.mobilePhone = 'Please enter a valid phone number'
    }

    if (
        form.emergencyPhone.trim() &&
        !isValidPhone(form.emergencyPhone)
    ) {
        errors.emergencyPhone = 'Please enter a valid phone number'
    }

    if (!form.message.trim()) {
        errors.message = 'This field is required'
    }

    if (!form.financialPolicy) {
        errors.financialPolicy =
            'You must agree to the financial policy'
    }

    return Object.keys(errors).length === 0
}

function handleNext() {
    if (!validateForm()) {
        return
    }

    emit('next', JSON.parse(JSON.stringify(form)))
}
</script>

<template>
    <section>
        <div class="row">
            <div class="left-section">
                <h1>Your Contact Info</h1>

                <div class="row">
                    <div class="input-column">

                        <div>
                            <div class="input-field">
                                <i class="bi bi-person-circle"></i>
                                <input
                                    v-model="form.fullName"
                                    type="text"
                                    placeholder="Your Full Name"
                                >
                            </div>
                            <p v-if="errors.fullName" class="error-text">
                                {{ errors.fullName }}
                            </p>
                        </div>

                        <div>
                            <div class="input-field">
                                <i class="bi bi-envelope-open-fill"></i>
                                <input
                                    v-model="form.email"
                                    type="email"
                                    placeholder="Your Email Address"
                                >
                            </div>
                            <p v-if="errors.email" class="error-text">
                                {{ errors.email }}
                            </p>
                        </div>

                        <div class="input-field">
                            <i class="bi bi-geo-alt-fill"></i>
                            <input
                                v-model="form.streetAddress"
                                type="text"
                                placeholder="Street Address"
                            >
                        </div>

                        <div class="input-field">
                            <i class="bi bi-geo-alt-fill"></i>
                            <input
                                v-model="form.cityStateZip"
                                type="text"
                                placeholder="City, State & Zip Code"
                            >
                        </div>
                    </div>

                    <div class="input-column">

                        <div>
                            <div class="input-field">
                                <i class="bi bi-telephone-fill"></i>
                                <input
                                    v-model="form.homePhone"
                                    type="tel"
                                    placeholder="Home Phone"
                                >
                            </div>
                            <p v-if="errors.homePhone" class="error-text">
                                {{ errors.homePhone }}
                            </p>
                        </div>

                        <div>
                            <div class="input-field">
                                <i class="bi bi-buildings-fill"></i>
                                <input
                                    v-model="form.workPhone"
                                    type="tel"
                                    placeholder="Work Phone"
                                >
                            </div>
                            <p v-if="errors.workPhone" class="error-text">
                                {{ errors.workPhone }}
                            </p>
                        </div>

                        <div>
                            <div class="input-field">
                                <i class="bi bi-tablet-fill"></i>
                                <input
                                    v-model="form.mobilePhone"
                                    type="tel"
                                    placeholder="Mobile Phone"
                                >
                            </div>
                            <p v-if="errors.mobilePhone" class="error-text">
                                {{ errors.mobilePhone }}
                            </p>
                        </div>
                        

                        <div class="input-field">
                            <i class="bi bi-plus-square-fill"></i>
                            <input
                                v-model="form.previousVet"
                                type="text"
                                placeholder="Previous Veterinarian Name"
                            >
                        </div>
                    </div>
                </div>
            </div>

            <div class="right-section">
                <h1 class="empty-header"></h1>

                <div>
                    <div class="input-field message-box">
                        <i class="bi bi-chat-left-fill"></i>

                        <textarea
                            v-model="form.message"
                            placeholder="Type Your Message Here"
                        ></textarea>
                    </div>

                    <p v-if="errors.message" class="error-text">
                        {{ errors.message }}
                    </p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="left-section">
                <h1>Emergency Contact Info</h1>

                <div class="row">
                    <div class="input-column">
                        <div class="input-field">
                            <i class="bi bi-person-circle"></i>
                            <input
                                v-model="form.emergencyContactName"
                                type="text"
                                placeholder="Emergency Contact Name"
                            >
                        </div>
                    </div>

                    <div class="input-column">
                        <div>
                            <div class="input-field">
                                <i class="bi bi-telephone-fill"></i>
                                <input
                                    v-model="form.emergencyPhone"
                                    type="tel"
                                    placeholder="Emergency Telephone Phone Number"
                                >
                            </div>
                            <p v-if="errors.emergencyPhone" class="error-text">
                                {{ errors.emergencyPhone }}
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div class="right-section"></div>
        </div>

        <div class="row">
            <div class="left-section">
                <h1>Financial Policy</h1>

                <p>
                    Payment is due at the time services are rendered. You are
                    responsible for all charges incurred, understand that a
                    deposit may be required for hospitalization and/or treatment
                    and agree to pay for all services and fees. Cash, local
                    authorized checks, major credit/debit cards and Care Credit
                    are accepted. A minimum of $20.00 will be charged for any
                    returned checks. We do not provide credit or delayed billing
                    of any sort. We kindly request 24 hours’ notice to
                    reschedule appointments. No call/No Show and short notice
                    cancellations may incur a fee of up to $50.
                </p>

                <div class="checkbox-field">
                    <div
                        class="square"
                        :class="{ active: form.financialPolicy }"
                        @click="form.financialPolicy = !form.financialPolicy"
                    >
                        <i class="bi bi-check2"></i>
                    </div>

                    <p>
                        I have read and agree to the financial policy
                    </p>
                </div>

                <p
                    v-if="errors.financialPolicy"
                    class="error-text"
                >
                    {{ errors.financialPolicy }}
                </p>
            </div>

            <div class="right-section">
                <h1>Social Media / Photo Release (optional)</h1>

                <p>
                    Please sign below if you agree to allow your pet’s photo to
                    be shown on Little Friends Veterinary Services, PLLC website
                    or social media (Facebook, etc.).
                </p>

                <div class="checkbox-field">
                    <div
                        class="square"
                        :class="{ active: form.photoRelease }"
                        @click="form.photoRelease = !form.photoRelease"
                    >
                        <i class="bi bi-check2"></i>
                    </div>

                    <p>
                        Yes, you may use my pet's photo.
                    </p>
                </div>
            </div>
        </div>

        <div class="buttons">
            <div
                class="btn btn-red"
                @click="handleNext"
            >
                Next
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    max-width: 1400px;
    padding: 70px 30px;
    margin: auto;
}

.row {
    display: flex;
    gap: 30px;
}

.input-column {
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex: 1;
}

.row > div {
    display: flex;
    flex-direction: column;
}

.left-section {
    flex: 2;
}

.right-section {
    flex: 1;
}

h1 {
    height: 100px;
    display: inline-flex;
    align-items: center;
    font-size: 24px;
    font-weight: 300;
}

.input-field textarea {
    flex: 0;
    min-height: 125.5px;
    max-height: 400px;
}

.checkbox-field {
    margin: 20px 0;
    height: 80px;
    display: inline-flex;
    align-items: center;
    outline: 1px solid #606060a0;
    padding: 0 14px;
    gap: 14px;
    color: #606060a0;
    font-weight: 900;
    font-size: 13px;
}

.checkbox-field .square {
    width: 30px;
    height: 30px;
    background: #e5e5e5;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.checkbox-field .square i {
    font-size: 25px;
    color: white;
    display: none;
}

.checkbox-field .square:hover {
    outline: 2px solid var(--primary-red);
    cursor: pointer;
}

.checkbox-field .square.active {
    background: var(--primary-red);
    outline: 2px solid var(--primary-red);
}

.checkbox-field .square.active i {
    display: flex;
}

.buttons {
    display: flex;
    justify-content: end;
}

.btn-red {
    font-size: 12px;
    font-weight: 200;
    cursor: pointer;
}

.btn-red:hover {
    background: #111;
}

.error-text {
    margin-top: 6px;
    color: #d32f2f;
    font-size: 12px;
    font-weight: 500;
}

@media screen and (max-width: 960px) {
    .row {
        flex-direction: column;
    }

    .empty-header {
        display: none;
    }
}
</style>