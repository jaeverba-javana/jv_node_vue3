<script>
import {engine} from "@/engine";
import "@/assets/libs/jquery-3.6.1.min"

export default {
  name: "HeaderNav",

  data() {
    return {
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
    }
  },

  methods: {
    entrando(e) {
      console.log("entrando")
      // console.log(e)
    },

    saliendo(e) {
      console.log("saliendo")
      // console.log(e)
    },

    sobre(e) {
      console.log("sobre")
    }
  },

  mounted() {
    $(".nav_item").hover(
        e => e.target.classList.add('hover'),
        e => e.target.classList.remove('hover')
    )
  },
}
</script>

<template>
  <div id="HeaderNavTemplate">
    <ul>
      <li>
        <RouterLink to="/blog">
          <div class="nav_item">
            <h2>{{ json[engine.idiomaId].about }}</h2>
          </div>
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/blog">
          <div class="nav_item">
            <h2>{{ json[engine.idiomaId].port }}</h2>
          </div>
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/blog">
          <div class="nav_item">
            <h2>{{ json[engine.idiomaId].blog }}</h2>
          </div>
        </RouterLink>
      </li>
    </ul>
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

  > ul
    width: 100%
    height: 100%
    max-width: 1150px

    display: flex
    justify-content: space-around
    align-items: center

    letter-spacing: 1px

    > li
      height: 100%
      padding: 5px

      flex:
        grow: 1
        shrink: 1
        basis: 1px

      justify-content: center
      align-items: center

      > a

        > div
          height: 100%
          width: 100%

          display: flex

          justify-content: center
          align-items: center

          transition:
            duration: 400ms

          &.hover
            background-color: rgb(var(--v-theme-primary-container-darken-1))
            > h2
              color: rgba(var(--v-theme-on-primary-container-lighten-1))

          > h2
            width: max-content
            font-family: cubano, sans-serif
            text-align: center
            color: var(--md-sys-color-on-primary-container)

            //&:hover
            //  color: rgba(var(--v-theme-on-primary-container-lighten-1))

            @media (max-width: 599px)
              font-size: 20px

/* --------------------------------  header_nav - FIN  --------------------------------  */

</style>