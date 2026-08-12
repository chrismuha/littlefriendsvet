<script setup>
import { ref } from 'vue'

// import ContactUs from '@/components/ContactUs.vue'
import FooterSection from '@/components/FooterSection.vue'
import ClientForm from '@/components/intake/ClientForm.vue'
import ClientFormStep2 from '@/components/intake/ClientFormStep2.vue'
import HomeButton from '@/components/intake/HomeButton.vue'
import IntakeHeader from '@/components/intake/IntakeHeader.vue'

const currentStep = ref(1)

const step1Data = ref({})
const step2Data = ref([])

function prettifyKey(key) {
    return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, char => char.toUpperCase())
}

function goBackToStep1() {
    currentStep.value = 1
}

function handleStep1Next(data) {
    step1Data.value = data
    currentStep.value = 2
}

function submitIntakeForm(data) {
    step2Data.value = data

    console.clear()

    console.log('========================================')
    console.log('          INTAKE FORM SUBMISSION')
    console.log('========================================')

    console.log('\nCLIENT INFORMATION\n')

    Object.entries(step1Data.value).forEach(([key, value]) => {
        console.log(`${prettifyKey(key)}:`, value)
    })

    console.log('\nPET INFORMATION\n')

    step2Data.value.forEach((pet, index) => {
        const hasData = Object.values(pet).some(value => {
            if (typeof value === 'string') {
                return value.trim() !== ''
            }

            return value !== null
        })

        if (!hasData) {
            return
        }

        console.log(`PET ${index + 1}`)

        Object.entries(pet).forEach(([key, value]) => {
            console.log(`${prettifyKey(key)}:`, value)
        })

        console.log('')
    })

    console.log('========================================')
    console.log('SUCCESS!')
    console.log('========================================')
}
</script>

<template>
    <HomeButton />

    <IntakeHeader />

    <ClientForm
        v-show="currentStep === 1"
        @next="handleStep1Next"
    />

    <ClientFormStep2
        v-show="currentStep === 2"
        @back="goBackToStep1"
        @submit="submitIntakeForm"
    />

    <!-- <ContactUs /> -->

    <FooterSection />
</template>
