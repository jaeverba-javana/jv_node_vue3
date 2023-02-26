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
    <span></span>
    <main><HomeView></HomeView></main>
    <span></span>
  </div>

  <hr>

  <div id="FooterTemplateContainer"><Footer /></div>

  <!--RouterView /-->
</template>

<style lang="sass">
/* --- --- --- --- MAIN - START --- --- --- --- */
#app
  min-height: 100vh
  background-color: var(--md-sys-color-background)

#HeaderTemplateContainer
  height: 100vh
  //min-height: 830px
  max-height: calc(calc(60vw * 0.9) + 75px)

  @media (max-width: 500px)
    max-height: calc(calc(60vw * 0.8) + 105px)

.main-container-general
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  justify-content: center
  background-color: var(--md-sys-color-surface-variant)
  //margin: 50px 0

  > span
    height: 50px

  > *
    width: 100%
    max-width: 1150px
    background-color: var(--md-sys-color-surface)
    display: flex
    flex-direction: column
    row-gap: 50px
    //margin: 50px 0

hr
  background-color: var(--md-sys-color-primary-container)
  border: 0
  height: 5px

#FooterTemplateContainer
  position: absolute
  width: 100%


/* --- --- --- --- MAIN - END --- --- --- --- */
</style>
