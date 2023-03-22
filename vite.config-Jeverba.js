import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vuetify from "vite-plugin-vuetify"

const Vuetify = vuetify({
  styles: { configFile: 'src/settings.scss' },
  autoImport: true
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), Vuetify,],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      //'@P': fileURLToPath(new URL('./public', import.meta.url)),
    }
  }
})
