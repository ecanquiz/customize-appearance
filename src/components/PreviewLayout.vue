<script setup lang="ts">
import { getContrastColor } from '@/utils/colors'
import type { Styles } from '@/types/styles'

const props = defineProps<{ styles: Styles }>();
</script>

<template>
  <div 
    class="preview-layout" 
    :style="{
      backgroundColor: styles.backgroundColor,
      color: styles.textColor
    }"
  >
    <header 
      class="preview-header"
      :style="{ backgroundColor: styles.headerBackground }"
    >
      <h1 :style="{ color: styles.primaryColor }">Mi Sitio Web</h1>
      <nav>
        <a href="#" :style="{ color: styles.primaryColor }">Inicio</a>
        <a href="#" :style="{ color: styles.primaryColor }">Acerca de</a>
        <a href="#" :style="{ color: styles.primaryColor }">Contacto</a>
      </nav>
    </header>
    
    <main class="preview-content">
      <article>
        <h2 :style="{ color: styles.titleColor }">Artículo Principal</h2>
        <p>Este es un ejemplo de contenido que puede ser personalizado según las preferencias del usuario.</p>
        <button 
          class="primary-button"
          :style="{
            backgroundColor: styles.primaryColor,
            color: getContrastColor(styles.primaryColor)
          }"
        >
          Botón de ejemplo
        </button>
      </article>
      
      <aside>
        <h3 :style="{ color: styles.titleColor }">Barra lateral</h3>
        <p>Contenido adicional que complementa el artículo principal.</p>
      </aside>
    </main>
    
    <footer 
      class="preview-footer"
      :style="{ backgroundColor: styles.footerBackground }"
    >
      <p :style="{ color: styles.primaryColor }">© 2025 Mi Sitio Web</p>
    </footer>
  </div>
</template>

<style scoped>
@import '@/assets/styles/previewLayout.css';
</style>