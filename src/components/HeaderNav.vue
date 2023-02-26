<script>
import { engine } from "@/engine";
import "jquery"

export default {
  name: "HeaderNav",

  data() {return {
    json: {
      es: {
        "about": "acerca de mí",
        "port": "portafolio",
        "blog": "blog"
      },
      en: {
        "about": "about me",
        "port": "portfolio",
        "blog": "blog"
      }
    },

    engine
  }},
}
</script>

<template>
  <div id="HeaderNavTemplate">
    <div>
      <div>
        <div class="nav_items">
          <h2>{{json[engine.idiomaId].about}}</h2>
        </div>
      </div>

      <div>
        <div class="nav_items">
          <h2>{{json[engine.idiomaId].port}}</h2>
        </div>
      </div>

      <div>
        <div class="nav_items">
          <h2>{{json[engine.idiomaId].blog}}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
/* --------------------------------  header_nav - INICIO  --------------------------------  */

#HeaderNavTemplate
  width: 100%
  height: 100%
  background-color: var(--md-sys-color-primary-container)

  display: flex
  justify-content: center

  > div
    width: 100%
    height: 100%
    max-width: 1150px

    display: flex
    justify-content: space-around
    align-items: center

    letter-spacing: 1px

    > div
      height: 100%
      padding: 5px

      flex:
        grow: 1
        shrink: 1
        basis: 1px

      justify-content: center
      align-items: center

      > div
        height: 100%
        width: 100%

        display: flex

        justify-content: center
        align-items: center

        > h2
          width: max-content
          font-family: cubano, sans-serif
          text-align: center
          color: var(--md-sys-color-on-primary-container)

/* --------------------------------  header_nav - FIN  --------------------------------  */

</style>