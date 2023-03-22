<template>
  <header id="HeaderTemplate">
    <div id="HeaderPerfilTemplateContainer"
         class="md-elevation-16px template container mdc-elevation--z6">
      <HeaderPerfil />
    </div>

    <div id="HeaderNavTemplateContainer"
         class="md-elevation-16px mdc-elevation--z6">
      <HeaderNav />
    </div>
  </header>
</template>

<script setup>
import HeaderPerfil from "@/components/blog/HeaderPerfilBlog.vue";
import HeaderNav from "@/components/blog/HeaderNavBlog.vue";
// export default {
//   name: "Header"
// }
</script>

<style scoped lang="sass">
#HeaderTemplate
  height: calc(var(--ancho-barras) * 2)

#HeaderPerfilTemplateContainer
  height: var(--ancho-barras)
  z-index: 101

  transition: all 0.2s ease-in-out

  //position: fixed
  position: sticky
  left: 0
  right: 0

#HeaderNavTemplateContainer
  height: var(--ancho-barras)
  z-index: 100

  position: absolute
  bottom: 0
  width: 100%

</style>