import {mergeProps as _mergeProps, createVNode as _createVNode} from "vue";
// Icons
import {aliases, mdi} from "vuetify/lib/iconsets/mdi.mjs"; // Utilities
import {computed, inject, isRef} from 'vue';
import {defineComponent, genericComponent, mergeDeep, propsFactory} from "vuetify/lib/util/index.mjs"; // Types
export const IconValue = [String, Function, Object];
export const IconSymbol = Symbol.for('vuetify:icons');


export const makeIconProps = propsFactory({
    icon: {
        type: IconValue
    },
    // Could not remove this and use makeTagProps, types complained because it is not required
    tag: {
        type: String,
        required: true
    }
}, 'icon');


export const VComponentIcon = genericComponent()({
    name: 'VComponentIcon',
    props: makeIconProps(),
    setup(props, _ref) {
        let {
            slots
        } = _ref;
        return () => {
            return _createVNode(props.tag, null, {
                default: () => [props.icon ? _createVNode(props.icon, null, null) : slots.default?.()]
            });
        };
    }
});


export const VSvgIcon = defineComponent({
    name: 'VSvgIcon',
    inheritAttrs: false,
    props: makeIconProps(),

    setup(props, _ref2) {
        let valor = props.icon
        // console.log(valor)


        let icon = {}

        if (valor.charAt(0) === 'M') {
            icon.path = valor
            icon.vb = '0 0 24 24'
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


export const VLigatureIcon = defineComponent({
    name: 'VLigatureIcon',
    props: makeIconProps(),
    setup(props) {
        return () => {
            return _createVNode(props.tag, null, {
                default: () => [props.icon]
            });
        };
    }
});
export const VClassIcon = defineComponent({
    name: 'VClassIcon',
    props: makeIconProps(),
    setup(props) {
        return () => {
            return _createVNode(props.tag, {
                "class": props.icon
            }, null);
        };
    }
});
export const defaultSets = {
    svg: {
        component: VSvgIcon
    },
    class: {
        component: VClassIcon
    }
};

// Composables
export function createIcons(options) {
    return mergeDeep({
        defaultSet: 'mdi',
        sets: {
            ...defaultSets,
            mdi
        },
        aliases
    }, options);
}

export const useIcon = props => {
    const icons = inject(IconSymbol);
    if (!icons) throw new Error('Missing Vuetify Icons provide!');
    const iconData = computed(() => {
        const iconAlias = isRef(props) ? props.value : props.icon;
        if (!iconAlias) return {
            component: VComponentIcon
        };
        let icon = iconAlias;
        if (typeof icon === 'string') {
            icon = icon.trim();
            if (icon.startsWith('$')) {
                icon = icons.aliases?.[icon.slice(1)];
            }
        }
        if (!icon) throw new Error(`Could not find aliased icon "${iconAlias}"`);
        if (typeof icon !== 'string') {
            return {
                component: VComponentIcon,
                icon
            };
        }
        const iconSetName = Object.keys(icons.sets).find(setName => typeof icon === 'string' && icon.startsWith(`${setName}:`));
        const iconName = iconSetName ? icon.slice(iconSetName.length + 1) : icon;
        const iconSet = icons.sets[iconSetName ?? icons.defaultSet];
        return {
            component: iconSet.component,
            icon: iconName
        };
    });
    return {
        iconData
    };
};
//# sourceMappingURL=icons.mjs.map