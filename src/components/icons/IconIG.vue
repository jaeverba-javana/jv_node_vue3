<script>
export default {
  name: "IconIG",
  props: {
    active: {default: false}
  },
  computed: {
    r() {
      return this.active? "24" : "0"
    }
  }
}
</script>

<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="24 24 48 48"
  >
    <defs>
      <linearGradient
          id="linear-gradient"
          x1="27.53"
          y1="68.47"
          x2="79.4"
          y2="16.6"
          gradientTransform="translate(22.02 -14.72) rotate(22.5)"
          gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#fbe18a"/>
        <stop offset="0.21" stop-color="#fcbb45"/>
        <stop offset="0.38" stop-color="#f75274"/>
        <stop offset="0.52" stop-color="#d53692"/>
        <stop offset="0.74" stop-color="#8f39ce"/>
        <stop offset="1" stop-color="#5b4fe9"/>
      </linearGradient>
    </defs>


    <g id="Design">
      <circle
          class="cls-1 bg"
          cx="48"
          cy="48"
          r="24" />

      <circle
          class="cls-2 icon"
          cx="56.5"
          cy="39.64"
          r="1.86"/>

      <path
          class="cls-2 icon"
          d="M48.21,40.17A7.83,7.83,0,1,0,56,48,7.84,7.84,0,0,0,48.21,40.17Zm0,12.85a5,5,0,1,1,5-5A5,5,0,0,1,48.21,53Z"/>

      <path
          class="cls-2 icon"
          d="M54.42,63.9H41.73a9.56,9.56,0,0,1-9.56-9.55V41.65a9.56,9.56,0,0,1,9.56-9.55H54.42A9.56,9.56,0,0,1,64,41.65v12.7A9.56,9.56,0,0,1,54.42,63.9ZM41.73,35.09a6.56,6.56,0,0,0-6.56,6.56v12.7a6.56,6.56,0,0,0,6.56,6.56H54.42A6.57,6.57,0,0,0,61,54.35V41.65a6.57,6.57,0,0,0-6.57-6.56Z"/>
    </g>




    <g id="Design">
      <defs>
        <circle
            id="mascaraIg"
            cx="48"
            cy="48"
            :r="r" />
      </defs>


      <use class="bg-m" xlink:href="#mascaraIg" style="overflow: visible" />

      <clipPath id="mascaraIg-">
        <use xlink:href="#mascaraIg" style="overflow: visible" />
      </clipPath>

      <circle
          class="icon-m"
          cx="56.5"
          cy="39.64"
          r="1.86"/>

      <path
          class="icon-m"
          d="M48.21,40.17A7.83,7.83,0,1,0,56,48,7.84,7.84,0,0,0,48.21,40.17Zm0,12.85a5,5,0,1,1,5-5A5,5,0,0,1,48.21,53Z"/>

      <path
          class="icon-m"
          d="M54.42,63.9H41.73a9.56,9.56,0,0,1-9.56-9.55V41.65a9.56,9.56,0,0,1,9.56-9.55H54.42A9.56,9.56,0,0,1,64,41.65v12.7A9.56,9.56,0,0,1,54.42,63.9ZM41.73,35.09a6.56,6.56,0,0,0-6.56,6.56v12.7a6.56,6.56,0,0,0,6.56,6.56H54.42A6.57,6.57,0,0,0,61,54.35V41.65a6.57,6.57,0,0,0-6.57-6.56Z"/>
    </g>
  </svg>
</template>

<style scoped>
.bg {
  /*noinspection CssUnresolvedCustomProperty*/
  fill: var(--md-sys-color-surface-variant);
}

.icon {
  /*noinspection CssUnresolvedCustomProperty*/
  fill: var(--md-sys-color-secondary);
}

#mascaraIg {
  /*noinspection CssUnknownTarget*/
  fill: url(#linear-gradient);
  transition-duration: 0.4s;
}

.icon-m {
  fill: white;
  /*noinspection CssUnknownTarget*/
  clip-path: url(#mascaraIg-);
}
</style>