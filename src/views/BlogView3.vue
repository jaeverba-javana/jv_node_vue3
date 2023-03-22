<template>
  <div>
    <div id="HeaderTemplateContainer">
      <Header/>
    </div>

    <v-layout>
      <v-navigation-drawer
          color="grey-darken-1"
          width="250"
          v-model="$store.state.components.vNavigationDrawer.left.active"
      >
        <!--        <div class="jvi-v-navigation-drawer&#45;&#45;floating-buttons-container">
          <button class="person jvi-paper-plane-classic-solid jvi-floating-button" @click="toggleShowDrawer('left')"></button>
        </div>-->

        <div class="jvi-v-navigation-drawer--v-list-container">
          <v-list class="myList">
            <v-list-subheader>Índice</v-list-subheader>

            <v-list-group value="valor">
              <template v-slot:activator="{ props }">
                <v-list-item
                    v-bind="props"
                    title="Users"
                    rounded="xl"
                ></v-list-item>
              </template>

              <v-list-group value="Admin" active-color="red">
                <template v-slot:activator="{ props }">
                  <v-list-item
                      v-bind="props"
                      title="Admin"
                      rounded="xl"
                  ></v-list-item>
                </template>

                <v-list-item
                    v-for="([title, icon], i) in admins"
                    :key="i"
                    :title="title"
                    :value="title"
                    rounded="xl"
                    subtitle="subtítulo"
                ></v-list-item>
              </v-list-group>

              <v-list-group value="Actions">
                <template v-slot:activator="{ props }">
                  <v-list-item
                      v-bind="props"
                      title="Actions"
                  ></v-list-item>
                </template>

                <v-list-item
                    v-for="([title, icon], i) in cruds"
                    :key="i"
                    :value="title"
                    :title="title"
                    rounded="xl"
                ></v-list-item>
              </v-list-group>
            </v-list-group>
          </v-list>
        </div>

      </v-navigation-drawer>

      <v-navigation-drawer
          color="grey-lighten-1"
          location="right"
          width="250"
          v-model="$store.state.components.vNavigationDrawer.right.active"
      >
        <div class="jvi-v-navigation-drawer--floating-buttons-container">
          <button class="person jvi-floating-button jvi-paper-plane-classic-solid"
                  @click="toggleShowDrawer('right')"></button>
        </div>
      </v-navigation-drawer>

      <v-main>
        <v-container
            class="d-flex justify-center align-center text-h5"
            style="min-height: 300px; height: 1000px"
        >
          <div class="main_pre context_on_bg">
            <!--          <div class="left">
                        <button class=" color_on_bg context">
                          <i class="jvi-paper-plane-classic-solid"></i>
                        </button>
                      </div>-->

            <!--          <div class="right">
                        <button class="jvi-paper-plane-classic-solid color_on_bg context">
                        </button>
                      </div>-->
          </div>

          <div class="main">
            <div></div>
          </div>
        </v-container>
      </v-main>
    </v-layout>
  </div>


  <!--  <div class="main-container-general">

    </div>-->


  <div id="FooterTemplateContainer">
    <hr>
    <Footer/>
  </div>
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
    ...mapState({})
  },
  methods: {
    ...mapMutations(['toggleShowDrawer'])
  },
  components: {Footer, Header, RouterView}
}
</script>


<style lang="sass">
@use "@/settings.scss"


.v-navigation-drawer__scrim
  opacity: 0.5

nav
  &.v-navigation-drawer
    background: rgb(var(--v-theme-background)) !important
    display: grid !important

    > .v-navigation-drawer__content
      font: 14px/20px BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif !important
      text-size-adjust: none !important
      color: var(--foregroundDefault) !important
      //position: fixed
      //bottom: 0
      //left: 0
      width: 249px !important
      background: var(--backgroundAlt) !important
      border-right: 1px solid var(--borderPrimary) !important
      flex-grow: 1 !important
      display: flex !important
      flex-direction: column !important
      transition: transform .2s, -webkit-transform .2s !important
      transform: translateX(0) !important
      //overflow: visible !important
      max-height: calc(100vh - var(--ancho-barras) * 2)
      overflow: auto !important

      //max-height: calc(100vh - calc(var(--ancho-barras) * 2))
      //top: 63px

      .jvi-v-navigation-drawer-
        &-floating-buttons-container
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

        &-v-list-container
          height: 100vh
          max-height: calc(100vh - var(--ancho-barras) * 2)
          position: sticky

  --button-x-position: 110%

  &.v-navigation-drawer--active
    --button-x-position: 100%

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


main > .v-container
  max-width: none
  width: 100%
  padding: 0

  > div
    &.main_pre
      height: 0
      max-height: 0

      display: flex
      justify-content: space-between

      > div
        padding: 10px

        button
          border-radius: 50%
          font-size: 18px
          margin: 5px
          --tamano: 44px
          height: var(--tamano)
          width: var(--tamano)

    &.main
      padding: 0 calc(var(--ancho-barras) * 2)

      > div
        width: 100%
        min-height: 300px
        height: 100%
        max-width: 800px
        margin: auto

        background-color: white

.context_on
  &_bg
    --context-on-color: rgb(var(--v-theme-on-background))

button.context
  color: var(--context-on-color)

  &:hover
    background-color: rgba(var(--v-theme-primary), 0.1)


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

hr
  background-color: var(--md-sys-color-primary-container)
  border: 0
  height: 5px

#HeaderTemplateContainer
  z-index: 1000
  position: sticky
  top: 0

#FooterTemplateContainer
  //position: absolute
  width: 100%

</style>