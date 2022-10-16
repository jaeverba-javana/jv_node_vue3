<script>
import LanguageSelectorItem from "@/components/LanguageSelectorItem.vue";
import {engine, cookieManager} from "@/engine";

export default {
  name: "LanguageSelector",

  data() {
    return {
      classes: {
        dark: {
          active: false
        }
      },
      engine,
      active: false,
      menuStyles: {height: ""}
    }
  },

  methods: {
    click() {
      this.active ? (
          this.active = false,
              this.classes.dark.active = false,
              this.menuStyles.height = "60px"
      ) : (
          this.active = true,
              this.classes.dark.active = true,
              this.menuStyles.height = (60 + 20 + (40 * engine.idiomas.length)) + 'px'
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

      this.click()
    }
  },

  components: {
    LanguageSelectorItem
  }
}
</script>

<template>
  <div id="LanguageSelectorTemplate">
    <div
        class="dark"
        :class="classes.dark"
        @click="click"></div>

    <div class="language_selector_menu" :style="menuStyles">
      <div class="default" @click="click()">
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
    backdrop-filter: blur(10px)

    transition:
      duration: 400ms
      property: all

    z-index: 1

  > div.dark.active
    width: 100%
    height: 100%

  > div.language_selector_menu
    height: 60px
    overflow: hidden
    position: fixed
    background-color: var(--md-sys-color-primary-container)
    transition-duration: 400ms
    z-index: 1

    > div.default
      height: 60px
      cursor: pointer

    > div.options
      margin: 10px 0

      > div
        cursor: pointer
</style>