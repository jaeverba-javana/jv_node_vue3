<template>
  <footer id="FooterTemplate">
    <div>
      <section class="template-contactame-contenedor">
        <ContactMe />
      </section>

      <section class="template_social_media_contenedor">
        <SocialMedia />
      </section>

      <p class="copyright">&copy; Javier Vergara 2022 - Todos los derechos reservados</p>
    </div>
  </footer>
</template>

<script setup>
import ContactMe from "@/components/ContactMe.vue";
import SocialMedia from "@/components/SocialMedia.vue";

//import { engine } from "@/engine";
</script>

<style lang="sass">
/* -------------------- Footer - INICIO -------------------- */

#FooterTemplate
  background-color: var(--md-sys-color-background)

  display: flex
  justify-content: center

  > div
    width: 100%
    max-width: 1150px

    > p
      color: var(--color-gray)
      text-align: center
      font:
        size: 17px

/* -------------------- Footer - FIN -------------------- */
</style>