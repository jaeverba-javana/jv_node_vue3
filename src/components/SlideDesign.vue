<script>
import {Swiper, SwiperSlide} from "swiper/vue"
import {Navigation} from "swiper"
import { engine } from '@/engine'
import {mapState} from "pinia";
import MainStore from "@/stores/MainStore";

export default {
  name: "SlideDesarrollo",
  components: {Swiper, SwiperSlide},
  setup() {return {
    modules: [Navigation]
  }},
  data() {return {
    swipper_props: {
      breakpoints: {
        500: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 22
        },
        750: {
          slidesPerGroup: 3,
          slidesPerView: 3,
          spaceBetween: 22
        },
      },
      centerInsufficientSlides: true,
      modules: this.modules,
      //navigation: true,
      navigation: {prevEl: '#prevElDesign', nextEl: '#nextElDesign'},
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 20,
      speed: 700
    },
    text: {
      es: {
        design_title: 'Ilustraciones',
      },
      en: {
        design_title: 'Illustrations',
      }
    },
    engine,
  }},
  computed: {
    ...mapState(MainStore, {
      lang: store => store.lang
    })
  }
}
</script>

<template>
  <h1 class="gordo">{{text[lang.id].design_title}}</h1>

  <div class="mySwiper-container">
    <div class="sombra izquierda"><div></div></div>

    <swiper v-bind="swipper_props" class="mySwiperDesign">
      <swiper-slide>
        <div><img src="/img/png/slides/design/dall_1.png" alt="Vista previa del proyecto"></div>
      </swiper-slide>

      <swiper-slide>
        <div><img src="/img/png/slides/design/dall_2.png" alt="Vista previa del proyecto"></div>
      </swiper-slide>

      <swiper-slide>
        <div><img src="/img/png/slides/design/dall_3.png" alt="Vista previa del proyecto"></div>
      </swiper-slide>

      <swiper-slide>
        <div><img src="/img/png/slides/design/dall_1.png" alt="Vista previa del proyecto"></div>
      </swiper-slide>

      <swiper-slide>
        <div><img src="/img/png/slides/design/dall_2.png" alt="Vista previa del proyecto"></div>
      </swiper-slide>

      <swiper-slide>
        <div><img src="/img/png/slides/design/dall_3.png" alt="Vista previa del proyecto"></div>
      </swiper-slide>

      <swiper-slide>
        <div><img src="/img/png/slides/design/dall_1.png" alt="Vista previa del proyecto"></div>
      </swiper-slide>

      <swiper-slide>
        <div><img src="/img/png/slides/design/dall_2.png" alt="Vista previa del proyecto"></div>
      </swiper-slide>

      <swiper-slide>
        <div><img src="/img/png/slides/design/dall_3.png" alt="Vista previa del proyecto"></div>
      </swiper-slide>
    </swiper>

    <div class="sombra derecha"><div></div></div>
  </div>

  <div id="prevElDesign" class="swiper-button-prev"></div>
  <div id="nextElDesign" class="swiper-button-next"></div>

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
      background: #fff
      //border-radius: 15px
      text-align: start
      box-shadow: 0 4px 4px rgba(196, 196, 196, 0.25)


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

  .swiper-button-next-design
    right: 25px !important

  .swiper-button-prev-design
    left: 25px !important

</style>