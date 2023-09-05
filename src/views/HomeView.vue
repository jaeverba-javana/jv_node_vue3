<script setup>
import {cookieManager, engine} from "@/engine";
import IconDesign from "@/components/icons/IconDesign.vue";
import IconProgramming from "@/components/icons/IconProgramming.vue";
import SlideDesarrollo from "@/components/SlideDesarrollo.vue";
import SlideDesign from "@/components/SlideDesign.vue";
import LanguageStore from "@/stores/engine/LanguageStore";
import {mapActions, mapState} from "pinia";
import MText from "@/plugins/mine/components/MText/MText";
import THEME from "@/plugins/mine/theme/constants";
import MainStore from "@/stores/MainStore";
import {capitalize} from "@vue/shared";

let Lang = LanguageStore()
let mainStore = MainStore()


const text = {
  es: {
    aboutMe: {
      title: "Un poco sobre mí",
      p1: "Soy Javier Vergara, un programador web full-stack y diseñador gráfico freelance con una gran afición por la tecnología. Desde hace tiempo, he trabajado en proyectos como programador web y diseñador gráfico freelance, buscando constantemente desafíos y oportunidades para aprender y mejorar mis habilidades.",
      p2: "Además de mi experiencia en el desarrollo web y el diseño gráfico, también brindo tutorías en programación, matemáticas preuniversitarias y diseño gráfico. Con dos años de experiencia en la enseñanza, considero que es una excelente forma de continuar creciendo y compartir mi conocimiento con otros. Puedes encontrar más información sobre mi experiencia en mi perfil de SuperProf.",
      p3: "La mayoría de mi conocimiento y habilidades en programación se han adquirido a través del estudio independiente y la práctica constante en proyectos personales y trabajos freelance.",
    },
    mySkills: {
      title: "Mis habilidades",
      design: {
        title: "Diseño",
        content: {
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
          ],
        },
      },
      programming: {
        title: "Programación",
        content: {
          "Frontend": [
            "HTML - Pug",
            "CSS - Sass",
            "JavaScript - Vue3 - JQuery"
          ],
          "Backend": [
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
  },
  "en": {
    aboutMe: {
      title: "A bit about me",
      p1: "I am Javier Vergara, a full-stack web developer and freelance graphic designer with a strong passion for technology. For a long time, I have been working on projects as a web developer and freelance graphic designer, always seeking new challenges and opportunities to learn and improve my skills.",
      p2: "In addition to my experience in web development and graphic design, I also provide tutoring in programming, pre-university mathematics, and graphic design. With two years of teaching experience, I believe it is an excellent way to continue growing and sharing my knowledge with others. You can find more information about my experience on my SuperProf profile.",
      p3: "Most of my knowledge and skills in programming have been acquired through independent study and constant practice in personal projects and freelance work.",
    },
    mySkills: {
      title: "My skills",
      design: {
        title: "Desing",
        content: {
          "Things I enjoy doing": [
            "User interfaces",
            "Corporate identity",
            "Packaging design",
            "Logos"
          ],
          "Tools": [
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Adobe InDesign",
            "Adobe XD"
          ]
        },
      },
      programming: {
        title: "Developing",
        content: {
          "Frontend": [
            "HTML - Pug",
            "CSS - Sass",
            "JavaScript - Vue3 - JQuery"
          ],
          "Backend": [
            "Java - Spring Boot",
            "PHP",
            "SQL - MySQL, SQLite"
          ],
          "Tools": [
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
    },
  },
}


window.addEventListener("scroll", engine.elements.window.eventListeners.scrollEventListener)

</script>

<template>
  <section>
    <MText :type="THEME.typography.displayMedium" gordo>{{ text[mainStore.lang.id].aboutMe.title }}</MText>
    <m-text>{{ text[mainStore.lang.id].aboutMe.p1 }}</m-text>
    <m-text>{{ text[mainStore.lang.id].aboutMe.p2 }}</m-text>
    <m-text>{{ text[mainStore.lang.id].aboutMe.p3 }}</m-text>
  </section>

  <section class="skills">
    <MText :type="THEME.typography.displayMedium" gordo style="margin-bottom: 1rem">{{ text[mainStore.lang.id].mySkills.title }}</MText>

    <div>
      <div>
        <div class="svg-container">
          <IconDesign/>
        </div>

        <MText :type="THEME.typography.titleMedium" gordo style="margin-bottom: 0.5rem">{{ text[mainStore.lang.id].mySkills.design.title }}</MText>

        <ul class="cuerpo">
          <li v-for="(item, index) of text[mainStore.lang.id].mySkills.design.content">
            <ul>
              <MText :type='THEME.typography.titleSmall' style="text-align: center;">{{capitalize(index)}}</MText>

              <li v-for="item2 in item"><m-text>{{capitalize(item2)}}</m-text></li>
            </ul>
          </li>
        </ul>
      </div>

      <div>
        <div class="svg-container">
          <IconProgramming/>
        </div>

        <MText :type="THEME.typography.titleMedium" gordo style="margin-bottom: 0.5rem">{{ text[mainStore.lang.id].mySkills.programming.title }}</MText>

        <ul class="cuerpo">
          <ul v-for="(item, index) of text[mainStore.lang.id].mySkills.programming.content">
            <li>
              <MText :type='THEME.typography.titleSmall' style="text-align: center;">{{capitalize(index)}}</MText>

              <ul>
                <li v-for="item2 in item"><MText>{{capitalize(item2)}}</MText></li>
              </ul>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </section>

  <section id="section-sliders">
    <div id="SlideDesarrolloContainer">
      <SlideDesarrollo/>
    </div>

    <div id="slideDesignContainer">
      <SlideDesign/>
    </div>
  </section>
</template>

<style scoped lang="sass">

section
  color: var(--md-sys-color-on-surface)
  display: flex
  flex-direction: column

  &#section-sliders
    display: flex
    flex-direction: column
    row-gap: 50px

  > h1
    font-size: 50px
    text-align: center
    color: var(--md-sys-color-on-surface-variant)

  > p
    font-size: 18px
    max-width: 773px
    margin-top: 9px
    align-self: center

//section de skills o Habilidades
section.skills
  > div
    display: flex
    justify-content: center
    column-gap: 50px
    height: min-content

    > div
      width: 250px
      height: 500px
      //background-color: var(--md-sys-color-inverse-surface)
      background-color: var(--md-sys-color-surface-variant)
      overflow-y: auto
      padding: 30px 10px
      position: relative

      > .svg-container
        margin-bottom: -50px
        margin-top: -60px
        width: 100%
        scrollbar-color: rgba(0, 0, 0, .5) rgba(0, 0, 0, 0)
        scrollbar-width: thin
        scrollbar-gutter: auto

      > ul
        display: flex
        flex-direction: column
        row-gap: 15px


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
        background-color: transparent
        border-radius: 20px
        border: 2px solid var(--md-sys-color-on-surface-variant)

      &::-webkit-scrollbar-track
        border-radius: 10px

      h2, h3, p
        color: var(--md-sys-color-on-surface-variant)

      > h2
        color: var(--md-sys-color-on-surface-variant)
        text-align: center
        letter-spacing: 0.05em

      h3
        font-weight: bold

      h3, p
        text-align: center
</style>
