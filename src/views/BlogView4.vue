<template>
  <div id="HeaderTemplateContainer">
    <Header/>
  </div>

  <v-layout>
    <v-navigation-drawer
        color="grey-darken-1"
        permanent
        width="250"
    >
      <v-list class="myList">
        <v-list-subheader>Índice</v-list-subheader>

        <v-list-group value="valor">
          <template v-slot:activator="{ props }">
            <v-list-item
                v-bind="props"
                title="Users"
                rounded="xl"
            ></v-list-item>
          </template>

          <v-list-group value="Admin" active-color="red">
            <template v-slot:activator="{ props }">
              <v-list-item
                  v-bind="props"
                  title="Admin"
                  rounded="xl"
              ></v-list-item>
            </template>

            <v-list-item
                v-for="([title, icon], i) in admins"
                :key="i"
                :title="title"
                :value="title"
                rounded="xl"
                subtitle="subtítulo"
            ></v-list-item>
          </v-list-group>

          <v-list-group value="Actions">
            <template v-slot:activator="{ props }">
              <v-list-item
                  v-bind="props"
                  title="Actions"
              ></v-list-item>
            </template>

            <v-list-item
                v-for="([title, icon], i) in cruds"
                :key="i"
                :value="title"
                :title="title"
                rounded="xl"
            ></v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
        color="grey-lighten-1"
        location="right"
        permanent
        width="150"
    ></v-navigation-drawer>

    <v-main>
      <v-container
          class="d-flex justify-center align-center text-h5"
          style="min-height: 300px;"
      >
        <div style="min-width: 100%; height: 200vh; background-color: white"></div>
      </v-container>
    </v-main>
  </v-layout>

  <!--  <div class="main-container-general">

    </div>-->

  <hr>

  <div id="FooterTemplateContainer">
    <Footer/>
  </div>
</template>

<script setup>
import {RouterView} from "vue-router";
import Header from "@/components/blog/Header.vue";
import Footer from "@/components/Footer.vue";


let open= ['Users'];
let admins = [
  ['Management', 'jvi-xmark-classic-solid'],
  ['Settings', 'jvi-xmark-classic-solid'],
]
let cruds = [
  ['Create', 'jvi-xmark-classic-solid'],
  ['Read', 'jvi-xmark-classic-solid'],
  ['Update', 'jvi-xmark-classic-solid'],
  ['Delete', 'jvi-xmark-classic-solid'],
]

/*export default {
  name: "BlogView"
}*/
</script>

<style scoped lang="sass">
@use "@/settings.scss"



//#HeaderTemplateContainer
//height: 100vh
////min-height: 830px
//max-height: calc(calc(60vw * 0.9) + 75px)
//
//@media (min-width: 1328px)
//  max-height: 792.115px
//
//@media (max-width: 500px)
//  max-height: calc(calc(60vw * 0.8) + 105px)

.main-container-general
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  justify-content: center
  background-color: var(--md-sys-color-surface-variant)

  > *
    width: 100%
    max-width: 1150px
    background-color: var(--md-sys-color-surface)
    display: flex
    flex-direction: column
    row-gap: 50px

hr
  background-color: var(--md-sys-color-primary-container)
  border: 0
  height: 5px

#FooterTemplateContainer
  //position: absolute
  width: 100%

</style>