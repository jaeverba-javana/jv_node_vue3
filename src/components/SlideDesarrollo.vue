<script>
import {Swiper, SwiperSlide} from "swiper/vue"
import {Navigation} from "swiper"
import { engine } from "@/engine"

export default {
  name: "SlideDesarrollo",
  components: {Swiper, SwiperSlide},
  setup() {return {
    modules: [Navigation]
  }},
  data() {return {
    engine,
    text: {
      es: {
        develop_title: 'Desarrollo',
      },
      en: {
        develop_title: 'Developing',
      }
    },
    swipper_props: {
      breakpoints: {
        750: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 22
        },
      },
      centerInsufficientSlides: true,
      modules: this.modules,
      //navigation: true,
      navigation: {prevEl: '#prevElDevelop', nextEl: '#nextElDevelop'},
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 700
    },
  }}
}
</script>

<template>
  <h1 class="gordo">{{text[engine.idiomaId].develop_title}}</h1>

  <div class="mySwiper-container">
    <div class="sombra izquierda"><div></div></div>

    <swiper v-bind="swipper_props" class="mySwiper">
      <swiper-slide v-for="n in 11">
        <div><img src="/img/png/slides/develop/Imagen_1.png" alt="Vista previa del proyecto"></div>
        <h2>Nombre del proyecto</h2>
      </swiper-slide>
    </swiper>

    <div class="sombra derecha"><div></div></div>
  </div>

  <div id="prevElDevelop" class="swiper-button-prev"></div>
  <div id="nextElDevelop" class="swiper-button-next"></div>

</template>

<style scoped lang="sass">
h1
  padding-left: 85px
  font-size: 40px

.mySwiper-container
  //position: absolute
  max-width: 1150px
  width: 100%
  padding: 0 25px
  display: flex

  >.sombra
    width: 0
    z-index: 2

    > div
      height: 100%
      min-width: 60px

    &.izquierda
      > div
        background-image: linear-gradient(270deg, #0000, var(--md-sys-color-background))


    &.derecha
      display: flex
      justify-content: flex-end

      > div
        background-image: linear-gradient(270deg, var(--md-sys-color-background), #0000)


  .swiper
    width: 100%
    height: 100%
    padding: 0 60px

    .swiper-slide
      text-align: center
      font-size: 18px
      background: #fff

      /* Center slide text vertically */
      display: -webkit-box
      display: -ms-flexbox
      display: -webkit-flex
      display: flex
      -webkit-box-pack: center
      -ms-flex-pack: center
      -webkit-justify-content: center
      justify-content: center
      -webkit-box-align: center
      -ms-flex-align: center
      -webkit-align-items: center
      align-items: center

    .swiper-slide
      position: relative
      text-align: center
      font-size: 18px
      //background: #fff
      background-color: transparent
      //border-radius: 15px
      text-align: start
      //box-shadow: 0 4px 4px rgba(196, 196, 196, 0.25)

      display: flex
      flex-direction: column
      align-items: start

      h2
        text-align: start
        font-size: 24px

      div
        width: 100%

        img
          display: block
          width: 100%
          object-fit: cover

      img
        display: block
        object-fit: cover
        //border-top-left-radius: 15px
        //border-top-right-radius: 15px

  .swiper-button-next
    right: 26px !important

  .swiper-button-prev
    left: 26px !important

</style>