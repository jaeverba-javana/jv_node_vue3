<script>
import LanguageSelectorItem from "@/components/LanguageSelectorItem.vue";
import {engine, cookieManager} from "@/engine";
import {mapMutations, mapState} from "vuex";

export default {
  name: "LanguageSelector",

  data() {
    return {
      classes: {
        dark: {
        }
      },
      engine,
      active: false,
      menuStyles: {height: ""}
    }
  },

  computed: {
    ...mapState({langugeSelectorState: state => state.components.LangSelector}),
    // containerHeight: () => this.langugeSelectorState.active? 'calc(var(--ancho-barras) + 20px + calc(40px * '+engine.idiomas.length+'))' : ""
  },

  methods: {
    ...mapMutations(['toggleActivationOfLangSelectorComponent']),
    click() {
      this.active ? (
          this.active = false,
              this.classes.dark.active = false,
              this.menuStyles.height = ""
      ) : (
          this.active = true,
              this.classes.dark.active = true,
              this.menuStyles.height = 'calc(var(--ancho-barras) + 20px + calc(40px * '+engine.idiomas.length+'))'
              // this.menuStyles.height = (60 + 20 + (40 * engine.idiomas.length)) + 'px'
      )
    },

    cambiar(idioma) {
      cookieManager.add({
        key: 'lang',
        value: idioma,
        max_age: 3600 * 24 * 7,
        path: "/"
      })

      engine.setIdiomaId(idioma)

      document.getElementById('html').lang = engine.idiomaId

      this.toggleActivationOfLangSelectorComponent(false)
    }
  },

  components: {
    LanguageSelectorItem
  }
}
</script>

<template>
  <div id="LanguageSelectorTemplate" :class="{active: langugeSelectorState.active}">
    <div
        class="dark"
        :class="{active: langugeSelectorState.active}"
        @click="toggleActivationOfLangSelectorComponent(false)"></div>

    <div class="language_selector_menu" :style="{height: langugeSelectorState.active? 'calc(var(--ancho-barras) + 20px + calc(40px * '+engine.idiomas.length+'))' : ''}">
      <div class="default" @click="toggleActivationOfLangSelectorComponent()">
        <LanguageSelectorItem
            :elemento="engine.idioma()"
            :header="true"
        />
      </div>

      <div class="options">
        <LanguageSelectorItem
            v-for="item in engine.idiomas"
            :elemento="item"
            @click="cambiar(item.id)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="sass">
#LanguageSelectorTemplate
  width: 100%
  height: 100%
  max-width: 100%
  max-height: 100%

  > div.dark
    position: fixed
    top: 0
    left: 0

    transition:
      duration: 400ms
      property: all

    z-index: 1

    &.active
      width: 100vw
      height: 100vh
      backdrop-filter: blur(4px)

  > div.language_selector_menu
    height: var(--ancho-barras)
    overflow: hidden
    position: fixed
    background-color: var(--md-sys-color-primary-container)
    transition-duration: 400ms
    z-index: 1

    > div.default
      height: var(--ancho-barras)
      cursor: pointer

    > div.options
      margin: 10px 0

      > div
        cursor: pointer

  &.active > div.language_selector_menu
    box-shadow: var(--md-sys-elevation-6)
</style>