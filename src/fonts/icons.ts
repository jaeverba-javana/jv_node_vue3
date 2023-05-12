import {defineComponent} from "vuetify/lib/util/index.mjs";
import {makeIconProps} from "vuetify/lib/composables/icons.mjs"
import {createVNode as _createVNode, mergeProps as _mergeProps} from "@vue/runtime-core";
import * as path from "path";

/*interface Icon {
    path: string,
    vb: string
}*/

declare interface IconPaths {
    primary: {
        path: string
    }
    secondary?: {
        path: string
    }
}

class Icon {
    path?: string;
    vb?: string;
    paths?: IconPaths

    constructor(svg:string) {
        this.setVb(svg)

        this.setPaths(svg)
    }

    setVb(svg:string):void {
        let isVb:RegExpExecArray = /(?<=viewBox=")\d \d \d+ \d+(?=")/.exec(svg)
        if (isVb) this.vb = isVb[0]
    }

    setPaths(svg:string):void {
        this.paths = {primary: {path: ""}}
        let primaryPath = "", secondaryPath = ""

        let primaryRegExec:RegExpExecArray = /(?<=class="fa-primary" d=")[\w .,-]+(?=")/.exec(svg)
        if (primaryRegExec) {
            primaryPath = primaryRegExec[0]
            secondaryPath = /(?<=class="fa-secondary" d=")[\w .,-]+(?=")/.exec(svg)[0]

            this.paths.primary.path = primaryPath
            this.paths.secondary = {path: secondaryPath}
        } else {
            this.paths.primary.path = /(?<=d=")[\w .,-]+(?=")/.exec(svg)[0]
        }
    }
}

export const JviSvgIcon = defineComponent({
    name: "JviSvgIcon",

    inheritAttrs: false,
    props: makeIconProps(),

    setup(props, _ref2) {
        let valor = props.icon
        let {attrs} = _ref2;
        console.log(props.icon)

        let svgNode

        if (typeof valor === "string") {

            if (valor.charAt(0) === 'M' || valor.charAt(0) === 'm') {
                svgNode = _createVNode(props.tag, _mergeProps(attrs, {
                    "style": null
                }), [
                    _createVNode("svg", {
                        "class": "v-icon__svg",
                        "xmlns": "http://www.w3.org/2000/svg",
                        "viewBox": "0 0 24 24",
                        "role": "img",
                        "aria-hidden": "true"
                    }, [
                        _createVNode("path", {
                            "d": valor
                        }, null)
                    ])
                ])
            } else {
                let icon = new Icon(valor)

                let hello:RegExpExecArray = /(?<=viewBox=")\d \d \d+ \d+(?=")/.exec(valor)
                // console.log(icon)

                let nodes = []

                if (icon.paths.secondary) {
                    // console.log("lo incluye")

                    nodes.push(_createVNode("path", {d: icon.paths.primary.path}, null))

                    nodes.push(_createVNode("path", {d: icon.paths.secondary.path, style: "opacity:.4"}, null))
                } else {
                    // console.log("no lo incluye")
                    nodes.push(_createVNode("path", {
                        d: icon.paths.primary.path
                    }, null))
                }


                svgNode = _createVNode(props.tag, _mergeProps(attrs, {
                    "style": null
                }), [
                    _createVNode("svg", {
                        "class": "v-icon__svg",
                        "xmlns": "http://www.w3.org/2000/svg",
                        "viewBox": icon.vb,
                        "role": "img",
                        "aria-hidden": "true"
                    }, nodes)
                ])

                // let match = valor.match(/(?<=<path d=")[\w \.-]+(?="\/>)/)
                // if (match)
                //     icon.path = match[0]
                //
                // let vb = valor.match(/(?<=viewBox=")\d \d \d+ \d+(?=")/)
                // if (vb)
                //     icon.vb = vb[0]
            }


        } else {
            // console.log(valor)
            // console.log("Entrado acá")

            svgNode = _createVNode(props.tag, _mergeProps(attrs, {
                "style": null
            }), [

            ])
        }





        return () => svgNode;
    }
});