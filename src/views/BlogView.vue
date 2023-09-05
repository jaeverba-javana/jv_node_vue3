<script lang="ts">

import {useDisplay} from "vuetify";
import {mapMutations, mapState} from "vuex";
import {mapState as piniaMapState} from "pinia"
import IconStore from "@/stores/IconStore";
import {engine} from "@/engine"
import ThemeToggler from "@/components/ThemeToggler.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import {defineComponent} from "vuetify/lib/util/index.mjs";
import Panel from "@/views/Panel.vue";
import MainStore from "@/stores/MainStore";
import MText from "@/plugins/jv/lib/components/JvText/JvText";
import THEME from "@/plugins/jv/theme/constants"
import JvText from "@/plugins/jv/lib/components/JvText/JvText";


let open = ['Users'];
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

export default {
  name: "blog view",
  components: {JvText, MText, Panel, ThemeToggler, LanguageSelector, HeaderNav},
  data: () => ({
    windowSize: {},
    admins, cruds, engine,
    text: {
      es: {
        rights: "Todos los derechos reservados",
        drawBar: {
          left: {
            home: 'Inicio',
            personal: 'Mi portafolio personal'
          },
          right: {
            content: "Contenido"
          }
        }
      },
      en: {
        rights: "All rights reserved",
        drawBar: {
          left: {
            home: 'Home',
            personal: 'My personal portfolio'
          },
          right: {
            content: "Content"
          }
        }
      }
    },
    showRightSideBar: false,
    sections: 0,
    THEME
  }),
  setup() {
    let {mobile, sm, md, name} = useDisplay()

    return {mobile, sm, md, name}
  },
  computed: {
    /*engine() {
        return engine
    },*/
    ...mapState({
      blogView: state => state.views.blogView
    }),
    ...piniaMapState(IconStore, {
      icons: store => store.icons
    }),
    ...piniaMapState(MainStore, {
      lang: store => store.lang
    })
  },
  methods: {
    ...mapMutations(["toggleActivationOfLeftVNavigationDrawerComponent"]),
    onResize() {
      console.log('size: mobile:', this.mobile)
      console.log('size: sm:', this.sm)
      console.log('size: md:', this.md)
      console.log('size: name:', this.name)
    },
    onHomeClick() {
      console.log('Home have been clicked')
      this.$router.push('/blog')
    },
    dataLoaded(e) {
      console.log(e)

      this.sections = e
      this.showRightSideBar = true
    }
  },
  mounted() {
    this.onResize()
  },
  beforeCreate() {

  }
}

/*export default {
  name: "BlogView"
}*/
</script>

