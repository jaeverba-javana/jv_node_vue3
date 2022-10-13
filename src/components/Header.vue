<script setup>
import HeaderPerfil from "@/components/HeaderPerfil.vue";
import HeaderNav from "@/components/HeaderNav.vue";
</script>

<template>
  <header id="HeaderTemplate">
    <div id="HeaderPerfilTemplateContainer"
         class="md-elevation-16px template container mdc-elevation--z6">
      <HeaderPerfil />
    </div>

    <div id="HeaderMainTemplateContainer"></div>
    <div id="HeaderNavTemplateContainer"
         class="md-elevation-16px mdc-elevation--z6">
      <HeaderNav />
    </div>
  </header>
</template>

<style lang="sass">
/* --- --- --- --- HEADER - START --- --- --- --- */
#HeaderTemplate
  width: 100%
  height: 100%

  position: absolute

#HeaderPerfilTemplateContainer
  height: 60px
  z-index: 2

  transition: all 0.2s ease-in-out

  position: fixed
  left: 0
  right: 0

#HeaderMainTemplateContainer
  height: 100%
  padding: 60px 0
  background-color: var(--md-sys-color-background)

#HeaderNavTemplateContainer
  height: 60px
  z-index: 1

  position: absolute
  bottom: 0
  width: 100%

#HeaderNavTemplateContainer.paso
  position: fixed
  top: 60px
/* --- --- --- --- HEADER - END --- --- --- --- */
</style>
