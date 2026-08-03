<script setup>
import { useRoute } from 'vue-router';
import BackToTop from './components/BackToTop.vue';
import ThemeToggle from './components/ThemeToggle.vue';

import { onMounted } from 'vue';
import { initPhotoGridLightbox } from '@/utils/photoGridLightbox.js';

const route = useRoute();

onMounted(() => initPhotoGridLightbox());
</script>

<template>
  <main>
    <router-view />
  </main>

  <BackToTop v-if="route.name !== 'not-found'" />
  <ThemeToggle v-if="route.name !== 'not-found'" />
</template>

<style scoped></style>
