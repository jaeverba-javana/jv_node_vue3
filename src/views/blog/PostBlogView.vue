<script lang="ts">
import {createVNode} from "@vue/runtime-core";
import useRender from "./../../plugins/mine/util/useRender"
import {VImg} from "vuetify/lib/components/VImg/index.mjs"
import {VCard} from 'vuetify/lib/components/VCard/index.mjs'
import {VSkeletonLoader} from "vuetify/lib/labs/VSkeletonLoader/index.mjs";
import {ref} from "vue";
import axios from "axios";
import THEME from './../../plugins/mine/theme/constants'
import MText from "./../../plugins/mine/components/MText/MText"

interface att {
  att: string
  value: string
}

// export interface Component {
//     tag: string
//     attrs?: Array<att>
//     children?: Array<Component>
// }

export const JviSectionHeading = {
  name: "JviSectionHeading",
  props: {
    tag: String,
    text: String
  },
  setup(attrs) {
    console.log("JviSectionHeading props: ", attrs)

    return () => {
      return createVNode(attrs.tag, {}, [
        createVNode("a", {
          class: "router-link-active router-link-exact-active text-decoration-none text-end text-md-start",
          "aria-current": "page",
          href: "#whatIs",
          "aria-hidden": "true"
        }, [
          createVNode("span", {
            class: "text-primary"
          }, "#")
        ]),

        attrs.text
      ])
    }
  }
}

export default {
  data: () => ({}),
  props: {
    nombre: String,
    postElements: Object,
    postId: String
  },
  emits: {
    loadingStarted: value => true,
    loaded: value => true,
  },
  setup(props, _ref) {
    /*let __PostBlogView = createVNode("section", {}, [
        createVNode(VImg, {
            "src": postElements.img.url,
            "max-height": "300px",
            "cover": true
        }),

        createVNode("h1", {}, "Canvas"),

        ...postElements.data.map((item:Component) => {
            console.log(item)

            let comp = Component.createVNodes(item.tag, item.attrs, item.children)

            return comp
        })
    ])

    useRender(() => __PostBlogView)

    useRender(() => createVNode("div", {}, [
        createVNode(VSkeletonLoader, {
            type: ["image"],
            "height": "400px"
        }),
        createVNode(VSkeletonLoader, {
            type: ["article", "article", "article"],
        }),

    ]))*/

    let loading = ref(true)
    let data = ref({})
    let respondido = ref(false)

    axios.get("/post/prueba.json").then(value => {
      console.log(value)
      data.value = value.data
      loading.value = false
      respondido.value = true
    }).catch(reason => {
      console.error(reason)
    })

    const titleImg = () => createVNode(VCard, {}, {
      default: () => [
        createVNode(VImg, {
          src: data.value["titleImg"],
          cover: true,
          maxHeight: '300px'
        }),
      ]
    })

    function createContent(data: Array<{type: string, content: string}> = []) {
      console.log('crear content data', data)
      let virtualNodes = []

      data.forEach(value => {
        let currentNode

        if (value.type === 'p') {
          currentNode = createVNode(MText, {
            type: THEME.typography.bodyLarge,
            style: [{textIndent: '2rem', marginLeft: '1rem', marginTop: '0.5rem', textAlign: 'justify'}]
          }, [value.content])
        }

        virtualNodes.push(currentNode)
      })

      return virtualNodes
    }

    function crear(data: Array<{title: string, content: Array<{type: string}>}>, oldLevel = 0) {
      let virtualNodes = []

      let actualLevel = oldLevel+1

      data.forEach(value => {
        virtualNodes.push(createVNode('div', {
          style: [{
            marginLeft: `${actualLevel}rem`,
            marginTop: `${actualLevel}rem`,
          }]
        }, [
            createVNode(MText, {type: THEME.typography.titleLarge, id: value.title}, [value.title]),
            ...createContent(value.content)
        ]))
      })

      return virtualNodes
    }

    useRender(() => createVNode('div', {}, {
      default: () => [
        createVNode(VSkeletonLoader, {
          height: '300px',
          type: 'image',
          loading: loading.value
        }, {
          default: () => [
            createVNode('div', {
              style: [{
                width: '100%'
              }]
            }, [titleImg()])
          ]
        }),

        createVNode(VSkeletonLoader, {
          type: 'heading',
          loading: loading.value,
          style: [{marginLeft: '0.5rem'}]
        }, {
          default: () => [createVNode(MText, {
            type: THEME.typography.displayLarge,
            style: [{
              marginTop: '1rem'
            }],
            id: data.value.title
          }, [data.value.title])]
        }),

        createVNode(VSkeletonLoader, {
          type: 'heading, text@4, heading, text@3, heading, text@5',
          loading: loading.value
        }, {
          default: () => createVNode('div', {
          }, crear(data.value['sections']))
        }),
      ]
    }))
  },
}
</script>

