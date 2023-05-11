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
        wp: "I'm a web developer",
        gd: "and a graphic designer"
      },
      es: {
        im: "Soy",
        j: "Javier",
        v: "Vergara",
        wp: "Desarrollador web",
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
            <p id="headerIm">{{ text[engine.idiomaId].im }}</p>
            <p id="headerJ" class="headerJv">{{ text[engine.idiomaId].j }}</p>
            <p id="headerV" class="headerJv">{{ text[engine.idiomaId].v }}</p>
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

<style lang="sass" scoped>
/* --- --- --- --- HEADER - START --- --- --- --- */
#HeaderTemplate
  width: 100%
  height: 100%

  position: absolute

#HeaderPerfilTemplateContainer
  height: var(--ancho-barras)
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

      @media (min-width: 1150px)
        padding-top: 113.789px
        padding-left: 90.567px

      > div
        //padding-left: 60px
        //padding-top: 100px

        > #headerIm
          font-family: nimbus-sans, sans-serif
          font-weight: bold
          /*font-size: 75px*/
          font-size: 6.22vw
          color: rgb(var(--v-theme-primary))
          //color: var(--md-sys-color-primary)
          margin-bottom: -4.7vw

          @media (min-width: 1300px)
            font-size: 80.86px
            margin-bottom: -60px

        > #headerJ
          margin-bottom: -6vw

          @media (min-width: 1300px)
            margin-bottom: -80px


        > .headerJv
          font-family: cubano, sans-serif
          /*font-size: 109px*/
          font-size: 9.03vw
          color: rgb(var(--v-theme-on-background))


          @media (min-width: 1300px)
            font-size: 117.9px

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

        @media (min-width: 1150px)
          padding-bottom: 42.6px
          padding-left: 90.567px

        @media (max-width: 880px)
          padding-left: 0

        > p
          font-family: nimbus-sans, sans-serif
          font-weight: bold
          /*font-size: 43px*/
          font-size: 3.445vw
          color: rgb(var(--v-theme-primary))

          @media (min-width: 1150px)
            font-size: 44.789px

          @media (max-width: 880px)
            text-align: center

    > #headerPhoto
      right: 0
      top: 15px
      //background-color: #0004
      position: absolute
      width: 50%
      height: 100%
      padding: var(--ancho-barras) 0
      overflow: hidden

      @media (min-width: 800px)
        top: 22px

      @media (min-width: 1150px)
        top: 30px

      @media (max-width: 800px)
        width: calc(40vw + 72px)

      > img
        max-width: 100%
        max-height: 100%
        position: absolute
        bottom: -100px
        bottom: calc(calc(-2.93vw - calc(var(--ancho-barras))) * 0.05vw)

        right: 44.6342px

        @media (max-width: 1299px)
          right: 3.4334vw

        @media (max-width: 1149px)
          right: calc(calc(3.433vw * 4) - 118.4523px)

        @media (max-width: 549px)
          right: calc(calc(3.433vw * 1) - 52.35935px)
          //right: calc(calc(3.433vw * 1) - 61.8012px)



      //> img
      //  //max-width: 100%
      //  height: calc(60vw * 1.03)
      //  //max-height: 100%
      //  position: absolute
      //  //right: 40px
      //  bottom: calc(calc(-2.93vw - var(--ancho-barras)) * 0.05vw)
      //  //bottom: -100px
      //
      //  @media (max-width: 1149px)
      //    right: calc(calc(3.433vw * 4) - 120px)


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