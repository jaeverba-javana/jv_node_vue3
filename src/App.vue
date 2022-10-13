<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div id="HeaderTemplateContainer" class="mdc-theme--background">
    <Header />
  </div>

  <div id="FooterTemplateContainer"><Footer /></div>

  <!--RouterView /-->
</template>

<style lang="sass">
/* --- --- --- --- MAIN - START --- --- --- --- */
#app
  min-height: 100vh

#HeaderTemplateContainer
  height: 100vh
/* --- --- --- --- MAIN - END --- --- --- --- */
</style>
