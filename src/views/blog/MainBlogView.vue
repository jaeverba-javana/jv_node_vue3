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
                        >
                            <v-card class="last-post" color="surface-variant" min-width="100%">
                                <template v-slot:title>
                                    <div style="display: flex; justify-content: space-between">
                                        <h1>Lo más nuevo</h1>

                                        <v-icon :icon="icons.classic.light.star" color="yellow"></v-icon>
                                    </div>
                                </template>

                                <v-card color="surface-variant">

                                    <v-container class="lastestPosts main" style="">
                                        <div>
                                            <v-img src="/img/png/fondos/arlo-y-spot-en-el-gran-dinosaurio_2560x1440_xtrafondos.com.jpg"></v-img>

                                            <div>
                                                <v-card-title>
                                                    <h2>Cómo caminar sobre el agua</h2>
                                                </v-card-title>

                                                <v-card-text>
                                                    <p>Este es el texto de contenido de la pagina</p>

                                                </v-card-text>

                                                <v-card-actions>
                                                    <div style="flex-grow: 1"></div>

                                                    <v-btn color="tertiary">
                                                        vamos
                                                        <template v-slot:append>
                                                            <v-icon :icon="icons.classic.light.personRunning"></v-icon>
                                                        </template>
                                                    </v-btn>
                                                </v-card-actions>
                                            </div>
                                        </div>
                                    </v-container>

                                    <!--                <v-container style="">
                                                      <v-row no-gutters>
                                                        <v-col cols="5">
                                                          <v-img src="/img/png/fondos/arlo-y-spot-en-el-gran-dinosaurio_2560x1440_xtrafondos.com.jpg"></v-img>
                                                        </v-col>

                                                        <v-col cols="auto" style="display: flex; flex-direction: column">
                                                          <v-card-title>
                                                            <h1>Cómo caminar sobre el agua</h1>
                                                          </v-card-title>

                                                          <v-card-text>
                                                            Este es el texto de contenido de la pagina
                                                          </v-card-text>

                                                          <v-card-actions>
                                                            <div style="flex-grow: 1"></div>

                                                            <v-btn>
                                                              vamos
                                                              <template v-slot:append>
                                                                <v-icon :icon="icons.classic.light.personRunning"></v-icon>
                                                              </template>
                                                            </v-btn>
                                                          </v-card-actions>
                                                        </v-col>
                                                      </v-row>
                                                    </v-container>-->
                                </v-card>
                            </v-card>
                        </v-skeleton-loader>
                    </v-col>
                </v-row>

                <v-row no-gutters>
                    <v-col>
                        <v-card color="surface-variant" class="swiper-slide">
                            <SlideLastestPostsComponent></SlideLastestPostsComponent>
                        </v-card>
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
// import Vibrant from 'node-vibrant'

export default {
    name: "MainBlogView",
    components: {SlideLastestPostsComponent, /*VSkeletonLoader*/},
    data: () => ({}),
    computed: {
        // ...mapState({
        //     icons: state => state.icons
        // }),
        ...mapState(IconStore, ["icons"])
    },
    mounted() {
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

  .v-container.lastestPosts {
    &.main > div {
      display: grid;
      grid-template-columns: 5fr 6fr;
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