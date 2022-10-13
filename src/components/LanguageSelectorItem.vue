<script>
export default {
  name: "LanguageSelectorItem",

  props: {
    elemento: Object,
    header: {default: false}
  }
}
</script>

<template>
  <div id="LanguageSelectorItemTemplate" :class="{header: header}">
    <div>
      <img :src="elemento.img" />
      <h3>{{elemento.idioma.toUpperCase()}}</h3>
    </div>
  </div>
</template>

<style lang="sass">
#LanguageSelectorItemTemplate
  width: 100%

  display: flex
  flex-direction: column
  justify-content: center

  > div
    height: 40px
    margin: 0 18px

    display: flex
    align-items: center
    column-gap: 10px

    img
      height: 100%
      width: 24px

    h3
      font-family: nimbus-sans, sans-serif
      font:
        weight: bold
        size: 20px
        color: var(--md-sys-color-on-primay-container)

#LanguageSelectorItemTemplate.header
  height: 100%

  > div
    margin: 18px
</style>