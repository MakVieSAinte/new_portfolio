<script setup lang="ts">
import { RouterView } from 'vue-router'
import LoadingScreen from './components/LoadingScreen.vue'
</script>

<template>
  <div>
    <LoadingScreen style="z-index: 999999999999999999999999999px !important" />
    <RouterView />
  </div>
</template>

<style scoped></style>
