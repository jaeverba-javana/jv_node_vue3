<script setup>
import LanguageSelector from "@/components/LanguageSelector.vue";
import ThemeToggler from "@/components/ThemeToggler.vue";
</script>

<template>
  <div id="HeaderPerfilTemplate">
    <div>
      <div class="lateral lateral-l">
        <div>
          <LanguageSelector />
        </div>
      </div>

      <div class="centro">
        <a href="/">
          <img alt="logo" src="/img/svg/logo/transparentbackground_colorfull.svg"/>
        </a>
      </div>

      <div class="lateral lateral-r">
        <div id="template_theme_toggle_container">
          <ThemeToggler />
        </div>
        <!--template_header_perfil_perfil_nosession-->
      </div>
    </div>
  </div>
</template>

<style lang="sass">
/* -------------------------------- header_perfil - INICIO -------------------------------- */

#HeaderPerfilTemplate
  width: 100%
  height: 100%

  background-color: var(--md-sys-color-primary-container)
  color: var(--md-sys-color-on-primary-container)

  display: flex
  justify-content: center

  > div
    width: 100%
    height: 60px
    max-width: var(--desktop-maxwidth)
    position: fixed
    display: flex
    justify-content: space-between

    > div.lateral
      flex:
        grow: 1
        shrink: 1
        basis: 1px

    > div.lateral-l > div
      height: 60px
    //width: 300px

    > div.centro
      height: 100%
      display: flex
      align-items: center

      > a
        height: 80%

        > img
          height: 100%

    > div.lateral-r
      display: flex
      justify-content: end
      align-items: center

      > #template_theme_toggle_container
        width: 50px
        height: 50px


/* -------------------------------- header_perfil - FIN -------------------------------- */
</style>