<!--template lang="pug">
section
  v-img(src="/img/png/fondos/arlo-y-spot-en-el-gran-dinosaurio_2560x1440_xtrafondos.com.jpg" max-height="300px" cover)

  h1 Canvas

  section#whatIs
    h3
      a.router-link-active.router-link-exact-active.text-decoration-none.text-end.text-md-start(aria-current="page" href="#whatIs" aria-hidden="true")
        span.text-primary #
      = '¿Qué es canvas?'

    p Podemos definir un elemento canvas como un lienzo en el cual podemos dibujar y crear elementos gráficos.

    p Canvas fue introducido por Apple para su uso dentro de su propio componente de Mac OS X surgido en 2004 para empujar aplicaciones como widgets de Dashboard (Panel de control) y el navegador Safari. Más tarde, en el 2005, se adoptó en la versión 1.8 de los navegadores Gecko y Opera en 2006. Fue estandarizado por el Grupo de Trabajo de Tecnologías de Aplicación de hipertexto Web (WHATWG por sus siglas en inglés) sobre las nuevas especificaciones propuesta para tecnologías web de última generación.

  section#howWorks
    h3
      a.router-link-active.router-link-exact-active.text-decoration-none.text-end.text-md-start(aria-current="page" href="#howWorks" aria-hidden="true")
        span.text-primary #
      = '¿Cómo funciona canvas?'

    p El elemento canvas introduce una región dibujable en el código HTML con atributos de alto y ancho, y para poder acceder a nuestro lienzo (que es como le llamaremos a este espacio para poder plasmar nuestras creaciones) necesitamos usar JavaScript, usando un conjunto de funciones que el lenguaje ya tiene incluidas, aunque también puedes usar diversas librerías que pueden facilitarte el proceso.

  section#utilities
    h3
      a.router-link-active.router-link-exact-active.text-decoration-none.text-end.text-md-start(aria-current="page" href="#utilities" aria-hidden="true")
        span.text-primary #
      = '¿Para qué me sirve un elemento canvas?'

    p Los canvas se usan más que todo, para crear dibujos o imágenes sobre la marcha.

  section#diferences
    h3
      a.router-link-active.router-link-exact-active.text-decoration-none.text-end.text-md-start(aria-current="page" href="#diferences" aria-hidden="true")
        span.text-primary #
      = '¿En qué se diferencia con SVG?'

    p Ya que hemos definido qué es un elemento canvas, vamos a definir qué es un elemento SVG.

    p SVG, en inglés “Gráficos Vectoriales Escalables”, tal como su nombre lo indica lo podemos definir como dibujos o ilustraciones echas con vectores, y la gran ventaja o lo que hace atractivo a las ilustraciones echas en SVG es que por más que las escales (o sea, por más que las amplíes) la imagen no se va a pixelar, ya que no es una imagen en mapa de bits o, dicho de otra forma, no está compuesta por pixeles. Si quieres saber más a fondo lo que es SVG, lo puedes ver aquí.

    p Entonces, la mayor diferencia entre un elemento canvas y un SVG es que el elemento canvas o la imagen que este produce se compone por pixeles, no como el SVG que los dibujos se componen por vectores.

    p SVG proporciona un mayor rendimiento cuando se trabaja con un número reducido de objetos o vectores. Canvas ofrece un mayor rendimiento para elementos con un tamaño pequeño o sea pocos píxeles de ancho y alto; y con respecto a SVG funciona mejor cuando se requiere de usar un mayor número de objetos o componentes en el lienzo.

    p SVG se puede modificar a través de JavaScript y CSS. Canvas solo se puede modificar con JavaScript.

    p Un archivo SVG se puede usar como una imagen normal en una etiqueta &lt;img>, aunque para compararlo con canvas nos fijaremos en que la estructura del SVG se define en formato HTML, así que se puede incrustar directamente en nuestro HTML, pudiendo así visualizar la estructura en el DOM. Nuestro elemento canva se comporta como un solo elemento similar a &lt;img> y podemos descargarlo como png o jpg.
</template-->

<style lang="sass">
//main
//  h1, h2, h3, h4, h5, h6
//    a
//      bottom: 0
//      display: inline-block
//      left: 0
//      margin: 0 -.7em
//      position: absolute
//      right: 0
//      top: 0
//
//      &:not(:hover)
//        text-decoration: none
//
//        &:not(:focus)
//          opacity: 0
//
//      &.text-md-start
//        @media (min-width: 960px)
//          text-align: start!important
//
//      &:active, &:hover
//        outline-width: 0
//
//
//
//  p
//    text-indent: 1em
//    padding:
//      top: 1rem
//      left: 1rem
//
//    & + p
//      padding-top: 0.5rem
//
//  p + h3, section + section
//    margin-top: 2rem

</style>