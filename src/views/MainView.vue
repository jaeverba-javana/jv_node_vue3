<template>

  <div id="HeaderTemplateContainer">
    <Header/>
  </div>

  <div class="main-container-general">
    <main>
      <HomeView></HomeView>
    </main>
  </div>

  <hr>

  <div id="FooterTemplateContainer">
    <Footer/>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HomeView from "@/views/HomeView.vue";
</script>

<style lang="sass" scoped>

#HeaderTemplateContainer
  height: 100vh
  //min-height: 830px
  max-height: calc(calc(60vw * 0.9) + 75px)

  @media (min-width: 1328px)
    max-height: 792.115px

  @media (max-width: 500px)
    max-height: calc(calc(60vw * 0.8) + 105px)

.main-container-general
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  justify-content: center
  background-color: var(--md-sys-color-surface-variant)

  > main
    padding: 50px 20px

  > span
    height: 50px

  > *
    width: 100%
    max-width: 1150px
    background-color: var(--md-sys-color-surface)
    display: flex
    flex-direction: column
    row-gap: 50px

hr
  background-color: var(--md-sys-color-primary-container)
  border: 0
  height: 5px

#FooterTemplateContainer
  width: 100%

</style>