<script lang="ts">
import 'jquery'
import {createVNode} from "@vue/runtime-core";
import useRender from "../../plugins/jv/lib/util/useRender"
import {VImg} from "vuetify/lib/components/VImg/index.mjs"
import {VCard} from 'vuetify/lib/components/VCard/index.mjs'
import {VSkeletonLoader} from "vuetify/lib/labs/VSkeletonLoader/index.mjs";
import {VIcon} from "vuetify/lib/components/VIcon/index.mjs";
import {ref} from "vue";
import axios from "axios";
import MText from "../../plugins/jv/lib/components/JvText/JvText"
import {engine as _engine} from "@/engine"
import useMainStore from "@/stores/MainStore";
import {classicRegular, classicSolid} from "@/common/icons";

export default {
  data: () => ({}),
  props: {
    postElements: Object,
    postId: String
  },
  emits: {
    // loadingStarted: value => true,
    loaded: value => true,
    // appendSection: value => true
  },
  setup(props, _ref) {
    let {emit} = _ref

    let loading = ref(true)
    let data = ref({})
    let respondido = ref(false)
    let engine = ref(_engine)

    let mainStore = useMainStore()

    function getIndice(data: Array<PortionInterface>, indice = [], actualLevel = 0) {

      data.forEach(value => {
        if (value.type === "section") {
          indice.push({title: value.title.es, actualLevel})
          indice.concat(getIndice(value.content, indice, actualLevel + 1))
        }
      })

      return indice
    }

    axios.get((process.env.NODE_ENV === 'development' ? "/post/" : 'https://jaeverba-javana.github.io/posts/') + props.postId + ".json")
        .then(value => {
          console.log(value)
          data.value = value.data
          loading.value = false
          respondido.value = true
          console.log("de lo del indice:", getIndice(value.data.content))
          emit('loaded', {title: data.value.title[mainStore.lang.id], content: getIndice(value.data.content)})

        })

        .catch(reason => {
          console.error(reason)
        })

    const titleImg = () => createVNode(VCard, {}, {
      default: () => [
        createVNode(VImg, {
          src: (process.env.NODE_ENV === 'development' ? '/img/webP/' : 'https://jaeverba-javana.github.io/img/webP/') + props.postId + '.webp',
          cover: true,
          maxHeight: '300px'
        }),
      ]
    })

    function crear(data: Array<PortionInterface> | LangContentInterface, level: number | string = 0) {
      let virtualNodes = []

      let actualLevel = level + 1

      console.log(data)

      data.forEach((value, index) => {
        // console.log("Type of container:", value.type)

        switch (value.type) {
          case "p":
            // console.log( value.typography || 'bodyMedium', 'text', value.content[mainStore.lang.id])
            virtualNodes.push(createVNode(MText, {
              typography: value.typography || 'bodyMedium',
              style: [{
                // textIndent: '1rem',
                marginLeft: typeof level === 'number' ? (level ? '1' : '0') + 'rem' : level,
                marginTop: index ? '0.5rem' : '0',
                marginBottom: index >= data.length - 1 ? '1rem' : '0'
                // textAlign: 'justify'
              }]
            }, {
              default: () => value.content[mainStore.lang.id]
            }))
            break

          case "section":
            // emit('appendSection', {title: value.title[mainStore.lang.id], actualLevel})

            virtualNodes.push(createVNode('div', {
              style: [{
                marginTop: index ? '3rem' : '0',
                marginLeft: (level ? '1' : '0') + 'rem',
                marginBottom: index >= data.length - 1 ? '1rem' : '0'
              }],
              class: 'section'
            }, [
              createVNode(MText, {
                typography: level ? level === 1 ? 'titleMedium' : 'titleSmall' : 'titleLarge',
                id: value.title[mainStore.lang.id],
                class: 'section-title'
              }, {
                default: () => [
                  value.title[mainStore.lang.id],
                  createVNode('a', {
                    href: '#' + value.title[mainStore.lang.id]
                  }, [createVNode(VIcon, {
                    icon: classicRegular.link,
                    // color: 'primary',
                    size: '.9em'
                  })]),
                ]
              }),

              ...crear(value.content, actualLevel)
            ]))
            break

          case "uList":
            virtualNodes.push(createVNode('ul', {
              class: ['jv-uList'],
              style: [{
                marginTop: index ? '2rem' : '0',
                marginLeft: (level ? '1' : '0') + 'rem'
              }],
            }, [
              ...value.content.map((item) => {
                let title = []

                if (item.title)
                  title.push(createVNode(MText, {
                    typography: 'titleSmall'
                  }, {
                    default: () => item.title[mainStore.lang.id]
                  }))
                return createVNode('li', {}, [
                  createVNode('div', {
                    class: ['uList-item-title--container', item.title ? "" : 'no-title']
                  }, [
                    createVNode(VIcon, {
                      icon: classicSolid.circle,
                      size: '.5rem'
                    }),
                    ...title,
                  ]),
                  crear(item.content, "1.5rem")
                ])
              })
            ]))
            break

          case "bibliography":
            const bibliographyText = {
              title: {
                es: "Biliografía"
              }
            }
            virtualNodes.push(createVNode('div', {
              style: [{
                marginTop: index ? '3rem' : '0',
                marginLeft: (level ? '1' : '0') + 'rem',
                marginBottom: index >= data.length - 1 ? '1rem' : '0'
              }],
              class: 'section'
            }, [
              createVNode(MText, {
                typography: level ? level === 1 ? 'titleMedium' : 'titleSmall' : 'titleLarge',
                id: bibliographyText.title[mainStore.lang.id],
                class: 'section-title'
              }, {
                default: () => [
                  bibliographyText.title[mainStore.lang.id],
                  createVNode('a', {
                    href: '#' + bibliographyText.title[mainStore.lang.id]
                  }, [createVNode(VIcon, {
                    icon: classicRegular.link,
                    // color: 'primary',
                    size: '.9em'
                  })]),
                ]
              }),

              createVNode('ul', {
                class: ['jv-uList'],
                style: [{
                  marginLeft: '1rem'
                }],
              }, [
                ...value.content.map((item) => {
                  let title = []

                  if (item.title)
                    title.push(createVNode(MText, {
                      typography: 'titleSmall'
                    }, {
                      default: () => item.title[mainStore.lang.id]
                    }))
                  return createVNode('li', {}, [
                    createVNode('div', {
                      class: ['uList-item-title--container', item.title ? "" : 'no-title']
                    }, [
                      createVNode(VIcon, {
                        icon: classicSolid.circle,
                        size: '.4rem'
                      }),
                      ...title,
                    ]),
                    createVNode(MText, {
                      typography: "bodySmall",
                      style: [{
                        // textIndent: '1rem',
                        marginLeft: '1.5rem',
                        marginTop: index ? '0.5rem' : '0',
                        marginBottom: index >= data.length - 1 ? '1rem' : '0',

                        // textAlign: 'justify'
                      }]
                    }, {
                      default: () => [
                        item.pre + ' ',
                        createVNode('a', {
                          href: item.link,
                          target: '_blank',
                          style: [{
                            color: 'rgb(var(--v-theme-info))',
                            "text-decoration": "underline"
                          }]
                        }, [
                          item.linkText[mainStore.lang.id]
                        ]),
                        '. ' + (item.post ? item.post[mainStore.lang.id] : '')
                      ]
                    })
                  ])
                })
              ])
            ]))
        }

        //   virtualNodes.push(createVNode('div', {
        //     style: [{
        //       marginLeft: `${actualLevel}rem`,
        //       marginTop: `${actualLevel}rem`,
        //     }],
        //     class: "body-section"
        //   }, [
        //     createVNode(MText, {
        //       typography: 'titleLarge',
        //       id: value.title[mainStore.lang.id]
        //     }, {
        //       default: () => value.title[mainStore.lang.id]
        //     }),
        //
        //     ...createContent(value.content)
        //   ]))
      })

      return virtualNodes
    }

    useRender(() => createVNode('div', {
      class: "post-blog-view"
    }, {
      default: () => [
        createVNode(VSkeletonLoader, {
          height: '300px',
          type: 'image',
          loading: loading.value
        }, {
          default: () => createVNode('div', {
            style: [{
              width: '100%'
            }]
          }, [titleImg()])

        }),

        createVNode(VSkeletonLoader, {
          type: 'heading',
          loading: loading.value,
          style: [{/*marginLeft: '0.5rem'*/}]
        }, {
          default: () => [
            createVNode(MText, {
              typography: 'displayMedium',
              style: [{
                marginTop: '1rem'
              }],
              id: data.value.title[mainStore.lang.id],
              class: 'main-title'
            }, {
              default: () => [
                data.value.title[mainStore.lang.id],
                createVNode('a', {
                  href: '#' + data.value.title[mainStore.lang.id]
                }, [createVNode(VIcon, {
                  icon: classicRegular.link,
                  // color: 'primary',
                  size: '.9em'
                })]),
              ]
            })
          ]
        }),

        createVNode(VSkeletonLoader, {
          type: 'heading, text@4, heading, text@3, heading, text@5',
          loading: loading.value
        }, {
          default: () => createVNode('div', {class: 'sections'}, crear(data.value['content']))
        }),
      ]
    }))
  },
}

declare interface PostInterface {
  title: LangContentInterface,
  lastDate: string,
  titleImg: string,
  description: LangContentInterface,
  content: Array<PostInterface> | LangContentInterface
}

declare interface PortionInterface {
  type: string,
  title?: LangContentInterface,
  content: Array<PortionInterface> | LangContentInterface
}

declare interface SectionInterface {
  title: string,
  content: Array<TagInterface>
}

declare interface TagInterface {
  type: string,
  content: LangContentInterface
}

declare interface LangContentInterface {
  es: string,
  en: string
}
</script>

<style lang="sass">
.sections .section .section-title, .main-title
  &:hover a
    opacity: 1


  a
    transition: opacity ease 400ms
    opacity: 0
    margin-left: .5em

  i
    color: rgb(var(--v-theme-primary))

.jv-uList
  li
    &:nth-child(n+2)
      margin-top: .7rem

    .uList-item-title--container
      display: flex
      align-items: center

      &.no-title
        height: 0

        i
          margin-top: 1rem

      i
        margin: auto .5rem
</style>