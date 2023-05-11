<script>
import lottie from 'lottie-web'
import {engine} from "@/engine";
import {useTheme} from "vuetify";


export default {
  name: "ThemeToggler",

  mounted() {
    this.animation = lottie.loadAnimation({
      container: this.$refs.anContainer,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/img/json/lottie/toggle_theme_1.json'
    })

    this.theme = useTheme()

    if (localStorage.getItem('theme') === 'dark') {
      this.animation.goToAndStop(15, true)
    }
  },

  methods: {
    click(e) {
      engine.theme.toggle()

      //this.theme.global.name.value = this.theme.global.current.value.dark ? "light" : "dark"

      localStorage.getItem('theme') === 'dark'
          ? (
              this.animation.setDirection(1),
                  this.theme.global.name.value = "darkTheme",

                  $("#html").removeClass("light"),
                  $("#html").addClass("dark"),

                  this.animation.play()
          ) : (
              this.animation.setDirection(-1),
                  this.theme.global.name.value = "lightTheme",

                  $("#html").removeClass("dark"),
                  $("#html").addClass("light"),

                  this.animation.play()
          )
      this.animation.play()
    }
  }
}
</script>

<template>
  <div id="ThemeTogglerTemplate" ref="anContainer" @click.stop="click"></div>
</template>

<style lang="sass">
#ThemeTogglerTemplate
  height: 100%
  width: 100%
  cursor: pointer
</style>