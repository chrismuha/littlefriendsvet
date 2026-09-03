<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['back', 'submit'])

const pets = reactive([
    {
        name: '',
        species: '',
        sex: null,
        spayedNeutered: null,
        birthdayAge: '',
        breed: '',
        color: ''
    },
    {
        name: '',
        species: '',
        sex: null,
        spayedNeutered: null,
        birthdayAge: '',
        breed: '',
        color: ''
    },
    {
        name: '',
        species: '',
        sex: null,
        spayedNeutered: null,
        birthdayAge: '',
        breed: '',
        color: ''
    },
    {
        name: '',
        species: '',
        sex: null,
        spayedNeutered: null,
        birthdayAge: '',
        breed: '',
        color: ''
    }
])

const errors = reactive({})

function clearErrors() {
    Object.keys(errors).forEach(key => delete errors[key])
}

function petHasData(pet) {
    return (
        pet.name.trim() ||
        pet.species.trim() ||
        pet.sex !== null ||
        pet.spayedNeutered !== null ||
        pet.birthdayAge.trim() ||
        pet.breed.trim() ||
        pet.color.trim()
    )
}

function validateForm() {
    clearErrors()

    // First pet is always required
    if (!pets[0].name.trim()) {
        errors['name-0'] = 'This field is required'
    }

    if (!pets[0].species.trim()) {
        errors['species-0'] = 'This field is required'
    }

    // Pets 2-4 become required if anything in that pet section is filled
    for (let i = 1; i < pets.length; i++) {
        const pet = pets[i]

        if (!petHasData(pet)) {
            continue
        }

        if (!pet.name.trim()) {
            errors[`name-${i}`] = 'This field is required'
        }

        if (!pet.species.trim()) {
            errors[`species-${i}`] = 'This field is required'
        }
    }

    return Object.keys(errors).length === 0
}

function toggleRadio(pet, field, value) {
    pet[field] = pet[field] === value
        ? null
        : value
}

function submitForm() {
    if (!validateForm()) {
        return
    }

    emit('submit', JSON.parse(JSON.stringify(pets)))
}
function goBack() {
    emit('back')
}
</script>

<template>
    <section>
        <div class="pet-grid">

            <div
                v-for="(pet, index) in pets"
                :key="index"
                class="pet-column"
            >
                <h1>
                    Your {{ index + 1 }}<span v-if="index === 0">st </span><span v-else-if="index === 1">nd </span><span v-else-if="index === 2">rd </span><span v-else>th </span>&nbsp;Pet
                </h1>

                <div>
                    <div class="input-field">
                        <input
                            v-model="pet.name"
                            type="text"
                            placeholder="Pet Name"
                        >
                    </div>

                    <p
                        v-if="errors[`name-${index}`]"
                        class="error-text"
                    >
                        {{ errors[`name-${index}`] }}
                    </p>
                </div>

                <div>
                    <div class="input-field">
                        <input
                            v-model="pet.species"
                            type="text"
                            placeholder="Species (Dog/Cat/etc.)"
                        >
                    </div>

                    <p
                        v-if="errors[`species-${index}`]"
                        class="error-text"
                    >
                        {{ errors[`species-${index}`] }}
                    </p>
                </div>

                <div class="radio-group">
                    <p class="radio-label">
                        Sex?
                    </p>

                    <div class="radio-options">
                        <div
                            class="radio-option"
                            @click="toggleRadio(pet, 'sex', 'male')"
                        >
                            <div
                                class="radio-circle"
                                :class="{ active: pet.sex === 'male' }"
                            ></div>

                            <span>Male</span>
                        </div>

                        <div
                            class="radio-option"
                            @click="toggleRadio(pet, 'sex', 'female')"
                        >
                            <div
                                class="radio-circle"
                                :class="{ active: pet.sex === 'female' }"
                            ></div>

                            <span>Female</span>
                        </div>
                    </div>
                </div>

                <div class="radio-group">
                    <p class="radio-label">
                        Spayed / Neutered?
                    </p>

                    <div class="radio-options">
                        <div
                            class="radio-option"
                            @click="toggleRadio(pet, 'spayedNeutered', true)"
                        >
                            <div
                                class="radio-circle"
                                :class="{ active: pet.spayedNeutered === true }"
                            ></div>

                            <span>Yes</span>
                        </div>

                        <div
                            class="radio-option"
                            @click="toggleRadio(pet, 'spayedNeutered', false)"
                        >
                            <div
                                class="radio-circle"
                                :class="{ active: pet.spayedNeutered === false }"
                            ></div>

                            <span>No</span>
                        </div>
                    </div>
                </div>

                <div class="input-field">
                    <input
                        v-model="pet.birthdayAge"
                        type="text"
                        placeholder="Birthday / Age"
                    >
                </div>

                <div class="input-field">
                    <input
                        v-model="pet.breed"
                        type="text"
                        placeholder="Breed"
                    >
                </div>

                <div class="input-field">
                    <input
                        v-model="pet.color"
                        type="text"
                        placeholder="Color"
                    >
                </div>
            </div>
        </div>

        <div class="buttons">
            <div
                class="btn btn-orange"
                @click="goBack"
            >
                Back
            </div>

            <div
                class="btn btn-red"
                @click="submitForm"
            >
                Submit Intake Form
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    max-width: 1400px;
    margin: auto;
    padding: 70px 30px;
}

.input-field input {
    padding-left: 14px;
}

.pet-grid {
    display: flex;
    gap: 30px;
}

.pet-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

h1 {
    height: 100px;
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
}

.radio-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.radio-label {
    font-size: 13px;
    font-weight: 700;
    color: var(--color-field-text);
}

.radio-options {
    display: flex;
    gap: 20px;
}

.radio-option {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    user-select: none;
}

.radio-option span {
    font-size: 13px;
}

.radio-circle {
    width: 22px;
    height: 22px;
    border-radius: 999px;
    background: var(--separator-color);
    border: 2px solid transparent;
    transition: 0.2s;
}

.radio-circle:hover {
    border-color: var(--primary-red);
}

.radio-circle.active {
    background: var(--primary-red);
    border-color: var(--primary-red);
}

.buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
}


.btn {
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
}

.btn:hover {
    background: var(--color-ink);
}

.error-text {
    margin-top: 6px;
    color: var(--color-error);
    font-size: 12px;
    font-weight: 500;
}

@media screen and (max-width: 770px) {
    .pet-grid {
        flex-direction: column;
    }

    h1 {
        height: auto;
        min-height: 70px;
    }
}
</style>
