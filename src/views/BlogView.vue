<template>
  <v-app-bar color="primary-container">
<!--     density="prominent"-->
    <template v-slot:prepend>
      <v-app-bar-nav-icon v-if="mobile" @click="toggleActivationOfLeftVNavigationDrawerComponent()"></v-app-bar-nav-icon>
      <div  v-else style="height: 60px; width: 56px">
        <LanguageSelector/>
      </div>
    </template>

<!--    <a href="/">-->
      <img style="height: 100%" alt="logo" src="/img/svg/logo/transparentbackground_colorfull.svg"/>
<!--    </a>-->

    <template v-slot:append>
      <v-btn icon size="large">
        <template v-slot:default>
          <div style="height: calc(var(--v-btn-height))">
            <ThemeToggler />
          </div>
        </template>
      </v-btn>
    </template>

<!--    La perte de abajo - La barra de navegación -->

<!--    <template v-slot:extension v-if="!mobile" >
      <nav class="fill">
        <header-nav></header-nav>
      </nav>

      <div>
        <h1> hola esto es algo más </h1>
      </div>
    </template>-->
  </v-app-bar>

  <v-navigation-drawer
      width="250"
      v-model="blogView.components.vNavigationDrawer.leftDrawer.active">

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
  </v-navigation-drawer>

  <v-navigation-drawer
      color="grey-lighten-1"
      location="right"
      width="150"
  ></v-navigation-drawer>

  <v-navigation-drawer

      width="0"
  >

    <div class="v-navigation-drawer__flotant_icons" style="max-height: 0px;">
      <div style="background-color: #00b755; min-width: 60px; min-height: 60px; position: absolute; left: 100%"></div>
    </div>
  </v-navigation-drawer>

  <v-main class="d-flex fd-column align-center">
    <v-container
        class="v-main__content fill-width text-h5"
        style="min-height: 300px;"
        :class="{'v-media-movile': !mobile}"
    >
      <router-view />
    </v-container>
  </v-main>
</template>

<script>
import {useDisplay} from "vuetify";
import {mapMutations, mapState} from "vuex";
import {engine} from "@/engine"
import ThemeToggler from "@/components/ThemeToggler.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";
import HeaderNav from "@/components/HeaderNav.vue";


let open = ['Users'];
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
  name: "blog view",
  components: {ThemeToggler, LanguageSelector, HeaderNav},
  data: () => ({
    admins, cruds
  }),
  setup() {
    let {mobile, } = useDisplay()

    return {mobile}
  },
  computed: {
    ...mapState({
      blogView: state => state.views.blogView
    }),
  },
  methods: {
    ...mapMutations(["toggleActivationOfLeftVNavigationDrawerComponent"])
  },
  beforeCreate() {
    window.removeEventListener("scroll", engine.elements.window.eventListeners.scrollEventListener)
  }
}

/*export default {
  name: "BlogView"
}*/
</script>

<style lang="sass">
@use "@/settings.scss"


//#HeaderTemplateContainer
//height: 100vh
////min-height: 830px
//max-height: calc(calc(60vw * 0.9) + 75px)
//
//@media (min-width: 1328px)
//  max-height: 792.115px
//
//@media (max-width: 500px)
//  max-height: calc(calc(60vw * 0.8) + 105px)

.v-toolbar
  &.v-app-bar
    overflow: visible

.v-main
  &__content.v-media-movile
    padding:
      left: 4em
      right: 4em

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

#FooterTemplateContainer
  //position: absolute
  width: 100%

</style>