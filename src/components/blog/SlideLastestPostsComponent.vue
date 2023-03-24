<template>
  <v-container class="lastestPosts">
    <swiper wrapper-tag="ul" v-bind="swipper_props" class="mySwiper"><!-- swiper main blog -->
      <swiper-slide tag="li" v-for="(item, index) in posts" :key="index">
        <v-card elevation="0" width="100%" height="100%" class="mx-auto miniPost" color="surface-variant">
          <div class="d-flex align-center justify-center swiper-item" style=" overflow: hidden">
            <v-img
                width="100%"
                :src="item.imgUrl"
                cover
            >
              <template v-slot:placeholder style="background-color: black">
                <div class="d-flex align-center justify-center fill-height"
                     :style="{'background-color': item.primaryColor}">
                  <v-progress-circular
                      color="grey-lighten-4"
                      indeterminate
                  ></v-progress-circular>
                </div>
              </template>
            </v-img>
          </div>


          <v-card-title style="padding-bottom: 0">
            <h5 style="margin-bottom: -5px">
              {{ item.title }}
            </h5>
          </v-card-title>

          <v-card-subtitle>
            <p>algún subtítulo</p>
          </v-card-subtitle>

          <v-card-actions>
            <p><span class="fecha">{{ item.fecha }}</span></p>
            <div style="flex-grow: 1"></div>
            <v-btn :icon="$store.state.icons.classic.solid.angleUp"
                   @click.stop="item.escondido.mostrar = !item.escondido.mostrar"></v-btn>
            <!--                            <v-btn :icon="icons.classic.light.angleUp"></v-btn>-->
          </v-card-actions>

          <v-expand-transition>
            <v-card
                v-if="item.escondido.mostrar"
                class="v-card--reveal"
                style="height: 100%;"
                color="surface-variant-darken-1"
            >
              <div style="display: flex; flex-direction: column; height: 100%">
                <v-card-text class="">
                  <p class="text-h4 text--primary">
                    Origin
                  </p>
                  <p>late 16th century (as a noun denoting a place where alms were distributed): ’ </p>
                </v-card-text>

                <div style="flex-grow: 1"></div>


                <v-card-actions>
                  <div style="flex-grow: 1"></div>
                  <v-btn :icon="$store.state.icons.classic.solid.angleDown"
                         @click.stop="item.escondido.mostrar = !item.escondido.mostrar"></v-btn>
                  <!--                            <v-btn :icon="icons.classic.light.angleUp"></v-btn>-->
                </v-card-actions>
              </div>

            </v-card>
          </v-expand-transition>
        </v-card>
      </swiper-slide>
    </swiper>


    <div id="prevLastestPosts" class="swiper-button-prev swiperNavigationButton"></div>
    <div id="nextLastestPosts" class="swiper-button-next swiperNavigationButton"></div>
  </v-container>
</template>

<script>
import {Navigation} from "swiper";
// import {mapState} from "vuex";
import {Swiper, SwiperSlide} from "swiper/vue"

export default {
  name: "SlideLastestPostsComponent",
  components: {Swiper, SwiperSlide},
  setup() {
    return {
      modules: [Navigation]
    }
  },
  data() {
    return {
      posts: [
        {
          imgUrl: 'public/img/png/fondos/gato con botas.png',
          title: 'Título de la página',
          subtitle: 'Algún subtítulo',
          escondido: {
            mostrar: false,
          },
          primaryColor: '#E9902F',
          fecha: '21/01/2029'
        }, {
          imgUrl: 'public/img/png/fondos/pequeño gtut.png',
          title: 'Título de la página',
          subtitle: 'Algún subtítulo',
          escondido: {
            mostrar: false,
          },
          primaryColor: '#262C3A',
          fecha: '21/01/2029'
        }, {
          imgUrl: 'public/img/png/fondos/personajes-de-hora-de-aventura.jpg',
          title: 'Título de la página',
          subtitle: 'Algún subtítulo',
          escondido: {
            mostrar: false,
          },
          primaryColor: '#262C3A',
          fecha: '21/01/2029'
        }, {
          imgUrl: 'public/img/png/fondos/rick-sanchez-foto-policial-de-rick-y-morty.jpg',
          title: 'Título de la página',
          subtitle: 'Algún subtítulo',
          escondido: {
            mostrar: false,
          },
          primaryColor: '#262C3A',
          fecha: '21/01/2029'
        }, {
          imgUrl: 'public/img/png/fondos/luigi-the-super-mario-bros.jpg',
          title: 'Título de la página',
          subtitle: 'Algún subtítulo',
          escondido: {
            mostrar: false,
          },
          primaryColor: '#262C3A',
          fecha: '21/01/2029'
        }, {
          imgUrl: 'public/img/png/fondos/principito.png',
          title: 'Título de la página',
          subtitle: 'Algún subtítulo',
          escondido: {
            mostrar: false,
          },
          primaryColor: '#50C8AF',
          fecha: '21/01/2029'
        }
      ],
      swipper_props: {
        breakpoints: {
          960: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 22
          },
          600: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 22
          }
        },
        centerInsufficientSlides: true,
        modules: this.modules,
        //navigation: true,
        navigation: {prevEl: '#prevLastestPosts', nextEl: '#nextLastestPosts'},
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 700
      },
    }
  },
  // computed: {
  //   ...mapState({
  //     icons: state => state.icons
  //   })
  // },
  // created() {
  //   this.swipper_props.modules = this.modules
  // }
}
</script>

<style scoped lang="sass">
.v-container.lastestPosts
  padding: 0

.swiper
  padding: 1em
  @media (max-width: 550px)
    padding: 3px

  p .fecha
    font-size: 14px
    opacity: 0.7
    padding-left: 1em

.swiper-slide .v-card
  box-shadow: var(--md-sys-elevation-2) !important
  &:hover
    box-shadow: var(--md-sys-elevation-10) !important

.swiperNavigationButton
  top: 40%
  &.swiper-button-prev
    left: 0px
  &.swiper-button-next
    right: 0px
  &:after
    font-size: 45px


</style>