<template>
  <div id="SocialMediaTemplate">
    <h1 class="gordo">Redes sociales</h1>

    <div>
      <div class="icons-container-">
        <svg :style="{translate: trans+'px 0'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 70">
          <path d="M140,70H0c19.33,0,35-15.67,35-35S50.67,0,70,0s35,15.67,35,35S120.67,70,140,70z"/>
        </svg>

        <div class="icons-container">
          <IconFacebook :active="medias.facebook.active" id="SocialMediaIconFacebook" />
          <IconIG :active="medias.instagram.active" id="SocialMediaIconInstagram"  />
          <IconTwitter :active="medias.twitter.active" id="SocialMediaIconTwitter"  />
        </div>
      </div>

      <div class="users-container">

      </div>
    </div>
  </div>
</template>

<script>
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconIG from "@/components/icons/IconIG.vue";
import IconTwitter from "@/components/icons/IconTwitter.vue";

export default {
  name: "SocialMedia",
  components: {IconFacebook, IconIG, IconTwitter},
  data() {return{
    medias: {
      facebook: {
        active: true
      },
      instagram: {
        active: false
      },
      twitter: {
        active: false
      }
    }
  }},
  computed: {
    trans() {
      if (this.medias.facebook.active) return -70
      else if (this.medias.instagram.active) return 0
      else return 70
    }
  },
  mounted() {
    let Vue = this

    $("#SocialMediaIconFacebook").hover(function() {
      Vue.medias.facebook.active = true
      Vue.medias.instagram.active = false
      Vue.medias.twitter.active = false
    })

    $("#SocialMediaIconInstagram").hover(function() {
      Vue.medias.facebook.active = false
      Vue.medias.instagram.active = true
      Vue.medias.twitter.active = false
    })

    $("#SocialMediaIconTwitter").hover(function() {
      Vue.medias.facebook.active = false
      Vue.medias.instagram.active = false
      Vue.medias.twitter.active = true
    })
  }
}
</script>

<style scoped lang="sass">
h1
  font-size: 60px

#SocialMediaTemplate
  width: 100%
  height: 100%
  padding: 1em

  display: flex
  justify-content: center
  flex-direction: column
  align-items: center

  color: var(--md-sys-color-on-background)

  > div > div
    width: 100%

  .icons-container-
    height: 70px
    display: flex
    justify-content: center
    align-items: center
    position: relative

  .icons-container- > .icons-container
    display: flex
    column-gap: 20px

  .icons-container- > svg
    clip-path: url(#path)
    width: 140px
    height: 70px
    position: absolute
    transition-duration: 0.4s

    path
      fill: var(--md-sys-color-inverse-surface)

  .icons-container svg
    width: 50px
    height: 50px

  .users-container
    width: 330px
    height: 50px
    background-color: var(--md-sys-color-inverse-surface)
    border-radius: 25px
</style>