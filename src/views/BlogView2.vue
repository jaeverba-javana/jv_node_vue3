<template>
  <v-app-bar title="barra de aplicación" color="primary-container">

  </v-app-bar>

<!--  <v-system-bar>-->
<!--    <v-footer >-->
<!--    </v-footer>-->
<!--  </v-system-bar>-->

  <v-navigation-drawer color="background" v-model="vNavigationDrawer.left.active">
    <div class="jvi-v-navigation-drawer--main-container">
      <div class="jvi-v-navigation-drawer--main-element" style="height: 2000px"></div>
    </div>


    <div class="jvi-v-navigation-drawer--floating-buttons-container">
      <button class="person jvi-floating-button jvi-paper-plane-classic-solid"
              @click="toggleShowDrawer('left')"></button>
    </div>
  </v-navigation-drawer>

  <v-navigation-drawer location="right" color="surface" v-model="vNavigationDrawer.right.active">
    <div style="max-height: 100%; overflow-y: auto">
      <div style="height: 2000px"></div>
    </div>


    <div class="jvi-v-navigation-drawer--floating-buttons-container">
      <button class="person jvi-floating-button jvi-paper-plane-classic-solid"
              @click="toggleShowDrawer('right')"></button>
    </div>
  </v-navigation-drawer>

  <v-main>
    <div><div></div></div>
  </v-main>

<!--  <div>-->
<!--    <v-layout>-->
<!--      <div id="HeaderTemplateContainer">-->
<!--        <Header/>-->
<!--      </div>-->

<!--    </v-layout>-->
<!--  </div>-->


  <!--  <div class="main-container-general">

    </div>-->


<!--  <div id="FooterTemplateContainer">-->
<!--    <hr>-->
<!--    <Footer/>-->
<!--  </div>-->
</template>


<script>
import {RouterView} from "vue-router"
import Header from "@/components/blog/HeaderBlog.vue"
import Footer from "@/components/Footer.vue"
import {mapState, mapMutations} from "vuex"


let admins = [
  ['Management', 'jvi-xmark-classic-solid'],
  ['Settings', 'jvi-xmark-classic-solid'],
]
let cruds = [
  ['Create', 'jvi-xmark-classic-solid'],
  ['Read', 'jvi-xmark-classic-solid'],
  ['Update', 'jvi-xmark-classic-solid'],
  ['Delete', 'jvi-xmark-classic-solid'],
]

export default {
  name: "BlogView",
  data() {
    return {
      open: ['Users'],
      cruds, admins
    }
  },
  computed: {
    ...mapState([
        "components"
    ]),
    ...mapState({
      vNavigationDrawer: state => state.components.vNavigationDrawer
    }),

    /*vNavigationDrawer: {
      left: {
        active: () => this.$store.state.vNavigationDrawer.left.active
      }
    }*/
  },
  methods: {
    ...mapMutations(['toggleShowDrawer'])
  },
  components: {Footer, Header, RouterView}
}
</script>


<style lang="sass">
@use "@/settings.scss"


nav
  &.v-navigation-drawer
    > .v-navigation-drawer__content
      overflow: visible

      .jvi-v-navigation-drawer--floating-buttons-container
        position: absolute !important
        top: 12px !important
        height: calc(100% - 24px)

        .jvi-floating-button
          text-size-adjust: none !important
          border: 0 !important
          background: none !important
          display: inline !important
          margin: 0 !important
          padding: 0 !important
          width: 44px !important
          height: 44px !important
          border-radius: 50% !important
          cursor: pointer !important
          position: sticky
          top: 0px

          &:hover
            background: rgba(var(--v-theme-primary), 0.2) !important

      .jvi-v-navigation-drawer--main-container
        max-height: 100%
        overflow-y: auto

  --button-x-position: 110%
  &.v-navigation-drawer--active
    --button-x-position: calc(100% + 20px)

  &.v-navigation-drawer--left
    > .v-navigation-drawer__content
      .jvi-v-navigation-drawer--floating-buttons-container
        margin-left: 12px !important
        left: var(--button-x-position) !important


  &.v-navigation-drawer--right
    > .v-navigation-drawer__content
      .jvi-v-navigation-drawer--floating-buttons-container
        margin-right: 12px !important
        right: var(--button-x-position) !important

      .jvi-v-navigation-drawer--main-container
        direction: rtl

      .jvi-v-navigation-drawer--main-element
        direction: ltr


.v-main
  //display: flex
  >div
    padding: 0 calc(var(--ancho-barras) * 2)
    height: 100%
    > div
      max-width: 900px
      margin: auto
      height: 100%

.main-container-general
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  justify-content: center
  background-color: var(--md-sys-color-surface-variant)

  > *
    width: 100%
    max-width: 1150px
    background-color: var(--md-sys-color-surface)
    display: flex
    flex-direction: column
    row-gap: 50px


</style>