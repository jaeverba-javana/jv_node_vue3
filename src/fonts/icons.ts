import {defineComponent} from "vuetify/lib/util/index.mjs";
import {makeIconProps} from "vuetify/lib/composables/icons.mjs"
import {createVNode as _createVNode, mergeProps as _mergeProps} from "@vue/runtime-core";
import * as path from "path";

/*interface Icon {
    path: string,
    vb: string
}*/

class Icon {
    path?: string;
    vb?: string;

    constructor(path?:string, vb?:string) {
        this.path = path
        this.vb = vb
    }
}

export const JviSvgIcon = defineComponent({
    name: "JviSvgIcon",

    inheritAttrs: false,
    props: makeIconProps(),

    setup(props, _ref2) {
        let valor = props.icon

        let icon:Icon = new Icon();

        if (valor.charAt(0) === 'M' || valor.charAt(0) === 'm') {
            icon.path = valor
            icon.vb = "0 0 24 24"
        } else {
            let match = valor.match(/(?<=<path d=")[\w \.-]+(?="\/>)/)
            if (match)
                icon.path = match[0]

            let vb = valor.match(/(?<=viewBox=")\d \d \d+ \d+(?=")/)
            if (vb)
                icon.vb = vb[0]
        }

        let {
            attrs
        } = _ref2;

        return () => {
            return _createVNode(props.tag, _mergeProps(attrs, {
                "style": null
            }), {
                default: () => [_createVNode("svg", {
                    "class": "v-icon__svg",
                    "xmlns": "http://www.w3.org/2000/svg",
                    "viewBox": icon.vb,
                    "role": "img",
                    "aria-hidden": "true"
                }, [_createVNode("path", {
                    "d": icon.path
                }, null)])]
            });
        };
    }
});