<script>
import HeaderPerfil from "@/components/HeaderPerfil.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import { engine } from "@/engine"

export default {
  name: "headerVue",
  components: {HeaderPerfil, HeaderNav},
  data() {return{
    engine,
    text: {
      en: {
        im: "I'm",
        j: "Javier",
        v: "Vergara",
        wp: "I'm a web programmer",
        gd: "and a graphic designer"
      },
      es: {
        im: "Yo soy",
        j: "Javier",
        v: "Vergara",
        wp: "Soy programador web",
        gd: "y diseñador gráfico"
      }
    }
  }}
}

</script>

<template>
  <header id="HeaderTemplate">
    <div id="HeaderPerfilTemplateContainer"
         class="md-elevation-16px template container mdc-elevation--z6">
      <HeaderPerfil />
    </div>

    <div id="HeaderMainTemplateContainer">
      <div>
        <div id="headerSoy">
          <div>
            <p id="headerIm">{{text[engine.idiomaId].im}}</p>
            <p id="headerJ" class="headerJv">{{text[engine.idiomaId].j}}</p>
            <p id="headerV" class="headerJv">{{text[engine.idiomaId].v}}</p>
          </div>
        </div>

        <div id="headerPhoto"><img src="/img/png/yo/MesaDeTrabajo_1-1_0,25x2.png"
                                   alt="Foto de Javier Vergara, osea: yo"></div>

        <div id="headerPresentation">
          <div>
            <p>{{text[engine.idiomaId].wp}}</p>
            <p>{{text[engine.idiomaId].gd}}</p>
          </div>
        </div>
      </div>
    </div>

    <div id="HeaderNavTemplateContainer"
         class="md-elevation-16px mdc-elevation--z6">
      <HeaderNav />
    </div>
  </header>
</template>

<style lang="sass">
/* --- --- --- --- HEADER - START --- --- --- --- */
#HeaderTemplate
  width: 100%
  height: 100%

  position: absolute

#HeaderPerfilTemplateContainer
  height: 60px
  z-index: 101

  transition: all 0.2s ease-in-out

  position: fixed
  left: 0
  right: 0

#HeaderMainTemplateContainer
  left: 0
  right: 0
  height: 100%
  padding: var(--ancho-barras) 0
  background-color: var(--md-sys-color-background)
  display: flex
  justify-content: center
  position: absolute

  > div
    top: 0
    //background-color: #fff4
    height: 100%
    width: 100%
    max-width: 1150px
    position: absolute
    padding: var(--ancho-barras) 0


    > #headerSoy
      left: 0
      top: 0px
      bottom: var(--ancho-barras)
      //background-color: #0004
      position: absolute
      width: 100%
      height: 100%
      padding:
        top: calc(var(--ancho-barras) + 4.68vw)
        left: 7.88vw
        right: 0
        bottom: var(--ancho-barras)

      > div
        //padding-left: 60px
        //padding-top: 100px

        > #headerIm
          font-family: nimbus-sans, sans-serif
          font-weight: bold
          /*font-size: 75px*/
          font-size: 6.22vw
          color: var(--md-sys-color-primary)
          margin-bottom: -4.7vw

        > #headerJ
          margin-bottom: -6vw

        > .headerJv
          font-family: cubano, sans-serif
          /*font-size: 109px*/
          font-size: 9.03vw
          color: var(--md-sys-color-on-background)

        > p
          padding: 0
          margin: 0
          border: 0


    > #headerPresentation
      bottom: var(--ancho-barras)
      //background-color: #0004
      position: absolute
      width: 100%

      > div
        padding-left: 7.88vw
        //padding-bottom: 50px
        padding-bottom: calc(calc(4vw * 0.5) + calc(1vw * 4 - 27px))

        > p
          font-family: nimbus-sans, sans-serif
          font-weight: bold
          /*font-size: 43px*/
          font-size: 3.445vw
          color: var(--md-sys-color-primary)

          @media (max-width: 880px)
            text-align: center

    > #headerPhoto
      right: 0
      top: 0px
      //background-color: #0004
      position: absolute
      width: 50%
      height: 100%
      padding: var(--ancho-barras) 0
      overflow: hidden

      > img
        //max-width: 100%
        height: calc(60vw * 1.03)
        //max-height: 100%
        position: absolute
        //right: 40px
        right: 3.4334vw
        bottom: calc(calc(-2.93vw - var(--ancho-barras)) * 0.05vw)
        //bottom: -100px

        @media (max-width: 1149px)
          right: calc(calc(3.433vw * 4) - 120px)


#HeaderNavTemplateContainer
  height: var(--ancho-barras)
  z-index: 100

  position: absolute
  bottom: 0
  width: 100%

#HeaderNavTemplateContainer.paso
  position: fixed
  top: var(--ancho-barras)
/* --- --- --- --- HEADER - END --- --- --- --- */
</style>