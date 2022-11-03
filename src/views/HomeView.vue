<script setup>
import {engine} from "@/engine";
import IconDesign from "@/components/icons/IconDesign.vue";
import IconProgramming from "@/components/icons/IconProgramming.vue";



let text = {
  "es": {
    "design": {
      "cosas que disfruto hacer": [
          "interfaces de usuario",
          "identidad corporativa",
          "embalaje",
          "logos"
      ],
      "herramientas": [
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Adobe InDesign",
          "Adobe XD"
      ]
    },
    "programming": {
      "Frontend": [
          "HTML - Pug",
          "CSS - Sass",
          "JavaScript - Vue3 - JQuery"
      ],
      "Backend" : [
          "Java - Spring Boot",
          "PHP",
          "SQL - MySQL, SQLite"
      ],
      "Herramientas": [
          "Jetbrains Space",
          "GitHub",
          "Docker",
          "Azure"
      ],
      "IDES": [
          "Vidsual Studio",
          "WebStorm",
          "Netbeans",
          "DataGrip",
          "Eclipse",
          "IntelliJ"
      ]
    }
  },

  "en": {
    "design": {
      "Things I enjoy doing": [
          "interfaces de usuario",
          "identidad corporativa",
          "embalaje",
          "logos"
      ],
      "herramientas": [
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Adobe InDesign",
          "Adobe XD"
      ]
    },
    "programming": {
      "Frontend": [
          "HTML - Pug",
          "CSS - Sass",
          "JavaScript - Vue3 - JQuery"
      ],
      "Backend" : [
          "Java - Spring Boot",
          "PHP",
          "SQL - MySQL, SQLite"
      ],
      "Herramientas": [
          "Jetbrains Space",
          "GitHub",
          "Docker",
          "Azure"
      ],
      "IDES": [
          "Vidsual Studio",
          "WebStorm",
          "Netbeans",
          "DataGrip",
          "Eclipse",
          "IntelliJ"
      ]
    }
  }
}
</script>

<template>
  <section>
    <h1 class="gordo">un poco sobre m&iacute;</h1>
    <p>Soy Javier Vergara, programador web full-stack, freelance y diseñador gráfico colombiano, apasionado por la tecnología y todo lo que tenga que ver con ella.</p>
    <p>He trabajado como programador web y diseñador gráfico freelance desde 2020. Siempre he sido alguien a quién le ha gustado los retos, experimentar con ellos y generar diferentes resultados, considero que no hay mejor forma de aprender que atreviéndose a hacerlo.</p>
    <p>La mayor parte del mi conocimiento y habilidades en programación los he adquirido estudiando por mi cuenta y practicando con algunos retos, proyectos personales y trabajos como freelance.</p>
  </section>

  <section class="skills">
    <h1 class="gordo">mis habilidades</h1>

    <div>
      <div>
        <div class="svg-container"><IconDesign /></div>

        <h2 class="gordo">diseño</h2>

        <div class="cuerpo">
          <div v-for="(item, index) of this.text[engine.idiomaId].design">
            <h3>{{index}}</h3>
            <ul>
              <li v-for="item2 in item"><p>{{item2}}</p></li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div class="svg-container"><IconProgramming /></div>

        <h2 class="gordo">desarrollo</h2>

        <div class="cuerpo">
          <div v-for="(item, index) of this.text[engine.idiomaId].programming">
            <h3>{{index}}</h3>
            <ul>
              <li v-for="item2 in item"><p>{{item2}}</p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>

  </section>
</template>

<style scoped lang="sass">
section
  color: var(--md-sys-color-on-surface)
  display: flex
  flex-direction: column

  > h1
    font-size: 50px
    text-align: center
    color: var(--md-sys-color-on-surface-variant)

  > p
    font-size: 18px
    max-width: 773px
    margin-top: 9px
    align-self: center

section.skills
  > div
    display: flex
    justify-content: center
    column-gap: 50px

    > div
      width: 250px
      height: 500px
      background-color: var(--md-sys-color-inverse-surface)
      overflow-y: auto

      > .svg-container
        margin-bottom: -50px
        margin-top: -30px
        width: 250px
        height: 250px
        scrollbar-color: rgba(0, 0, 0, .5) rgba(0, 0, 0, 0)
        scrollbar-width: thin
        scrollbar-gutter: auto

      &::-webkit-scrollbar
        -webkit-appearance: none
        background-color: transparent

        &:vertical
          width: 10px

        &:horizontal
          display: none

      &::-webkit-scrollbar-button, &::-webkit-scrollbar-button:increment
        display: none

      &::-webkit-scrollbar-thumb
        background-color: var(--md-sys-color-inverse-on-surface)
        border-radius: 20px
        border: 2px solid #f1f2f3

      &::-webkit-scrollbar-track
        border-radius: 10px

      h2, h3, p
        color: var(--md-sys-color-inverse-on-surface)

      > h2
        color: var(--md-sys-color-inverse-on-surface)
        text-align: center

      h3
        font-weight: bold

      h3, p
        text-align: center
</style>
