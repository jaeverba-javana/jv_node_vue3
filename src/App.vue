<script setup>
//import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue";
import HomeView from "@/views/HomeView.vue";
</script>

<template>
  <div id="HeaderTemplateContainer">
    <Header />
  </div>

  <div class="main-container-general">
    <main><HomeView></HomeView></main>
  </div>

  <hr>

  <div id="FooterTemplateContainer"><Footer /></div>

  <!--RouterView /-->
</template>

<style lang="sass">
/* --- --- --- --- MAIN - START --- --- --- --- */
#app
  min-height: 100vh

#HeaderTemplateContainer
  height: 100vh

.main-container-general
  display: flex
  width: 100%
  justify-content: center
  background-color: var(--md-sys-color-background)

  > *
    width: 100%
    max-width: 1150px
    background-color: var(--md-sys-color-surface)
    display: flex
    flex-direction: column
    row-gap: 50px
    margin: 50px 0

hr
  background-color: var(--md-sys-color-primary-container)
  border: 0
  height: 5px

/* --- --- --- --- MAIN - END --- --- --- --- */
</style>
