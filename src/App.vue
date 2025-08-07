<script setup lang="ts">
import { onMounted } from 'vue';
import StylePanel from './components/StylePanel.vue';
import PreviewLayout from './components/PreviewLayout.vue';
import useApp from './composables/useApp';

const {
  currentStyles,

  handleStyleUpdate,
  loadSavedStyles
} = useApp();

onMounted(loadSavedStyles);
</script>

<template>
  <div class="app-container">
    <StylePanel 
      :styles="currentStyles" 
      @update-styles="handleStyleUpdate"
    />
    <PreviewLayout :styles="currentStyles" />
  </div>
</template>

<style>
@import '@/assets/styles/app.css';
</style>

