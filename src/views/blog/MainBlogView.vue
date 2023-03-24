<template>
  <section class="header">
    <v-card color="surface-variant">
      <v-container>
        <v-row no-gutters>
          <v-col>
            <v-card color="surface-variant" elevation="0">
              <template v-slot:title>
                <div style="display: flex; justify-content: space-between">
                  <h1>Lo más nuevo</h1>

                  <v-icon :icon="icons.classic.light.star" color="yellow"></v-icon>
                </div>
              </template>

              <v-card color="surface-variant">

                <v-container class="lastestPosts main" style="">
                  <div>
                    <v-img src="public/img/png/fondos/arlo-y-spot-en-el-gran-dinosaurio_2560x1440_xtrafondos.com.jpg"></v-img>

                    <div>
                      <v-card-title>
                        <h2>Cómo caminar sobre el agua</h2>
                      </v-card-title>

                      <v-card-text>
                        <p>Este es el texto de contenido de la pagina</p>

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
                    </div>
                  </div>
                </v-container>

<!--                <v-container style="">-->
<!--                  <v-row no-gutters>-->
<!--                    <v-col cols="5">-->
<!--                      <v-img src="public/img/png/fondos/arlo-y-spot-en-el-gran-dinosaurio_2560x1440_xtrafondos.com.jpg"></v-img>-->
<!--                    </v-col>-->

<!--                    <v-col cols="auto" style="display: flex; flex-direction: column">-->
<!--                      <v-card-title>-->
<!--                        <h1>Cómo caminar sobre el agua</h1>-->
<!--                      </v-card-title>-->

<!--                      <v-card-text>-->
<!--                        Este es el texto de contenido de la pagina-->
<!--                      </v-card-text>-->

<!--                      <v-card-actions>-->
<!--                        <div style="flex-grow: 1"></div>-->

<!--                        <v-btn>-->
<!--                          vamos-->
<!--                          <template v-slot:append>-->
<!--                            <v-icon :icon="icons.classic.light.personRunning"></v-icon>-->
<!--                          </template>-->
<!--                        </v-btn>-->
<!--                      </v-card-actions>-->
<!--                    </v-col>-->
<!--                  </v-row>-->
<!--                </v-container>-->
              </v-card>
            </v-card>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col>
            <v-card color="surface-variant" elevation="0" class="v-card ">
              <SlideLastestPostsComponent></SlideLastestPostsComponent>


<!--              <v-container class="lastestPosts">
                <ul class="lastestPosts">
                  <li v-for="(item, index) in posts" :key="index" class="miniPost">
                    <v-card elevation="0" width="100%" height="100%" class="mx-auto miniPost" color="surface-variant" >
                      <div class="d-flex align-center justify-center" style=" overflow: hidden">
                        <v-img
                            width="100%"
                            :src="item.imgUrl"
                            cover
                        >
                          <template v-slot:placeholder style="background-color: black">
                            <div class="d-flex align-center justify-center fill-height" :style="{'background-color': item.primaryColor}">
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
                        <div style="flex-grow: 1"></div>
                        <v-btn :icon="icons.classic.solid.angleUp"
                               @click="item.escondido.mostrar = !item.escondido.mostrar"></v-btn>
                        &lt;!&ndash;                            <v-btn :icon="icons.classic.light.angleUp"></v-btn>&ndash;&gt;
                      </v-card-actions>

                      <v-expand-transition>
                        <v-card
                            v-if="item.escondido.mostrar"
                            class="v-card&#45;&#45;reveal"
                            style="height: 100%;"
                            color="surface-variant-darken-1"
                        >
                          <div style="display: flex; flex-direction: column; height: 100%">
                            <v-card-text class="">
                              <p class="text-h4 text&#45;&#45;primary">
                                Origin
                              </p>
                              <p>late 16th century (as a noun denoting a place where alms were distributed): ’ </p>
                            </v-card-text>

                            <div style="flex-grow: 1"></div>


                            <v-card-actions>
                              <div style="flex-grow: 1"></div>
                              <v-btn :icon="icons.classic.solid.angleDown"
                                     @click="item.escondido.mostrar = !item.escondido.mostrar"></v-btn>
                              &lt;!&ndash;                            <v-btn :icon="icons.classic.light.angleUp"></v-btn>&ndash;&gt;
                            </v-card-actions>
                          </div>

                        </v-card>
                      </v-expand-transition>
                    </v-card>
                  </li>
                </ul>
              </v-container>-->

<!--              <v-container >
                <v-row tag="ul">
                  <v-col tag="li" v-for="(item, index) in posts" :key="index" class="miniPost">
                    <v-card width="100%" height="100%" class="mx-auto miniPost" color="surface-variant" >
                      <div class="d-flex align-center justify-center" style=" overflow: hidden">
                        <v-img
                            width="100%"
                            :src="item.imgUrl"
                            cover
                        >
                          <template v-slot:placeholder style="background-color: black">
                            <div class="d-flex align-center justify-center fill-height" :style="{'background-color': item.primaryColor}">
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
                        <div style="flex-grow: 1"></div>
                        <v-btn :icon="icons.classic.solid.angleUp"
                               @click="item.escondido.mostrar = !item.escondido.mostrar"></v-btn>
                        &lt;!&ndash;                            <v-btn :icon="icons.classic.light.angleUp"></v-btn>&ndash;&gt;
                      </v-card-actions>

                      <v-expand-transition>
                        <v-card
                            v-if="item.escondido.mostrar"
                            class="v-card&#45;&#45;reveal"
                            style="height: 100%;"
                            color="surface-variant-darken-1"
                        >
                          <div style="display: flex; flex-direction: column; height: 100%">
                            <v-card-text class="">
                              <p class="text-h4 text&#45;&#45;primary">
                                Origin
                              </p>
                              <p>late 16th century (as a noun denoting a place where alms were distributed): ’ </p>
                            </v-card-text>

                            <div style="flex-grow: 1"></div>


                            <v-card-actions>
                              <div style="flex-grow: 1"></div>
                              <v-btn :icon="icons.classic.solid.angleDown"
                                     @click="item.escondido.mostrar = !item.escondido.mostrar"></v-btn>
                              &lt;!&ndash;                            <v-btn :icon="icons.classic.light.angleUp"></v-btn>&ndash;&gt;
                            </v-card-actions>
                          </div>

                        </v-card>
                      </v-expand-transition>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>-->
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </section>
</template>

<script>
import {mapState} from "vuex";
import {Navigation} from "swiper";
import SlideLastestPostsComponent from "@/components/blog/SlideLastestPostsComponent.vue";
// import Vibrant from 'node-vibrant'

export default {
  name: "MainBlogView",
  components: {SlideLastestPostsComponent, },
  data: () => ({

  }),
  computed: {
    ...mapState({
      icons: state => state.icons
    })
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

.v-container.lastestPosts {
  &.main > div {
    display: grid;
    grid-template-columns: 5fr 6fr;
  }
}

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>