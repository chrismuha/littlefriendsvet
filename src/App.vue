<script setup>
import { useRoute } from 'vue-router';
import BackToTop from './components/BackToTop.vue';

import { onMounted } from 'vue';
import { initPhotoGridLightbox } from '@/utils/photoGridLightbox.js';

const route = useRoute();

onMounted(() => initPhotoGridLightbox());
</script>

<template>
  <router-view />

  <BackToTop v-if="route.name !== 'not-found'" />
</template>

<style scoped></style>
