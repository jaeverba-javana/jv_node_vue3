<script>
import LanguageSelectorItem from "@/components/LanguageSelectorItem.vue";
import {engine, cookieManager} from "@/engine";
import {ref, reactive} from 'vue'
import {mapMutations, mapState} from "vuex";
import {mapState as mapStatePinia, mapActions as mapActionsPinia} from "pinia"
import MainStore from "@/stores/MainStore";

// let Language = LanguageStore();
// console.log(Language)

//data:
// let active = reactive(false)
// let classes = {dark: {}}
// let menuStyles = {height: ''}


//methods:
/*function click(doActive = null) {
    active = doActive === null ? !active : doActive
    /!*this.active ? (
        this.active = false,
            this.classes.dark.active = false,
            this.menuStyles.height = ""
    ) : (
        this.active = true,
            this.classes.dark.active = true,
            this.menuStyles.height = 'calc(var(--ancho-barras) + 20px + calc(40px * '+engine.idiomas.length+'))'
        // this.menuStyles.height = (60 + 20 + (40 * engine.idiomas.length)) + 'px'
    )*!/
}*/

/*function toggle(language) {
    cookieManager.add({
        key: 'lang',
        value: idioma,
        max_age: 3600 * 24 * 7,
        path: "/"
    })

}*/


export default {
  name: "LanguageSelector",

  data() {
    return {
      classes: {
        dark: {}
      },
      engine,
      active: false,
      menuStyles: {height: ""},
      cookieManager
    }
  },

  computed: {
    ...mapStatePinia(MainStore, {
      lang: store => store.lang
    })
    // containerHeight: () => this.langugeSelectorState.active? 'calc(var(--ancho-barras) + 20px + calc(40px * '+engine.idiomas.length+'))' : ""
  },

  methods: {
    ...mapMutations(['toggleActivationOfLangSelectorComponent']),
    ...mapActionsPinia(MainStore, ['setLangId', 'setLang', "getLangById"]),
    click() {
      this.active ? (
          this.active = false,
              this.classes.dark.active = false,
              this.menuStyles.height = ""
      ) : (
          this.active = true,
              this.classes.dark.active = true,
              this.menuStyles.height = 'calc(var(--ancho-barras) + 20px + calc(40px * ' + this.lang.all.length + '))'
          // this.menuStyles.height = (60 + 20 + (40 * engine.idiomas.length)) + 'px'
      )
    },

    toggle(lang) {
      this.setLang(lang)
      this.click()
    }
  },

  components: {
    LanguageSelectorItem
  }
}
</script>

<template>
  <div id="LanguageSelectorTemplate" :class="{active: active}">
    <div
        class="dark"
        :class="{active: active}"
        @click="click(false)"></div>

    <div
        class="language_selector_menu"
        :style="{height: active? 'calc(var(--ancho-barras) + 20px + calc(40px * '+lang.all.length+'))' : ''}">
      <div class="default" @click="click()">
        <LanguageSelectorItem
            :elemento="getLangById(cookieManager.get('lang'))"
            :header="true"
        />
      </div>

      <div class="options">
        <LanguageSelectorItem
            v-for="item in lang.all"
            :elemento="item"
            @click="toggle(item.id)"
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