<template lang="pug">
v-app-bar(color="primary-container" v-resize="onResize")
  //   density = "prominent"

  template(v-slot:prepend)
    v-skeleton-loader(style={
      height: 'var(--ancho-barras)',
      "min-width": 'var(--ancho-barras)',
      "background-color": "transparent"
    } )
      v-app-bar-nav-icon(v-if="mobile" @click="toggleActivationOfLeftVNavigationDrawerComponent()")
      div(v-else style="height: 60px; width: 56px")
        LanguageSelector

  v-skeleton-loader(type="img" style={
    height: 'var(--ancho-barras)',
    width: 'var(--ancho-barras)',
    "background-color": "transparent"
  } )
    router-link(to="/" style="width: 100%; height: 100%")
      v-img(style="background-color: transparent height: 100%" alt="logo" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIj4NCiAgICA8ZGVmcz4NCiAgICAgICAgPHN0eWxlPg0KICAgICAgICAgICAgLmNscy0xew0KICAgICAgICAgICAgICAgIGlzb2xhdGlvbjppc29sYXRlOw0KICAgICAgICAgICAgfQ0KDQogICAgICAgICAgICAuY2xzLTJ7ZmlsbDpyZ2JhKDI1NSwxMjEsMCwuNyk7fQ0KICAgICAgICAgICAgLmNscy0ze29wYWNpdHk6LjM7fQ0KICAgICAgICAgICAgLmNscy00e2ZpbGw6cmVkO30NCiAgICAgICAgICAgIC5jbHMtNCwuY2xzLTUsLmNscy02e21peC1ibGVuZC1tb2RlOm11bHRpcGx5O30NCiAgICAgICAgICAgIC5jbHMtNXtmaWxsOmxpbWU7fQ0KICAgICAgICAgICAgLmNscy01LC5jbHMtNntvcGFjaXR5Oi41O30NCiAgICAgICAgICAgIC5jbHMtN3tmaWxsOiNiM2IzYjM7fQ0KICAgICAgICAgICAgLmNscy02e2ZpbGw6YXF1YTt9DQogICAgICAgIDwvc3R5bGU+DQogICAgPC9kZWZzPg0KDQogICAgPGcgY2xhc3M9ImNscy0xIj4NCiAgICAgICAgPGcgaWQ9IkNhcGFfMSI+DQogICAgICAgICAgICA8Zz4NCiAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTciIGQ9Ik04OTkuOTQsNDk3LjMxcy0uMDEtLjA5LS4wMi0uMTNjMC0uMDMsMC0uMDYtLjAxLS4xLS4wMS0uMDQtLjAyLS4wOS0uMDItLjEzLS4xNS0yLjYyLS41Ni01LjE3LTEuMDktNy42OS0uMzktMS45OS0uODctMy45NC0xLjQ1LTUuODUtLjA1LS4xNy0uMTEtLjMzLS4xNS0uNDgtMi43My04LjktNy41My0xNi44Ny0xMy45OS0yMy4zMi04LjQzLTguNDMtMTkuNTgtMTQuMDEtMzEuOTktMTUuOC0uMDIsMC0uMDQsMC0uMDYtLjAxLTEuMTYtLjE2LTIuMzEtLjI5LTMuNDktLjQtMS4yNS0uMTctMi41MS0uMjktMy43OC0uMzktLjM0LDAtLjY2LS4xLTEuMDItLjFoLTEuMDFjLS43NC0uMDMtMS40OC0uMTItMi4yMy0uMTJoLTU0Ljc5Yy05LjksMC0xOC45LTUuMzQtMjMuNzEtMTMuNzhsLS4yOS0uNWMtLjQxLS43NS0uNzgtMS41Mi0xLjExLTIuMzJsLS43Ny0xLjg1Yy00LjI2LTExLjE5LTEtMjIuOTQsNi42NS0zMC41LC4xOC0uMTgsLjM2LS4zNSwuNTYtLjU0LC4yNS0uMjMsLjUtLjQ1LC43Ni0uNjcsLjEzLS4xMSwuMjUtLjIyLC4zOC0uMzMsLjI4LS4yNCwuNTctLjQ3LC44NS0uNjksLjQ5LS4zOCwuOTgtLjc1LDEuNDktMS4xLC4yOC0uMTksLjU3LS4zNywuODYtLjU2LC44Ni0uNTUsMS43NS0xLjAzLDIuNjYtMS40NywuMjQtLjEyLC40Ny0uMjIsLjcxLS4zMiwuMjItLjEyLC40Ni0uMjEsLjY5LS4zLC43NS0uMzEsMS41Mi0uNiwyLjMxLS44NiwuMTMtLjA0LC4yNy0uMDksLjQxLS4xMiwuMy0uMSwuNjEtLjE4LC45Mi0uMjcsLjAzLS4wMSwuMDUtLjAyLC4wOS0uMDIsLjQtLjExLC44LS4yLDEuMjEtLjI5LC45Mi0uMiwxLjg3LS4zNSwyLjg0LS40NiwuMTgtLjAyLC4zNi0uMDQsLjU1LS4wNSwuMzktLjA0LC43Ni0uMDYsMS4xNS0uMDloLjA0Yy41LS4wMywxLjAxLS4wNCwxLjUyLS4wNGgyMS41MmMxNS43OCwwLDMwLjE3LTYuNCw0MC40NS0xNi42OCwxMC4yOS0xMC40LDE2LjY5LTI0LjU3LDE2LjY5LTQwLjQ2LDAtMzEuNTQtMjUuNDgtNTcuMTMtNTcuMTQtNTcuMTNoLTkyLjQzYy0xMS42NSwwLTIyLjE1LTYuOTYtMjYuNjktMTcuNjdsLS4zLS43MmMtNC4zMS0xMS4yMy0xLjA0LTIzLjAyLDYuNjQtMzAuNjEsLjE2LS4xNSwuMzItLjMsLjQ3LS40NSwuMy0uMjksLjYyLS41NiwuOTQtLjg0LC4wOC0uMDYsLjE1LS4xMywuMjMtLjIsLjMxLS4yNiwuNjItLjUyLC45NS0uNzYsLjQ3LS4zNiwuOTQtLjcyLDEuNDMtMS4wNSwuMjgtLjE5LC41Ny0uMzcsLjg2LS41NiwxLjA5LS43LDIuMjQtMS4zMSwzLjQ0LTEuODMsLjItLjEsLjQxLS4xOCwuNjItLjI3LC4yMS0uMSwuNDQtLjE4LC42Ni0uMjcsLjE5LS4wNywuMzktLjE1LC41OC0uMjEsLjM0LS4xMywuNjktLjI1LDEuMDQtLjM2LC40NS0uMTQsLjkyLS4yOCwxLjM4LS40LC40Ni0uMTMsLjkzLS4yNCwxLjQxLS4zMywuNDctLjExLC45NS0uMTksMS40NS0uMjcsLjQyLS4wNiwuODUtLjEyLDEuMjctLjE3LC4xNi0uMDEsLjMzLS4wMywuNDktLjA0LC4zOS0uMDQsLjc3LS4wNiwxLjE3LS4wOWguMDRjLjUtLjAzLDEuMDEtLjA0LDEuNTItLjA0aDU3LjE3YzE1Ljc3LDAsMzAuMDUtNi40LDQwLjQ1LTE2LjY4LC40OS0uNDksLjk3LTEuMDEsMS40NS0xLjUyLC4zNi0uMzksLjcyLS43OCwxLjA1LTEuMTgsLjA1LS4wNCwuMS0uMSwuMTQtLjE1LC4yOC0uMzEsLjU1LS42MywuODEtLjk1LC43Mi0uODcsMS40Mi0xLjc3LDIuMTEtMi43LC4zNC0uNDcsLjY5LS45NSwxLjAzLTEuNDUsLjA4LS4xMSwuMTUtLjIxLC4yMS0uMzIsLjM0LS40OSwuNjctMSwxLTEuNTEsLjAyLS4wMiwuMDQtLjA1LC4wNS0uMDksLjI5LS40NSwuNTYtLjksLjg0LTEuMzYsLjA5LS4xNSwuMTgtLjMsLjI3LS40NiwuMzQtLjU5LC42OS0xLjE5LDEuMDEtMS44LDEuNjgtMy4xNCwzLjA3LTYuNDYsNC4xNi05LjkyLC4yNC0uNzQsLjQ1LTEuNSwuNjUtMi4yNiwxLTMuNzcsMS42My03LjY5LDEuODMtMTEuNzQsMS43MS0zMy4wOS0yNy4xMy02MC4xOS02MC4zLTYwLjE5aC0xODIuNDdjLS4xNSwwLS4zLC4wMi0uNDQsLjA0aC0uMDRjLS4xMywuMDItLjI3LC4wNS0uNDEsLjA1LS4zMS0uMDEtLjYyLS4wNC0uOTMtLjA2aC0uMDNjLS4xMi0uMDEtLjI0LS4wMS0uMzQtLjAyLS4xNS0uMDEtLjMtLjAxLS40NS0uMDFIMjI4LjU3Yy0xNS43NywwLTMwLjA1LDYuNC00MC40NSwxNi44LTEwLjI4LDEwLjI4LTE2LjY5LDI0LjU3LTE2LjY5LDQwLjMzLDAsMzEuNjYsMjUuNiw1Ny4xNCw1Ny4xNCw1Ny4xNGg1Ni4wNmMyMC44LDAsMzQuOTIsMjEuMTUsMjYuOTMsNDAuMzVsLTcwLjgzLDE3MC4yM2MtNC41MiwxMC44Ny0xNS4xNCwxNy45Ni0yNi45MywxNy45NmgtNTYuNjZjLTE1Ljc3LDAtMzAuMDUsNi40LTQwLjM1LDE2LjgtMTAuNCwxMC4yOC0xNi43OSwyNC41Ny0xNi43OSw0MC4zMywwLDMxLjY2LDI1LjYsNTcuMTQsNTcuMTQsNTcuMTRoODMuMTZjLjIsMCwuMzksLjEsLjQ5LC4yNmwyMTEuNDQsMzE2Ljk1cS4xMSwuMTIsLjIyLC4yNHMuMDQsLjA0LC4wNSwuMDZjLjIxLC4zMiwuNDgsLjYsLjcxLC45MSwuNzMsMS4wMywxLjQ3LDIuMDcsMi4zMiwzLjAyLC40NywuNjMsMS4xNCwxLjE1LDEuNjQsMS43NSwuODUsLjk2LDEuNTQsMi4wNSwyLjQ1LDIuOTQsLjQzLC40MywuOTUsLjc1LDEuNCwxLjE3LC40OSwuNDYsLjg1LDEuMDEsMS4zNiwxLjQ2LC4zNywuMzIsLjc1LC42NCwxLjE0LC45NSwxLjE3LC45MywyLjM4LDEuODEsMy42MSwyLjY3LC42NiwuNDgsMS4zNSwuOTMsMi4wNSwxLjM4bDQuODcsMi43N2MuNDcsLjI2LC45NywuNDMsMS40NSwuNjcsMS4xLC41NCwyLjE3LDEuMSwzLjMyLDEuNTUsLjIxLC4wOSwuNDEsLjIxLC42MiwuMzEsLjA2LC4wMywuMTQsLjA2LC4yMSwuMDloLjExYzIuMTcsLjkxLDQuMzUsMS42LDYuNjMsMi4wNiwuMjQsLjA2LC40OSwuMDcsLjczLC4xNCwxLjA4LC4yNSwyLjE4LC40MywzLjI5LC42MSwuOTIsLjE2LDEuODEsLjQyLDIuNzMsLjUxLC41LC4wNywxLjAyLC4xNCwxLjUyLC4xOSwuMTEsLjAxLC4yMiwuMDIsLjMzLC4wMywuMzQsLjAzLC42OSwuMDYsMS4wNCwuMDksLjY5LC4wNCwxLjM4LC4wOSwyLjA3LC4xMSwuMzQsLjAxLC43LC4wMiwxLjA0LC4wMiwuMjksLjAxLC41NywuMDEsLjg2LC4wMSwyLjI4LDAsNC41Ny0uMTEsNi44NS0uNDUsMi4yOS0uMjQsNC41Ny0uNjksNi43NS0xLjI2LDIuMjgtLjQ2LDQuNDYtMS4xNSw2LjYzLTIuMDZoLjExYzEuOTUtLjY5LDMuNzgtMS42LDUuNi0yLjYyLDIuMDYtLjkyLDQuMDEtMi4wNiw1LjgzLTMuMzIsMi4wNy0xLjM3LDQuMDEtMi44Niw1Ljg0LTQuNDUsMi41MS0yLjE3LDQuOTItNC41Nyw2Ljg1LTcuMzEsMS4xNS0xLjI1LDIuMTctMi42MiwzLjA4LTMuOTlsLjIyLS4yNCw4Ny45MS0xMzEuNzcsMS4wNC0xLjU2LDExMy4wNy0xNjkuNDksMS41NS0yLjMyYzIuNDQtMy40LDguMDQtMTIuMDYsOC4wNC0xMi4wNiwwLDAsMTAuMDcsLjExLDE1LjEsLjExaDY1LjczYy43NiwwLDEuNDktLjA5LDIuMjQtLjExaC40MWMuMTQsMCwuMjctLjA0LC40Mi0uMDQsMi4wMS0uMTEsNC4wMi0uMzEsNi0uNjEsMTEuNTItMS4zMSwyMi4wNy01LjgzLDMwLjQ3LTEyLjg2LC4zLS4yNSwuNi0uNSwuODktLjc2LC4zLS4yNywuNTktLjUyLC44OC0uNzksLjU4LS41MiwxLjE0LTEuMDYsMS42OS0xLjYyLC41NC0uNTQsMS4wNS0xLjA3LDEuNTUtMS42MywuMjEtLjI0LC40My0uNDYsLjYzLS43LC4yMi0uMjQsLjQzLS40NywuNjItLjcxLDYuMy03LjI5LDEwLjY3LTE2LjE3LDEyLjY2LTI1Ljk2LC41Ny0yLjU1LDEuMDEtNS4xNCwxLjE5LTcuODEsLjAxLS4wNCwuMDEtLjA5LC4wMi0uMTMsLjAyLS4xMSwuMDItLjIsLjAyLS4zMSwuMDUtLjgyLDAtMS42NCwwLTIuNDUsLjAxLS44MSwuMDUtMS42MywuMDUtMi40NCwuMDEtLjAxLC4wMS0uMDIsMC0uMDMsLjAxLS4wNiwwLS4xMywwLS4xOCwwLS4yNS0uMDEtLjUtLjAyLS43NVptLTM1Ny4zNywxNzguODVjLTIwLjI1LDMwLjM1LTY0Ljg2LDMwLjM1LTg1LjEzLDBsLTEyMS4zNi0xODEuNzhjLS4xMS0uMTctLjEzLS4zNy0uMDUtLjU2bDk3LjI2LTIzMy43NGM1LjA4LTEyLjIsMTMuMDctMjMuMDUsMjMuMjUtMzEuMDcsLjIxLS4xNiwuNDMtLjMyLC42NC0uNDgsLjY0LS41LDEuMy0xLDEuOTYtMS40NiwuMzctLjI3LC43NC0uNTEsMS4xMS0uNzYsNS4yMi0zLjYsMTAuOTUtNi40NywxNy4wOC04LjQ0LDIuNTgtLjgyLDUuMTctMS41MSw3Ljc1LTIuMDMsLjEtLjAyLC4yLS4wNCwuMy0uMDYsLjAyLS4wMSwuMDMtLjAxLC4wNCwwLC40Mi0uMSwuODQtLjE4LDEuMjUtLjI2LC40NC0uMDksLjg3LS4xNiwxLjMxLS4yNGwuMjQtLjAzYy4zNi0uMDcsLjcyLS4xMywxLjA3LS4xN2wxLjM1LS4xOWMuMzEtLjA0LC42MS0uMDcsLjkyLS4xMiwuMDctLjAxLC4xNS0uMDEsLjIyLS4wMiwuMDEsMCwuMDMsMCwuMDQtLjAxaC4xbDEuMDUtLjEyLC4yOS0uMDMsNC4xOC0uMjYsMi41NC0uMDVoLjAxYy42NywwLDEuMzUsLjAxLDIuMDIsLjAzLC4zNCwuMDEsLjY3LC4wMiwxLjAyLC4wNCwuNjYsLjAyLDEuMzMsLjA1LDEuOTgsLjExLC4zNCwuMDIsLjY3LC4wNCwxLjAyLC4wNywuNjYsLjA1LDEuMzMsLjEyLDEuOTksLjE5LC42NCwuMDcsMS4yOSwuMTYsMS45MywuMjVoLjAyYy42MywuMSwxLjI3LC4xOSwxLjkxLC4zLC41MiwuMDksMS4wNiwuMTgsMS41OSwuMjksLjMxLC4wNSwuNjEsLjEyLC45MSwuMTgsLjU5LC4xMiwxLjE4LC4yNSwxLjc2LC4zNywuNzMsLjE3LDEuNDUsLjM1LDIuMTYsLjU1LC4wMywwLC4wNiwuMDEsLjEsLjAybDEuNTEsLjQyYzIuNDMsLjcxLDQuODIsMS41NCw3LjE1LDIuNSwuNTksLjI1LDEuMTcsLjQ5LDEuNzUsLjc1LC41OCwuMjYsMS4xNiwuNTIsMS43NCwuNzksLjU3LC4yNywxLjE0LC41NSwxLjcsLjg0LC41NywuMjksMS4xMiwuNTgsMS42OCwuODgsMTMuOTksNy41NywyNS4zNiwxOS43NiwzMS44MywzNS4wMmwzOC43LDkyLjk1LDU5LjQ2LDE0My4xMWMuMDcsLjE3LC4wNSwuMzctLjA1LC41MmwtMTIxLjMxLDE4MS43WiIvPg0KICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTY0Mi44LDE1OS44OWMtLjY5LDE0Ljc3LTYuOTQsMjcuOS0xNi43NCwzNy43LTEwLjI5LDEwLjI4LTI0LjU3LDE2LjY4LTQwLjM0LDE2LjY4aC04NS43M2MtMjguOTIsMC01NC45OSwxNy4zOS02Ni4xLDQ0LjA4bC0xMDkuNzcsMjYzLjc2LS4xMSwuMjNjLTIuODYsNi43NC03LjA5LDEyLjkxLTEyLjIzLDE4LjA1LTEwLjI5LDEwLjI4LTI0LjU3LDE2LjY4LTQwLjM0LDE2LjY4aC0xMTQuMjljLTMxLjU0LDAtNTcuMTQtMjUuNDgtNTcuMTQtNTcuMTMsMC0xNS43Nyw2LjQtMzAuMDUsMTYuOC00MC4zNCwxMC4yOS0xMC40LDI0LjU3LTE2LjgsNDAuMzQtMTYuOGg1Ny4wNmMxMS41NCwwLDIxLjk1LTYuOTQsMjYuMzgtMTcuNTlsNzEuMzEtMTcxLjRjNy44My0xOC44MS02LTM5LjU0LTI2LjM4LTM5LjU0aC01Ni45NGMtMzEuNTQsMC01Ny4xNC0yNS40OC01Ny4xNC01Ny4xMywwLTE1Ljc3LDYuNC0zMC4wNSwxNi42OS00MC4zNCwxMC40LTEwLjQsMjQuNjktMTYuOCw0MC40Ni0xNi44aDM1NC41YzMyLjk0LDAsNjEuMjYsMjYuOTksNTkuNzIsNTkuODlaIi8+DQogICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9ImNscy02IiBkPSJNODk5Ljk0LDUwMi43Yy0uNjksMTQuNzctNi45NCwyNy45MS0xNi43NCwzNy43LTEwLjI5LDEwLjI4LTI0LjU3LDE2LjY4LTQwLjM0LDE2LjY4aC0xMTQuMjljLTEuOTQsMC0zLjg5LS4xMS01LjgzLS4zNC0xLjcxLS4xMS0zLjMxLS4zNC00LjkxLS42OS0xLjQ5LS4yMy0yLjg2LS41Ny00LjIzLTEuMDMtMS40OS0uMzQtMi44Ni0uOC00LjIzLTEuMjYtMS44My0uNjktMy42Ni0xLjM3LTUuMzctMi4yOS0uMjMsMC0uNDYtLjExLS42OS0uMzQtMS43MS0uOC0zLjQzLTEuODMtNS4wMy0yLjg2LS42OS0uMzQtMS4zNy0uOC0xLjk0LTEuMjYtMS4wMy0uNTctMS45NC0xLjI2LTIuODYtMi4wNi0uOC0uNTctMS42LTEuMjYtMi4yOS0xLjk0LS4zNC0uMTEtLjY5LS40Ni0uOTEtLjgtLjY5LS41Ny0xLjM3LTEuMTQtMi4wNi0xLjgzLS41Ny0uNTctMS4xNC0xLjI2LTEuNzEtMS44My00LjU3LTQuNjgtOC4zNC0xMC4yOC0xMC45Ny0xNi42OGwtNzEuMDktMTcxLjA2LTcwLjk3LTE3MC40OWMtLjIzLS41Ny0uNDYtMS4xNC0uOC0xLjcxLTIuNjMtNi42My00LjExLTEzLjgzLTQuMTEtMjEuNDgsMC0xNS43Nyw2LjQtMzAuMDUsMTYuOC00MC4zNCwxMC4yOS0xMC40LDI0LjU3LTE2LjgsNDAuMzQtMTYuOGgxODMuMDdjMzIuOTQsMCw2MS4yNywyNi45OSw1OS43Myw1OS44OS0uNjksMTQuNzYtNi45MywyNy45LTE2LjYyLDM3LjY5LTEwLjQsMTAuMjgtMjQuNjksMTYuNjgtNDAuNDYsMTYuNjhoLTU3LjE3Yy0yMC4zOCwwLTM0LjIxLDIwLjcyLTI2LjM4LDM5LjU0aDBjNC40MywxMC42NSwxNC44NCwxNy41OSwyNi4zOCwxNy41OWg5Mi44M2MzMS42NiwwLDU3LjE0LDI1LjYsNTcuMTQsNTcuMTMsMCwxNS44OC02LjQsMzAuMDUtMTYuNjksNDAuNDUtMTAuMjksMTAuMjgtMjQuNjksMTYuNjgtNDAuNDYsMTYuNjhoLTIxLjUxYy0yMC4zOCwwLTM0LjIxLDIwLjcyLTI2LjM4LDM5LjU0aDBjNC40MywxMC42NSwxNC44NCwxNy42LDI2LjM4LDE3LjZoNTQuNjRjMzIuOTQsMCw2MS4yNiwyNi45OSw1OS43Miw1OS44OVoiLz4NCiAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik03NzYuMjMsNTMxLjgybC0xNi44NSwyNS4yNi04LjA0LDEyLjA2LTEuNTUsMi4zMi0xMTMuMDcsMTY5LjQ5LTEuMDQsMS41Ni04Ny45MSwxMzEuNzctLjIyLC4yNGMtLjkxLDEuMzctMS45NCwyLjc0LTMuMDgsMy45OS0xLjk0LDIuNzQtNC4zNSw1LjE0LTYuODUsNy4zMS0xLjgzLDEuNi0zLjc3LDMuMDgtNS44NCw0LjQ1LTEuODIsMS4yNi0zLjc3LDIuNC01LjgzLDMuMzItMS44MiwxLjAzLTMuNjUsMS45NC01LjYsMi42MmgtLjExYy0yLjE3LC45MS00LjM1LDEuNi02LjYzLDIuMDYtMi4xNywuNTgtNC40NiwxLjAzLTYuNzUsMS4yNi0yLjI4LC4zNC00LjU3LC40NS02Ljg1LC40NS0uMjksMC0uNTcsMC0uODYtLjAxLS4zNCwwLS43LS4wMS0xLjA0LS4wMi0uNjktLjAyLTEuMzgtLjA2LTIuMDctLjExLS4zNS0uMDItLjctLjA1LTEuMDQtLjA5LS4xMS0uMDEtLjIyLS4wMi0uMzMtLjAzLS41LS4wNS0xLjAyLS4xMi0xLjUyLS4xOS0yLjI5LS4yNC00LjU3LS42OS02Ljc1LTEuMjYtMi4yOC0uNDYtNC40Ni0xLjE1LTYuNjMtMi4wNmgtLjExYy0uMDctLjAyLS4xNS0uMDUtLjIxLS4wOS0xLjg3LS42Ni0zLjYyLTEuNTUtNS4zOS0yLjU0bC00Ljg3LTIuNzctLjk1LS41NWMtMS42NC0xLjA5LTMuMi0yLjI2LTQuNy0zLjUtLjM5LS4zMS0uNzYtLjYzLTEuMTQtLjk1LTIuNjItMi4yOC00LjkxLTQuNjgtNi44NS03LjMxLTEuMTUtMS4yNS0yLjE3LTIuNjItMy4wOC0zLjk5cS0uMTItLjEyLS4yMi0uMjRsLTIxMS40NC0zMTYuOTUtLjE3LS4yNi0xNi44NS0yNS4yNmMtMTEuOTYtMTcuODctMTIuNTItMzkuOTUtMy4zOC01Ny43NmguMDFjNC4yOS04LjQsMTAuNzMtMTUuODMsMTkuMTUtMjEuNDIsOS44Mi02LjUyLDIwLjgtOS43MSwzMS43Ny05LjcxLDE4LjQsMCwzNi40Niw5LjAzLDQ3LjQzLDI1LjQ4bDE3LjA4LDI1LjU4LC4wNywuMTIsLjE4LC4yNywxMjEuMzYsMTgxLjc4YzIwLjI2LDMwLjM1LDY0Ljg3LDMwLjM1LDg1LjEzLDBsMTIxLjMxLTE4MS43LC4xNy0uMjYsLjA2LS4xLDE3LjE2LTI1LjdjMTAuOTctMTYuNDUsMjkuMDMtMjUuNDgsNDcuNDMtMjUuNDgsMTAuOTcsMCwyMS45NSwzLjE5LDMxLjc3LDkuNzEsOC40NCw1LjYxLDE0LjksMTMuMDgsMTkuMiwyMS40OXYuMDNjOS4wOSwxNy43OSw4LjUxLDM5LjgzLTMuNDMsNTcuNjZaIi8+DQoNCiAgICAgICAgICAgICAgICA8ZyBjbGFzcz0iY2xzLTMiPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik03ODUuNiw0OTkuODNjMCwyMi40LTEzLjI2LDQzLjY1LTM1LjIsNTIuOTEtMjkuMTQsMTIuMTEtNjIuNjMtMS43MS03NC43NC0zMC44NWwtMTA5LjY5LTI2My42MmMtMTEuMDgtMjYuNjQtMzcuMTEtNDMuOTktNjUuOTYtNDMuOTloMGMtMjguODYsMC01NC44OCwxNy4zNi02NS45Niw0My45OWwtMTA5LjY5LDI2My42MmMtMTIuMTEsMjkuMTQtNDUuNiw0Mi45Ny03NC43NCwzMC44NS0yMS45NC05LjI2LTM1LjItMzAuNTEtMzUuMi01Mi45MSwwLTcuMiwxLjM3LTE0LjYzLDQuMzQtMjEuODNsMTA5LjcyLTI2My43M2gwYzI4Ljc5LTY5LjE5LDk2LjM4LTExNC4yNywxNzEuMzItMTE0LjI3aC40NGM3NC45NSwwLDE0Mi41NCw0NS4wOCwxNzEuMzIsMTE0LjI3aDBsMTA5LjcyLDI2My43M2MyLjk3LDcuMiw0LjM0LDE0LjYzLDQuMzQsMjEuODNaIi8+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+")
  //v-img(style="background-color: transparent height: 100%" alt="logo" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIj4NCiAgICA8ZGVmcz4NCiAgICAgICAgPHN0eWxlPg0KICAgICAgICAgICAgLmNscy0xew0KICAgICAgICAgICAgICAgIGlzb2xhdGlvbjppc29sYXRlOw0KICAgICAgICAgICAgfQ0KDQogICAgICAgICAgICAuY2xzLTJ7ZmlsbDpyZ2JhKDI1NSwxMjEsMCwuNyk7fQ0KICAgICAgICAgICAgLmNscy0ze29wYWNpdHk6LjM7fQ0KICAgICAgICAgICAgLmNscy00e2ZpbGw6cmVkO30NCiAgICAgICAgICAgIC5jbHMtNCwuY2xzLTUsLmNscy02e21peC1ibGVuZC1tb2RlOm11bHRpcGx5O30NCiAgICAgICAgICAgIC5jbHMtNXtmaWxsOmxpbWU7fQ0KICAgICAgICAgICAgLmNscy01LC5jbHMtNntvcGFjaXR5Oi41O30NCiAgICAgICAgICAgIC5jbHMtN3tmaWxsOiNiM2IzYjM7fQ0KICAgICAgICAgICAgLmNscy02e2ZpbGw6YXF1YTt9DQogICAgICAgIDwvc3R5bGU+DQogICAgPC9kZWZzPg0KDQogICAgPGcgY2xhc3M9ImNscy0xIj4NCiAgICAgICAgPGcgaWQ9IkNhcGFfMSI+DQogICAgICAgICAgICA8Zz4NCiAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTciIGQ9Ik04OTkuOTQsNDk3LjMxcy0uMDEtLjA5LS4wMi0uMTNjMC0uMDMsMC0uMDYtLjAxLS4xLS4wMS0uMDQtLjAyLS4wOS0uMDItLjEzLS4xNS0yLjYyLS41Ni01LjE3LTEuMDktNy42OS0uMzktMS45OS0uODctMy45NC0xLjQ1LTUuODUtLjA1LS4xNy0uMTEtLjMzLS4xNS0uNDgtMi43My04LjktNy41My0xNi44Ny0xMy45OS0yMy4zMi04LjQzLTguNDMtMTkuNTgtMTQuMDEtMzEuOTktMTUuOC0uMDIsMC0uMDQsMC0uMDYtLjAxLTEuMTYtLjE2LTIuMzEtLjI5LTMuNDktLjQtMS4yNS0uMTctMi41MS0uMjktMy43OC0uMzktLjM0LDAtLjY2LS4xLTEuMDItLjFoLTEuMDFjLS43NC0uMDMtMS40OC0uMTItMi4yMy0uMTJoLTU0Ljc5Yy05LjksMC0xOC45LTUuMzQtMjMuNzEtMTMuNzhsLS4yOS0uNWMtLjQxLS43NS0uNzgtMS41Mi0xLjExLTIuMzJsLS43Ny0xLjg1Yy00LjI2LTExLjE5LTEtMjIuOTQsNi42NS0zMC41LC4xOC0uMTgsLjM2LS4zNSwuNTYtLjU0LC4yNS0uMjMsLjUtLjQ1LC43Ni0uNjcsLjEzLS4xMSwuMjUtLjIyLC4zOC0uMzMsLjI4LS4yNCwuNTctLjQ3LC44NS0uNjksLjQ5LS4zOCwuOTgtLjc1LDEuNDktMS4xLC4yOC0uMTksLjU3LS4zNywuODYtLjU2LC44Ni0uNTUsMS43NS0xLjAzLDIuNjYtMS40NywuMjQtLjEyLC40Ny0uMjIsLjcxLS4zMiwuMjItLjEyLC40Ni0uMjEsLjY5LS4zLC43NS0uMzEsMS41Mi0uNiwyLjMxLS44NiwuMTMtLjA0LC4yNy0uMDksLjQxLS4xMiwuMy0uMSwuNjEtLjE4LC45Mi0uMjcsLjAzLS4wMSwuMDUtLjAyLC4wOS0uMDIsLjQtLjExLC44LS4yLDEuMjEtLjI5LC45Mi0uMiwxLjg3LS4zNSwyLjg0LS40NiwuMTgtLjAyLC4zNi0uMDQsLjU1LS4wNSwuMzktLjA0LC43Ni0uMDYsMS4xNS0uMDloLjA0Yy41LS4wMywxLjAxLS4wNCwxLjUyLS4wNGgyMS41MmMxNS43OCwwLDMwLjE3LTYuNCw0MC40NS0xNi42OCwxMC4yOS0xMC40LDE2LjY5LTI0LjU3LDE2LjY5LTQwLjQ2LDAtMzEuNTQtMjUuNDgtNTcuMTMtNTcuMTQtNTcuMTNoLTkyLjQzYy0xMS42NSwwLTIyLjE1LTYuOTYtMjYuNjktMTcuNjdsLS4zLS43MmMtNC4zMS0xMS4yMy0xLjA0LTIzLjAyLDYuNjQtMzAuNjEsLjE2LS4xNSwuMzItLjMsLjQ3LS40NSwuMy0uMjksLjYyLS41NiwuOTQtLjg0LC4wOC0uMDYsLjE1LS4xMywuMjMtLjIsLjMxLS4yNiwuNjItLjUyLC45NS0uNzYsLjQ3LS4zNiwuOTQtLjcyLDEuNDMtMS4wNSwuMjgtLjE5LC41Ny0uMzcsLjg2LS41NiwxLjA5LS43LDIuMjQtMS4zMSwzLjQ0LTEuODMsLjItLjEsLjQxLS4xOCwuNjItLjI3LC4yMS0uMSwuNDQtLjE4LC42Ni0uMjcsLjE5LS4wNywuMzktLjE1LC41OC0uMjEsLjM0LS4xMywuNjktLjI1LDEuMDQtLjM2LC40NS0uMTQsLjkyLS4yOCwxLjM4LS40LC40Ni0uMTMsLjkzLS4yNCwxLjQxLS4zMywuNDctLjExLC45NS0uMTksMS40NS0uMjcsLjQyLS4wNiwuODUtLjEyLDEuMjctLjE3LC4xNi0uMDEsLjMzLS4wMywuNDktLjA0LC4zOS0uMDQsLjc3LS4wNiwxLjE3LS4wOWguMDRjLjUtLjAzLDEuMDEtLjA0LDEuNTItLjA0aDU3LjE3YzE1Ljc3LDAsMzAuMDUtNi40LDQwLjQ1LTE2LjY4LC40OS0uNDksLjk3LTEuMDEsMS40NS0xLjUyLC4zNi0uMzksLjcyLS43OCwxLjA1LTEuMTgsLjA1LS4wNCwuMS0uMSwuMTQtLjE1LC4yOC0uMzEsLjU1LS42MywuODEtLjk1LC43Mi0uODcsMS40Mi0xLjc3LDIuMTEtMi43LC4zNC0uNDcsLjY5LS45NSwxLjAzLTEuNDUsLjA4LS4xMSwuMTUtLjIxLC4yMS0uMzIsLjM0LS40OSwuNjctMSwxLTEuNTEsLjAyLS4wMiwuMDQtLjA1LC4wNS0uMDksLjI5LS40NSwuNTYtLjksLjg0LTEuMzYsLjA5LS4xNSwuMTgtLjMsLjI3LS40NiwuMzQtLjU5LC42OS0xLjE5LDEuMDEtMS44LDEuNjgtMy4xNCwzLjA3LTYuNDYsNC4xNi05LjkyLC4yNC0uNzQsLjQ1LTEuNSwuNjUtMi4yNiwxLTMuNzcsMS42My03LjY5LDEuODMtMTEuNzQsMS43MS0zMy4wOS0yNy4xMy02MC4xOS02MC4zLTYwLjE5aC0xODIuNDdjLS4xNSwwLS4zLC4wMi0uNDQsLjA0aC0uMDRjLS4xMywuMDItLjI3LC4wNS0uNDEsLjA1LS4zMS0uMDEtLjYyLS4wNC0uOTMtLjA2aC0uMDNjLS4xMi0uMDEtLjI0LS4wMS0uMzQtLjAyLS4xNS0uMDEtLjMtLjAxLS40NS0uMDFIMjI4LjU3Yy0xNS43NywwLTMwLjA1LDYuNC00MC40NSwxNi44LTEwLjI4LDEwLjI4LTE2LjY5LDI0LjU3LTE2LjY5LDQwLjMzLDAsMzEuNjYsMjUuNiw1Ny4xNCw1Ny4xNCw1Ny4xNGg1Ni4wNmMyMC44LDAsMzQuOTIsMjEuMTUsMjYuOTMsNDAuMzVsLTcwLjgzLDE3MC4yM2MtNC41MiwxMC44Ny0xNS4xNCwxNy45Ni0yNi45MywxNy45NmgtNTYuNjZjLTE1Ljc3LDAtMzAuMDUsNi40LTQwLjM1LDE2LjgtMTAuNCwxMC4yOC0xNi43OSwyNC41Ny0xNi43OSw0MC4zMywwLDMxLjY2LDI1LjYsNTcuMTQsNTcuMTQsNTcuMTRoODMuMTZjLjIsMCwuMzksLjEsLjQ5LC4yNmwyMTEuNDQsMzE2Ljk1cS4xMSwuMTIsLjIyLC4yNHMuMDQsLjA0LC4wNSwuMDZjLjIxLC4zMiwuNDgsLjYsLjcxLC45MSwuNzMsMS4wMywxLjQ3LDIuMDcsMi4zMiwzLjAyLC40NywuNjMsMS4xNCwxLjE1LDEuNjQsMS43NSwuODUsLjk2LDEuNTQsMi4wNSwyLjQ1LDIuOTQsLjQzLC40MywuOTUsLjc1LDEuNCwxLjE3LC40OSwuNDYsLjg1LDEuMDEsMS4zNiwxLjQ2LC4zNywuMzIsLjc1LC42NCwxLjE0LC45NSwxLjE3LC45MywyLjM4LDEuODEsMy42MSwyLjY3LC42NiwuNDgsMS4zNSwuOTMsMi4wNSwxLjM4bDQuODcsMi43N2MuNDcsLjI2LC45NywuNDMsMS40NSwuNjcsMS4xLC41NCwyLjE3LDEuMSwzLjMyLDEuNTUsLjIxLC4wOSwuNDEsLjIxLC42MiwuMzEsLjA2LC4wMywuMTQsLjA2LC4yMSwuMDloLjExYzIuMTcsLjkxLDQuMzUsMS42LDYuNjMsMi4wNiwuMjQsLjA2LC40OSwuMDcsLjczLC4xNCwxLjA4LC4yNSwyLjE4LC40MywzLjI5LC42MSwuOTIsLjE2LDEuODEsLjQyLDIuNzMsLjUxLC41LC4wNywxLjAyLC4xNCwxLjUyLC4xOSwuMTEsLjAxLC4yMiwuMDIsLjMzLC4wMywuMzQsLjAzLC42OSwuMDYsMS4wNCwuMDksLjY5LC4wNCwxLjM4LC4wOSwyLjA3LC4xMSwuMzQsLjAxLC43LC4wMiwxLjA0LC4wMiwuMjksLjAxLC41NywuMDEsLjg2LC4wMSwyLjI4LDAsNC41Ny0uMTEsNi44NS0uNDUsMi4yOS0uMjQsNC41Ny0uNjksNi43NS0xLjI2LDIuMjgtLjQ2LDQuNDYtMS4xNSw2LjYzLTIuMDZoLjExYzEuOTUtLjY5LDMuNzgtMS42LDUuNi0yLjYyLDIuMDYtLjkyLDQuMDEtMi4wNiw1LjgzLTMuMzIsMi4wNy0xLjM3LDQuMDEtMi44Niw1Ljg0LTQuNDUsMi41MS0yLjE3LDQuOTItNC41Nyw2Ljg1LTcuMzEsMS4xNS0xLjI1LDIuMTctMi42MiwzLjA4LTMuOTlsLjIyLS4yNCw4Ny45MS0xMzEuNzcsMS4wNC0xLjU2LDExMy4wNy0xNjkuNDksMS41NS0yLjMyYzIuNDQtMy40LDguMDQtMTIuMDYsOC4wNC0xMi4wNiwwLDAsMTAuMDcsLjExLDE1LjEsLjExaDY1LjczYy43NiwwLDEuNDktLjA5LDIuMjQtLjExaC40MWMuMTQsMCwuMjctLjA0LC40Mi0uMDQsMi4wMS0uMTEsNC4wMi0uMzEsNi0uNjEsMTEuNTItMS4zMSwyMi4wNy01LjgzLDMwLjQ3LTEyLjg2LC4zLS4yNSwuNi0uNSwuODktLjc2LC4zLS4yNywuNTktLjUyLC44OC0uNzksLjU4LS41MiwxLjE0LTEuMDYsMS42OS0xLjYyLC41NC0uNTQsMS4wNS0xLjA3LDEuNTUtMS42MywuMjEtLjI0LC40My0uNDYsLjYzLS43LC4yMi0uMjQsLjQzLS40NywuNjItLjcxLDYuMy03LjI5LDEwLjY3LTE2LjE3LDEyLjY2LTI1Ljk2LC41Ny0yLjU1LDEuMDEtNS4xNCwxLjE5LTcuODEsLjAxLS4wNCwuMDEtLjA5LC4wMi0uMTMsLjAyLS4xMSwuMDItLjIsLjAyLS4zMSwuMDUtLjgyLDAtMS42NCwwLTIuNDUsLjAxLS44MSwuMDUtMS42MywuMDUtMi40NCwuMDEtLjAxLC4wMS0uMDIsMC0uMDMsLjAxLS4wNiwwLS4xMywwLS4xOCwwLS4yNS0uMDEtLjUtLjAyLS43NVptLTM1Ny4zNywxNzguODVjLTIwLjI1LDMwLjM1LTY0Ljg2LDMwLjM1LTg1LjEzLDBsLTEyMS4zNi0xODEuNzhjLS4xMS0uMTctLjEzLS4zNy0uMDUtLjU2bDk3LjI2LTIzMy43NGM1LjA4LTEyLjIsMTMuMDctMjMuMDUsMjMuMjUtMzEuMDcsLjIxLS4xNiwuNDMtLjMyLC42NC0uNDgsLjY0LS41LDEuMy0xLDEuOTYtMS40NiwuMzctLjI3LC43NC0uNTEsMS4xMS0uNzYsNS4yMi0zLjYsMTAuOTUtNi40NywxNy4wOC04LjQ0LDIuNTgtLjgyLDUuMTctMS41MSw3Ljc1LTIuMDMsLjEtLjAyLC4yLS4wNCwuMy0uMDYsLjAyLS4wMSwuMDMtLjAxLC4wNCwwLC40Mi0uMSwuODQtLjE4LDEuMjUtLjI2LC40NC0uMDksLjg3LS4xNiwxLjMxLS4yNGwuMjQtLjAzYy4zNi0uMDcsLjcyLS4xMywxLjA3LS4xN2wxLjM1LS4xOWMuMzEtLjA0LC42MS0uMDcsLjkyLS4xMiwuMDctLjAxLC4xNS0uMDEsLjIyLS4wMiwuMDEsMCwuMDMsMCwuMDQtLjAxaC4xbDEuMDUtLjEyLC4yOS0uMDMsNC4xOC0uMjYsMi41NC0uMDVoLjAxYy42NywwLDEuMzUsLjAxLDIuMDIsLjAzLC4zNCwuMDEsLjY3LC4wMiwxLjAyLC4wNCwuNjYsLjAyLDEuMzMsLjA1LDEuOTgsLjExLC4zNCwuMDIsLjY3LC4wNCwxLjAyLC4wNywuNjYsLjA1LDEuMzMsLjEyLDEuOTksLjE5LC42NCwuMDcsMS4yOSwuMTYsMS45MywuMjVoLjAyYy42MywuMSwxLjI3LC4xOSwxLjkxLC4zLC41MiwuMDksMS4wNiwuMTgsMS41OSwuMjksLjMxLC4wNSwuNjEsLjEyLC45MSwuMTgsLjU5LC4xMiwxLjE4LC4yNSwxLjc2LC4zNywuNzMsLjE3LDEuNDUsLjM1LDIuMTYsLjU1LC4wMywwLC4wNiwuMDEsLjEsLjAybDEuNTEsLjQyYzIuNDMsLjcxLDQuODIsMS41NCw3LjE1LDIuNSwuNTksLjI1LDEuMTcsLjQ5LDEuNzUsLjc1LC41OCwuMjYsMS4xNiwuNTIsMS43NCwuNzksLjU3LC4yNywxLjE0LC41NSwxLjcsLjg0LC41NywuMjksMS4xMiwuNTgsMS42OCwuODgsMTMuOTksNy41NywyNS4zNiwxOS43NiwzMS44MywzNS4wMmwzOC43LDkyLjk1LDU5LjQ2LDE0My4xMWMuMDcsLjE3LC4wNSwuMzctLjA1LC41MmwtMTIxLjMxLDE4MS43WiIvPg0KICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTY0Mi44LDE1OS44OWMtLjY5LDE0Ljc3LTYuOTQsMjcuOS0xNi43NCwzNy43LTEwLjI5LDEwLjI4LTI0LjU3LDE2LjY4LTQwLjM0LDE2LjY4aC04NS43M2MtMjguOTIsMC01NC45OSwxNy4zOS02Ni4xLDQ0LjA4bC0xMDkuNzcsMjYzLjc2LS4xMSwuMjNjLTIuODYsNi43NC03LjA5LDEyLjkxLTEyLjIzLDE4LjA1LTEwLjI5LDEwLjI4LTI0LjU3LDE2LjY4LTQwLjM0LDE2LjY4aC0xMTQuMjljLTMxLjU0LDAtNTcuMTQtMjUuNDgtNTcuMTQtNTcuMTMsMC0xNS43Nyw2LjQtMzAuMDUsMTYuOC00MC4zNCwxMC4yOS0xMC40LDI0LjU3LTE2LjgsNDAuMzQtMTYuOGg1Ny4wNmMxMS41NCwwLDIxLjk1LTYuOTQsMjYuMzgtMTcuNTlsNzEuMzEtMTcxLjRjNy44My0xOC44MS02LTM5LjU0LTI2LjM4LTM5LjU0aC01Ni45NGMtMzEuNTQsMC01Ny4xNC0yNS40OC01Ny4xNC01Ny4xMywwLTE1Ljc3LDYuNC0zMC4wNSwxNi42OS00MC4zNCwxMC40LTEwLjQsMjQuNjktMTYuOCw0MC40Ni0xNi44aDM1NC41YzMyLjk0LDAsNjEuMjYsMjYuOTksNTkuNzIsNTkuODlaIi8+DQogICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9ImNscy02IiBkPSJNODk5Ljk0LDUwMi43Yy0uNjksMTQuNzctNi45NCwyNy45MS0xNi43NCwzNy43LTEwLjI5LDEwLjI4LTI0LjU3LDE2LjY4LTQwLjM0LDE2LjY4aC0xMTQuMjljLTEuOTQsMC0zLjg5LS4xMS01LjgzLS4zNC0xLjcxLS4xMS0zLjMxLS4zNC00LjkxLS42OS0xLjQ5LS4yMy0yLjg2LS41Ny00LjIzLTEuMDMtMS40OS0uMzQtMi44Ni0uOC00LjIzLTEuMjYtMS44My0uNjktMy42Ni0xLjM3LTUuMzctMi4yOS0uMjMsMC0uNDYtLjExLS42OS0uMzQtMS43MS0uOC0zLjQzLTEuODMtNS4wMy0yLjg2LS42OS0uMzQtMS4zNy0uOC0xLjk0LTEuMjYtMS4wMy0uNTctMS45NC0xLjI2LTIuODYtMi4wNi0uOC0uNTctMS42LTEuMjYtMi4yOS0xLjk0LS4zNC0uMTEtLjY5LS40Ni0uOTEtLjgtLjY5LS41Ny0xLjM3LTEuMTQtMi4wNi0xLjgzLS41Ny0uNTctMS4xNC0xLjI2LTEuNzEtMS44My00LjU3LTQuNjgtOC4zNC0xMC4yOC0xMC45Ny0xNi42OGwtNzEuMDktMTcxLjA2LTcwLjk3LTE3MC40OWMtLjIzLS41Ny0uNDYtMS4xNC0uOC0xLjcxLTIuNjMtNi42My00LjExLTEzLjgzLTQuMTEtMjEuNDgsMC0xNS43Nyw2LjQtMzAuMDUsMTYuOC00MC4zNCwxMC4yOS0xMC40LDI0LjU3LTE2LjgsNDAuMzQtMTYuOGgxODMuMDdjMzIuOTQsMCw2MS4yNywyNi45OSw1OS43Myw1OS44OS0uNjksMTQuNzYtNi45MywyNy45LTE2LjYyLDM3LjY5LTEwLjQsMTAuMjgtMjQuNjksMTYuNjgtNDAuNDYsMTYuNjhoLTU3LjE3Yy0yMC4zOCwwLTM0LjIxLDIwLjcyLTI2LjM4LDM5LjU0aDBjNC40MywxMC42NSwxNC44NCwxNy41OSwyNi4zOCwxNy41OWg5Mi44M2MzMS42NiwwLDU3LjE0LDI1LjYsNTcuMTQsNTcuMTMsMCwxNS44OC02LjQsMzAuMDUtMTYuNjksNDAuNDUtMTAuMjksMTAuMjgtMjQuNjksMTYuNjgtNDAuNDYsMTYuNjhoLTIxLjUxYy0yMC4zOCwwLTM0LjIxLDIwLjcyLTI2LjM4LDM5LjU0aDBjNC40MywxMC42NSwxNC44NCwxNy42LDI2LjM4LDE3LjZoNTQuNjRjMzIuOTQsMCw2MS4yNiwyNi45OSw1OS43Miw1OS44OVoiLz4NCiAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik03NzYuMjMsNTMxLjgybC0xNi44NSwyNS4yNi04LjA0LDEyLjA2LTEuNTUsMi4zMi0xMTMuMDcsMTY5LjQ5LTEuMDQsMS41Ni04Ny45MSwxMzEuNzctLjIyLC4yNGMtLjkxLDEuMzctMS45NCwyLjc0LTMuMDgsMy45OS0xLjk0LDIuNzQtNC4zNSw1LjE0LTYuODUsNy4zMS0xLjgzLDEuNi0zLjc3LDMuMDgtNS44NCw0LjQ1LTEuODIsMS4yNi0zLjc3LDIuNC01LjgzLDMuMzItMS44MiwxLjAzLTMuNjUsMS45NC01LjYsMi42MmgtLjExYy0yLjE3LC45MS00LjM1LDEuNi02LjYzLDIuMDYtMi4xNywuNTgtNC40NiwxLjAzLTYuNzUsMS4yNi0yLjI4LC4zNC00LjU3LC40NS02Ljg1LC40NS0uMjksMC0uNTcsMC0uODYtLjAxLS4zNCwwLS43LS4wMS0xLjA0LS4wMi0uNjktLjAyLTEuMzgtLjA2LTIuMDctLjExLS4zNS0uMDItLjctLjA1LTEuMDQtLjA5LS4xMS0uMDEtLjIyLS4wMi0uMzMtLjAzLS41LS4wNS0xLjAyLS4xMi0xLjUyLS4xOS0yLjI5LS4yNC00LjU3LS42OS02Ljc1LTEuMjYtMi4yOC0uNDYtNC40Ni0xLjE1LTYuNjMtMi4wNmgtLjExYy0uMDctLjAyLS4xNS0uMDUtLjIxLS4wOS0xLjg3LS42Ni0zLjYyLTEuNTUtNS4zOS0yLjU0bC00Ljg3LTIuNzctLjk1LS41NWMtMS42NC0xLjA5LTMuMi0yLjI2LTQuNy0zLjUtLjM5LS4zMS0uNzYtLjYzLTEuMTQtLjk1LTIuNjItMi4yOC00LjkxLTQuNjgtNi44NS03LjMxLTEuMTUtMS4yNS0yLjE3LTIuNjItMy4wOC0zLjk5cS0uMTItLjEyLS4yMi0uMjRsLTIxMS40NC0zMTYuOTUtLjE3LS4yNi0xNi44NS0yNS4yNmMtMTEuOTYtMTcuODctMTIuNTItMzkuOTUtMy4zOC01Ny43NmguMDFjNC4yOS04LjQsMTAuNzMtMTUuODMsMTkuMTUtMjEuNDIsOS44Mi02LjUyLDIwLjgtOS43MSwzMS43Ny05LjcxLDE4LjQsMCwzNi40Niw5LjAzLDQ3LjQzLDI1LjQ4bDE3LjA4LDI1LjU4LC4wNywuMTIsLjE4LC4yNywxMjEuMzYsMTgxLjc4YzIwLjI2LDMwLjM1LDY0Ljg3LDMwLjM1LDg1LjEzLDBsMTIxLjMxLTE4MS43LC4xNy0uMjYsLjA2LS4xLDE3LjE2LTI1LjdjMTAuOTctMTYuNDUsMjkuMDMtMjUuNDgsNDcuNDMtMjUuNDgsMTAuOTcsMCwyMS45NSwzLjE5LDMxLjc3LDkuNzEsOC40NCw1LjYxLDE0LjksMTMuMDgsMTkuMiwyMS40OXYuMDNjOS4wOSwxNy43OSw4LjUxLDM5LjgzLTMuNDMsNTcuNjZaIi8+DQoNCiAgICAgICAgICAgICAgICA8ZyBjbGFzcz0iY2xzLTMiPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik03ODUuNiw0OTkuODNjMCwyMi40LTEzLjI2LDQzLjY1LTM1LjIsNTIuOTEtMjkuMTQsMTIuMTEtNjIuNjMtMS43MS03NC43NC0zMC44NWwtMTA5LjY5LTI2My42MmMtMTEuMDgtMjYuNjQtMzcuMTEtNDMuOTktNjUuOTYtNDMuOTloMGMtMjguODYsMC01NC44OCwxNy4zNi02NS45Niw0My45OWwtMTA5LjY5LDI2My42MmMtMTIuMTEsMjkuMTQtNDUuNiw0Mi45Ny03NC43NCwzMC44NS0yMS45NC05LjI2LTM1LjItMzAuNTEtMzUuMi01Mi45MSwwLTcuMiwxLjM3LTE0LjYzLDQuMzQtMjEuODNsMTA5LjcyLTI2My43M2gwYzI4Ljc5LTY5LjE5LDk2LjM4LTExNC4yNywxNzEuMzItMTE0LjI3aC40NGM3NC45NSwwLDE0Mi41NCw0NS4wOCwxNzEuMzIsMTE0LjI3aDBsMTA5LjcyLDI2My43M2MyLjk3LDcuMiw0LjM0LDE0LjYzLDQuMzQsMjEuODNaIi8+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+")

  template(v-slot:append)
    v-skeleton-loader(type="img" style={
      height: 'var(--ancho-barras)',
      width: 'var(--ancho-barras)',
      "background-color": "transparent"
    } )
      v-btn( icon size="large")
        template(v-slot:default)
          div(style="height: calc(var(--v-btn-height))")
            ThemeToggler

v-navigation-drawer(color="surface-lighten-1" width="250" v-model="blogView.components.vNavigationDrawer.leftDrawer.active")
  v-list.myList(
    bg-color="surface-lighten-1"
    color="" width="100%"
    :mandatory="true"
    nav
    open-strategy="single"
    :selected="['Home']"
    style="display: flex; flex-direction: column; height: 100%; justify-content: space-between")
    //v-list-subheader Índice

    div
      v-list-item(
        :title="text[lang.id].drawBar.left.home" value="Home" :prepend-icon="icons.classic.light.house" @click="onHomeClick")

    v-list-item(
      :title="text[lang.id].drawBar.left.personal", value="personalPortfolio",
      :prepend-icon="icons.classic.light.user")

  //v-skeleton-loader(type="list-item, list-item, list-item, list-item, list-item, list-item" style="width: 100%" )


      //v-list-group(value="valor")
        template( v-slot:activator="{ props }")
          v-list-item(v-bind="props" title="Users" rounded="xl")

        v-list-group(value="Admin" active-color="red")
          template( v-slot:activator="{ props }")
            v-list-item( v-bind="props" title="Admin" rounded="xl")

          v-list-item( v-for="([title, icon], i) in admins" :key="i" :title="title" :value="title" rounded="xl" subtitle="subtítulo" )

        v-list-group(value="Actions")
          template( v-slot:activator="{ props }")
            v-list-item( v-bind="props" title="Actions")

          v-list-item( v-for="([title, icon], i) in cruds" :key="i" :value="title" :title="title" rounded="xl" )

v-navigation-drawer(v-if="showRightSideBar" location="right" width="250" class="" :border="false" floating sticky)
  template( v-slot:prepend )
    v-skeleton-loader(type="heading")
      div.ms-4.mb-2.mt-4
        jv-text(typography="titleSmall") {{text[lang.id].drawBar.right.content}}

  template( v-slot:default )
    v-skeleton-loader(type="list-item, list-item, list-item, list-item, list-item, list-item" )
      ul.ms-5
        li.ps-3.text-body-2.py-1.font-weight-regular(v-for="item in sections")
          jv-text(typography="labelMedium")
            a.v-toc-link.d-block.transition-swing.text-decoration-none(:href="`${$route.params.lang? '/'+$route.params.lang : ''}/blog/post/${$route.params.postId || ''}#${item.title[lang.id]}`") {{item.title[lang.id]}}

        //li.ps-3.text-body-2.py-1.font-weight-regular.text-primary.router-link-active
          a.v-toc-link.d-block.transition-swing.text-decoration-none(href="/blog/post/post/#whatIs") ¿Qué es canvas?
        //li.ps-3.text-body-2.py-1.font-weight-regular.text-medium-emphasis
          a.v-toc-link.d-block.transition-swing.text-decoration-none(href="/blog/post/post/#howWorks") ¿Cómo funciona canvas?

v-navigation-drawer( width="0")
  div.v-navigation-drawer__flotant_icons( style="max-height: 0px;")
    div( style="background-color: #00b755; min-width: 60px; min-height: 60px; position: absolute; left: 100%")

v-main.d-flex.fd-column.align-center
  v-container.v-main__content.fill-width.text-h5( :class="{'v-media-movile': !mobile}" )
    router-view(v-if="$route.params.postId" :postId="$route.params.postId" style="height: 100%" @loaded="dataLoaded")
    router-view(v-else)

  footer(style="padding: 0")
    //v-divider( thickness="2" length="100%")
    p.copyright &copy; Javier Vergara {{ new Date().getFullYear() }} - {{ text[lang.id].rights }}
</template>

<style lang="sass">
@use "@/settings.scss"


//#HeaderTemplateContainer
//height: 100vh
////min-height: 830px
//max-height: calc(calc(60vw * 0.9) + 75px)
//@media (min-width: 1328px)
  max-height: 792.115px

//@media (max-width: 500px)
  max-height: calc(calc(60vw * 0.8) + 105px)

.v-toolbar
  &.v-app-bar
    overflow: visible
    box-shadow: var(--md-sys-elevation-6)

.v-navigation-drawer
  &--right
    font-size: 14px

    --m: calc(1rem / 4)
    --m-2: calc(var(--m) * 2)
    --m-4: calc(var(--m) * 4)

    --p: calc(1rem / 4)
    --p-1: calc(var(--p) * 1)
    --p-2: calc(var(--p) * 2)
    --p-3: calc(var(--p) * 3)
    --p-4: calc(var(--p) * 4)
    --p-5: calc(var(--p) * 5)
    --p-6: calc(var(--p) * 6)
    --p-7: calc(var(--p) * 7)
    --p-8: calc(var(--p) * 8)
    --p-9: calc(var(--p) * 9)

    .mt-4
      margin-top: var(--m-4)

    .ms-4
      margin-inline-start: var(--m-4)

    .mb-2
      margin-bottom: var(--m-2)


    .ps-1
      padding-inline-start: var(--p-1)

    .ps-2
      padding-inline-start: var(--p-2)

    .ps-3
      padding-inline-start: var(--p-3)

    .ps-4
      padding-inline-start: var(--p-4)

    .ps-5
      padding-inline-start: var(--p-5)

    .ps-6
      padding-inline-start: var(--p-6)

    .ps-7
      padding-inline-start: var(--p-7)

    .ps-8
      padding-inline-start: var(--p-8)

    .ps-9
      padding-inline-start: var(--p-9)

    .py-1
      padding:
        top: var(--p-1)
        bottom: var(--p-1)

    .v-navigation-drawer


      &__prepend
        .font-weight-medium
        font-weight: 500 !important

      &__content
        ul
          padding-right: .25rem
          margin-left: 1rem
          margin-inline-start: 20px !important
          color: white

          li
            border-left: 2px solid #E5E5E5
            font-size: 0.75rem

            &.font-weight-regular
              font-weight: 400 !important


            &.router-link-active
              border-left-color: currentColor

            &.text-body-2
              font-size: .875rem !important
              font-weight: 400
              line-height: 1.25rem
              letter-spacing: .0178571429em !important
              font-family: Roboto, sans-serif !important
              text-transform: none !important

            &.text-medium-emphasis
              color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity)) !important

.v-main
  &__content
    flex-grow: 1

    &.v-media-movile
      padding:
        left: 4em
        right: 4em

      max-width: 900px

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


footer
  width: 100%
  flex-direction: column
  border-top: 2px solid rgba(var(--v-theme-on-background), 0.4)
  padding:
    left: 250px
    right: 250px


  .v-divider
    width: 100%

  .copyright
    color: rgba(var(--v-theme-on-background), 0.3)
    text-align: center
    font:
      size: 12px

</style>