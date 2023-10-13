<template>
  <footer id="FooterTemplate">
<!--    <Particles v-if="false"
        id="tsparticles"
        class="background"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="particlesOptions"
    />-->

    <div>
      <section class="template-contactame-contenedor">
        <ContactMe/>
      </section>

      <v-divider class="separador" :thickness="2"></v-divider>

      <section class="template_social_media_contenedor">
        <SocialMedia/>
      </section>

      <p class="copyright">&copy; Javier Vergara {{ new Date().getFullYear() }} - {{ text[mainStore.lang.id].rights }}</p>
    </div>
  </footer>
</template>

<script setup>
import ContactMe from "@/components/ContactMe.vue";
import SocialMedia from "@/components/SocialMedia.vue";
import {loadFull} from "tsparticles"
import {VDivider} from 'vuetify/lib/components/VDivider/index.mjs'
import MainStore from "@/stores/MainStore";
//import Particles from "vue3-particles"

import { engine } from "@/engine";

const mainStore = MainStore()

//let engine = motor

let text = {
  es: {
    rights: "Todos los derechos reservados"
  },
  en: {
    rights: "All rights reserved"
  },
}



/*let particlesOptions = {
  color: ['#03dac6', '#ff0266', '#000000'],
  connectParticles: true,
  fullScreen: {enable: false, zIndex: 0},
  background: {
    color: {
      value: ''
    }
  },
  fpsLimit: 20,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onHover: {
        enable: true,
        mode: 'repulse'
      },
      resize: {
        enable: true,
        delay: 0.5
      }
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 2
      },
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  particles: {
    color: ['#03dac6', '#ff0266', '#000000'/!*'#ffffff', '#770000', '#007777', '#817203', '#300c74'*!/],
    links: {
      color: engine.theme.get()==='light'? '#000000' : '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 2,
      triangles: {enable: true, frequency: 0.1}
    },
    collisions: {
      enable: true
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: true,
      speed: 0.5,
      straight: true
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 60
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      random: true,
      value: 3
    }
  },
  detectRetina: true

}*/

/*const particlesInit = async engine => {
  await loadFull(engine);
};*/
/*const particlesLoaded = async container => {
  console.log("Particles container loaded", container);
};*/
</script>

<style lang="sass">
/* -------------------- Footer - INICIO -------------------- */


.background
  //position: absolute
  height: 90vh
  top: 0
  bottom: 0
  left: 0
  right: 0
  z-index: auto
  min-width: 100%

.separador
  margin: 30px 0

@media screen and (min-width: 360px)
  .background
    //position: absolute
    //height: 100vh
    height: 100%
    width: 100%
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index: 0


#FooterTemplate
  background-color: var(--md-sys-color-background)
  overflow: hidden
  display: flex
  justify-content: center

  > div
    width: 100%
    max-width: 1150px

    > p
      color: var(--md-sys-color-on-surface)
      text-align: center
      font:
        size: 12px

/* -------------------- Footer - FIN -------------------- */
</style>