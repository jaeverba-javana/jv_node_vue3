<script>
import JvText from "@/plugins/jv/lib/components/JvText/JvText";

export default {
  name: "LanguageSelectorItem",
  components: {JvText},

  props: {
    elemento: Object,
    header: {default: false}
  }
}
</script>

<template lang="pug">
div#LanguageSelectorItemTemplate(:class="{header: header}")
  div
    img(:src="elemento.img")

    jv-text {{elemento.lang.toUpperCase()}}
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

    p
      font-weight: bold
      transform: translateY(0.1rem)

#LanguageSelectorItemTemplate.header
  height: 100%

  > div
    margin: 18px
</style>