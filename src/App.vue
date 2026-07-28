<script setup>
import { useRoute } from 'vue-router';
import BackToTop from './components/BackToTop.vue';

const route = useRoute();
</script>

<template>
  <router-view />

  <BackToTop v-if="route.name !== 'not-found'" />
</template>

<style scoped></style>
