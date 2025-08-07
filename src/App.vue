<script setup lang="ts">
import StylePanel from './components/StylePanel.vue';
import PreviewLayout from './components/PreviewLayout.vue';
import useApp from './composables/useApp';

const {
  currentStyles,

  handleStyleUpdate
} = useApp();
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

