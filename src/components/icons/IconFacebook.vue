<script>
export default {
  name: "IconFacebook",
  props: {
    active: {default: false}
  },
  computed: {
  }
}
</script>

<template>
  <svg
      :class="{active: active}"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="24 24 48 48"
  >
    <g id="Design">
      <circle
          class="bg"
          cx="48"
          cy="48"
          r="24"/>

      <path
          class="icon"
          d="M44,48.12v14.7a.38.38,0,0,0,.39.38h5.45a.38.38,0,0,0,.39-.38V47.88h4a.39.39,0,0,0,.39-.35L55,43a.39.39,0,0,0-.38-.42H50.25V39.42a1.35,1.35,0,0,1,1.35-1.36h3a.39.39,0,0,0,.39-.38v-4.5a.39.39,0,0,0-.39-.38H49.5A5.47,5.47,0,0,0,44,38.27v4.34H41.29a.38.38,0,0,0-.38.39v4.5a.38.38,0,0,0,.38.38H44Z"/>
    </g>


    <g>
      <defs>
        <circle
            id="mascaraFacebookC"
            class="bg-m"
            cx="48"
            cy="48"
            r="24"/>
      </defs>

      <use xlink:href="#mascaraFacebookC" style="overflow: visible" />


      <clipPath id="mascaraFacebook">
        <use xlink:href="#mascaraFacebookC" style="overflow: visible" />
      </clipPath>


      <path
          class="icon-m"
          d="M44,48.12v14.7a.38.38,0,0,0,.39.38h5.45a.38.38,0,0,0,.39-.38V47.88h4a.39.39,0,0,0,.39-.35L55,43a.39.39,0,0,0-.38-.42H50.25V39.42a1.35,1.35,0,0,1,1.35-1.36h3a.39.39,0,0,0,.39-.38v-4.5a.39.39,0,0,0-.39-.38H49.5A5.47,5.47,0,0,0,44,38.27v4.34H41.29a.38.38,0,0,0-.38.39v4.5a.38.38,0,0,0,.38.38H44Z"/>
    </g>

  </svg>
</template>

<style scoped lang="sass">
svg
  .bg
    fill: var(--md-sys-color-inverse-surface)

  .icon
    fill: var(--md-sys-color-inverse-on-surface)

  #mascaraFacebookC
    fill: #3c5a99
    transition-duration: 0.4s
    transform-origin: 48px 48px
    transform: scale(0)

  .icon-m
    fill: white
    clip-path: url(#mascaraFacebook)

svg.active
  #mascaraFacebookC
    transform: scale(1)
</style>