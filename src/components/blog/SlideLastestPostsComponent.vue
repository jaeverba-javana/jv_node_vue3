<template>
    <v-container class="lastestPosts">
        <swiper :lazyPreloadPrevNext="3" wrapper-tag="ul" v-bind="swipper_props" class="mySwiper">
            <!-- swiper main blog -->
<!--            <swiper-slide tag="li">
                <v-skeleton-loader
                    boilerplate
                    loading-text="cargando"
                        type="card, actions"
                        min-height="100%"
                ></v-skeleton-loader>
            </swiper-slide>-->

            <swiper-slide tag="li" v-for="(item, index) in latestPosts" :key="index">
                <v-skeleton-loader
                    type="card, actions"
                    min-height="100%"
                >
                    <v-card @click="click(item)" elevation="0" width="100%" height="100%" class="mx-auto miniPost" color="surface-variant">
                      <div class="d-flex align-center justify-center swiper-item" style=" overflow: hidden">
                        <v-img
                            width="100%"
                            :src="itemImg(item)"
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
                        <jv-text typography="titleSmall" style="margin-bottom: -5px">
                          {{ item.title }}
                        </jv-text>
                      </v-card-title>

                      <!--                        <v-card-subtitle>-->
                      <!--                            <m-text :type="Theme.typography.labelLarge">algún subtítulo</m-text>-->
                      <!--                        </v-card-subtitle>-->

                      <v-card-actions>
                        <jv-text typography="labelSmall"><span class="fecha">{{ item.date }}</span></jv-text>
                        <div style="flex-grow: 1"></div>
                        <v-btn :icon="icons.classic.solid.angleUp"
                               @click.stop="openId? item.id === openId? openId = '' : openId = item.id : openId = item.id"></v-btn>
                        <!--                            <v-btn :icon="icons.classic.light.angleUp"></v-btn>-->
                      </v-card-actions>

                      <v-expand-transition class="v-expand-transition">
                        <v-card
                            v-if="openId === item.id"
                            class="v-card--reveal"
                            style="height: 100%;"
                            color="surface-variant-darken-1"
                        >
                          <div style="display: flex; flex-direction: column; height: 100%">
                            <v-card-text class="">
                              <jv-text>{{item.description}}</jv-text>
                            </v-card-text>

                            <div style="flex-grow: 1"></div>


                            <v-card-actions style="position: absolute; left: 0; right: 0; bottom: 0">
                              <div style="flex-grow: 1"></div>
                              <v-btn :icon="icons.classic.solid.angleDown"
                                     @click.stop="openId = ''"></v-btn>
                              <!--                            <v-btn :icon="icons.classic.light.angleUp"></v-btn>-->
                            </v-card-actions>
                          </div>

                        </v-card>
                      </v-expand-transition>
                    </v-card>
                </v-skeleton-loader>

            </swiper-slide>
        </swiper>

        <v-icon id="prevLastestPosts" class="swiper-button-prev swiperNavigationButton"
                :icon="icons.classic.solid.angleLeft"></v-icon>
        <v-icon id="nextLastestPosts" class="swiper-button-next swiperNavigationButton"
                :icon="icons.classic.solid.angleRight"></v-icon>
        <!--    <div id="prevLastestPosts" class="swiper-button-prev swiperNavigationButton"></div>-->
        <!--    <div id="nextLastestPosts" class="swiper-button-next swiperNavigationButton"></div>-->
    </v-container>
</template>

<script>
import IconStore from "@/stores/IconStore";
import {Navigation} from "swiper";
import {mapState} from "pinia";
import {Swiper, SwiperSlide} from "swiper/vue"

export default {
    name: "SlideLastestPostsComponent",
    components: {Swiper, SwiperSlide},
    props: {
      latestPosts: Object
    },
    setup() {
        return {
            modules: [Navigation]
        }
    },
    data() {
        return {
          opened: {},
          openId: '',

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
  methods: {
      click(item) {
        this.$router.push(`${this.$route.params.lang? '/'+this.$route.params.lang : ''}/blog/post/${item.id}`)
      },
    itemImg(item) {
      return (process.env.NODE_ENV === 'development'? '/img/webP/' : 'https://jaeverba-javana.github.io/img/webP/') +item.id+'.webp'

    }
  },
    computed: {
        ...mapState(IconStore, {
            icons: store => store.icons
        }),
    },
  created() {
    for (let i = 0; i < this.latestPosts.length; i++) {
      this.opened = false
    }
  }
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
    opacity: 0.7
    padding-left: 1em

.swiper-slide .v-card
  box-shadow: var(--md-sys-elevation-2) !important

  &:hover
    box-shadow: var(--md-sys-elevation-8) !important

.swiperNavigationButton
  top: 40%
  --ub: calc(100% - 1rem)

  &.swiperNavigationButton
    color: rgb(var(--v-theme-custom-secondary))

    &::after
      content: none

  &.swiper-button-prev
    left: auto
    right: var(--ub)

  &.swiper-button-next
    right: auto
    left: var(--ub)

.v-card--reveal
  .v-card-text
    overflow: auto
    &::-webkit-scrollbar
      display: none


</style>