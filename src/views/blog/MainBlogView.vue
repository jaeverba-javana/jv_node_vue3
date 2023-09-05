<template>
  <section class="header">
    <v-card color="surface-variant">
      <v-container>
        <v-row no-gutters>
          <v-col>
            <v-skeleton-loader
                class="mx-auto border"
                width="100%"
                type="card"
                :loading="!mainPost"
            >
              <m-text :type="Theme.typography.displaySmall">Lo más nuevo</m-text>

              <router-link :to="`${$route.params.lang? '/'+$route.params.lang : ''}/blog/post/${mainPost.id}`">
                <v-card class="latest" color="surface-variant">
                  <v-container class="lastestPosts main" style="">
                    <!--                  <div class="title" style="width: 100%">-->
                    <!--                    <div style="display: flex; justify-content: space-between">-->
                    <!--                      <m-text :type="Theme.typography.displaySmall">Lo más nuevo</m-text>-->

                    <!--                      <v-icon :icon="icons.classic.light.star" color="yellow"></v-icon>-->
                    <!--                    </div>-->
                    <!--                  </div>-->


                    <div class="main">
                      <v-img :src="mainPost.img" style="height: min-content"></v-img>

                      <div class="main">
                        <m-text :type="Theme.typography.titleMedium">{{ mainPost.title }}</m-text>

                        <m-text>{{ mainPost.description }}</m-text>
                      </div>

                      <!--                    <div class="bottom">-->
                      <!--                      <div style="flex-grow: 1"></div>-->

                      <!--                      <v-btn color="tertiary" variant="text">-->
                      <!--                        vamos-->
                      <!--                        <template v-slot:append>-->
                      <!--                          <v-icon :icon="icons.classic.light.personRunning"></v-icon>-->
                      <!--                        </template>-->
                      <!--                      </v-btn>-->
                      <!--                    </div>-->
                    </div>
                  </v-container>
                </v-card>
              </router-link>



            </v-skeleton-loader>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col>
            <div class="swiper-slide">
              <SlideLastestPostsComponent v-if="latestPosts" :latestPosts="latestPosts"></SlideLastestPostsComponent>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </section>
</template>

<script>
// import {mapState} from "vuex";
import {mapState} from "pinia"
import IconStore from "@/stores/IconStore";
import {Navigation} from "swiper";
import SlideLastestPostsComponent from "@/components/blog/SlideLastestPostsComponent.vue";
// import {VSkeletonLoader} from "vuetify/lib/labs/VSkeletonLoader";
import Vibrant from "node-vibrant";
import axios from "axios";
import MText from "@/plugins/mine/components/MText/MText";
// import Vibrant from 'node-vibrant'

export default {
  name: "MainBlogView",
  components: {MText, SlideLastestPostsComponent, /*VSkeletonLoader*/},
  data: () => ({
    mainPost: {},
    latestPosts: []
  }),
  computed: {
    // ...mapState({
    //     icons: state => state.icons
    // }),
    ...mapState(IconStore, ["icons"])
  },
  mounted() {
    axios.get("/post/indice.json")
        .then(value => {
          let data = value.data

          this.mainPost = data[0]

          for (let i = 1; i < data.length; i++) {
            this.latestPosts.push(data[i])
          }
        })

    // this.posts.forEach(value => {
    //   console.log(value)
    //   var vibrant = new Vibrant(value.imgUrl)
    //
    //   vibrant.getPalette().then(palette => {
    //     // Extraer los colores dominantes
    //     const colors = Object.values(palette)
    //         .map(color => color.getRgb())
    //         .map(color => quantize(color, 8))
    //         .map(color => parseColor(color));
    //
    //     console.log(colors);
    //   }).catch(error => {
    //     console.error(error);
    //   });
    // })
  }
}
</script>

<style lang="scss">
section.header {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  h5 {
    font-size: 1.1rem;
  }

  p {
    font-size: 0.876rem;
  }

  .v-card.latest {
    box-shadow: var(--md-sys-elevation-0);
    &:hover {
      box-shadow: var(--md-sys-elevation-6);
      //cursor: pointer;
    }
  }

  .v-skeleton-loader {
    background-color: transparent;
  }

  .v-container.lastestPosts {
    &.main > div.main {
      display: grid;
      grid-template-areas: "img text" "bottom bottom";
      grid-template-columns: 5fr 6fr;
      column-gap: 1rem;
      //row-gap: 1rem;

      > .v-img {
        grid-area: img;
      }

      > .main {
        grid-area: text;
      }

      > .bottom {
        display: flex;
        grid-area: bottom;
      }
    }
  }

  .v-card {
    &.last-post {
      box-shadow: var(--md-sys-elevation-0) !important;
      z-index: 1;

      &:hover {
        box-shadow: var(--md-sys-elevation-6) !important;
      }

      .text-primary {
        color: rgb(var(--v-theme-custom-secondary)) !important;
      }
    }

    &.swiper-slide {
      overflow: visible;
      box-shadow: var(--md-sys-elevation-0);
    }

    &--reveal {
      bottom: 0;
      opacity: 1 !important;
      position: absolute;
      width: 100%;
    }
  }

}
</style>