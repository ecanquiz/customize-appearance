<script setup lang="ts">
import useStylePanel from '@/composables/useStylePanel';
import type { StylePanelProps, StylePanelEmits } from '@/types/styles';

const props = defineProps<StylePanelProps>();
const emits = defineEmits<StylePanelEmits>();

const {
  localStyles,

  resetStyles,
  updateStyles,
  validateColor
} = useStylePanel(props, emits);
</script>

<template>
  <div class="style-panel">
    <h2>Personalización de estilos</h2>
    
    <div class="form-group">
      <label>Color de fondo:</label>
      <input type="color" v-model="localStyles.backgroundColor" @input="updateStyles">
      <input type="text" v-model="localStyles.backgroundColor" @change="validateColor('backgroundColor')">
    </div>
    
    <div class="form-group">
      <label>Color de texto:</label>
      <input type="color" v-model="localStyles.textColor" @input="updateStyles">
      <input type="text" v-model="localStyles.textColor" @change="validateColor('textColor')">
    </div>
    
    <div class="form-group">
      <label>Color principal:</label>
      <input type="color" v-model="localStyles.primaryColor" @input="updateStyles">
      <input type="text" v-model="localStyles.primaryColor" @change="validateColor('primaryColor')">
    </div>
    
    <div class="form-group">
      <label>Color de títulos:</label>
      <input type="color" v-model="localStyles.titleColor" @input="updateStyles">
      <input type="text" v-model="localStyles.titleColor" @change="validateColor('titleColor')">
    </div>
    
    <div class="form-group">
      <label>Fondo del header:</label>
      <input type="color" v-model="localStyles.headerBackground" @input="updateStyles">
      <input type="text" v-model="localStyles.headerBackground" @change="validateColor('headerBackground')">
    </div>
    
    <div class="form-group">
      <label>Fondo del footer:</label>
      <input type="color" v-model="localStyles.footerBackground" @input="updateStyles">
      <input type="text" v-model="localStyles.footerBackground" @change="validateColor('footerBackground')">
    </div>
    
    <button @click="resetStyles">Restablecer valores por defecto</button>
  </div>
</template>

<style scoped>
@import '@/assets/styles/stylePanel.css';
</style>