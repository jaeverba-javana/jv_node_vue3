<script>
import { RouterLink, RouterView } from 'vue-router'
import {useTheme} from "vuetify";

export default {
  data() {return {

  }},

  beforeMount() {
    this.theme = useTheme()

    if (localStorage.getItem('theme') === 'dark') {
      this.theme.global.name.value = 'darkTheme'
    } else this.theme.global.name.value = 'lightTheme'
  },

  mounted() {
  }
}
</script>

<template>
  <v-app full-height>
    <RouterView />
  </v-app>
</template>

<style lang="sass">
/* --- --- --- --- MAIN - START --- --- --- --- */
#app
  min-height: 100vh
  background-color: var(--md-sys-color-background)

/* --- --- --- --- MAIN - END --- --- --- --- */
</style>
