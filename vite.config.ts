/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/customize-appearance/' : '/',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: [
        /\/__tests__\//,
        /\/__mocks__\//,
        /\.spec\.ts$/,
        /\.test\.ts$/
      ]
    }
  },
  test: {
    include: ['**/__tests__/**/*.spec.ts'],
    exclude: ['node_modules', 'dist'],
    globals: true,
    environment: 'jsdom',
    coverage: {
      exclude: [
        '**/__mocks__/**',
        '**/__tests__/**',
        '**/*.d.ts'
      ],
      reporter: ['text', 'json', 'html']
    }
  }
})
