import {ComponentInternalInstance, createVNode, Text} from "vue";
import THEME from "../../theme/constants";
import useRender from "./../../util/useRender"

export default {
    name: 'MText',
    props: {
        type: {default: THEME.typography.bodyMedium},
        gordo: {type: Boolean}
    },

    setup(props, {attrs, slots, data}: ComponentInternalInstance) {
        // console.log('attrs', attrs)
        // console.log('slots', slots)
        // console.log('props', props)
        // console.log(props.gordo)

        let tag = 'p'

        switch (props.type) {
            case THEME.typography.displayLarge:
            case THEME.typography.displayMedium:
            case THEME.typography.displaySmall:
                tag = "h1"
                break
            case THEME.typography.titleLarge:
                tag = "h2"
                break
            case THEME.typography.titleMedium:
                tag = "h3"
                break
            case THEME.typography.titleSmall:
                tag = "h4"
                break
        }

        return () => createVNode(tag, {
            'style': [{
                'font-size': props.type.fontSize + 'em',
                'fontFamily': props.gordo? "cubano" : props.type.fontFamily || 'inherit'
            }]
        }, {
            default: () => [slots.default?.()],
        })

        /*useRender(() => {
            return createVNode('h1', {
                'style': [{
                    'font-size': props.type.fontSize + 'em'
                }]
            }, {
                default: () => [defaultSlot],
            })
        })*/
    }
}