import {ComponentInternalInstance, createVNode, Text} from "vue";
import THEME from "../../../theme/constants";
import useRender from "../../util/useRender"
import propsFactory from "../../util/propsFactory";
import {makeTypographyProps, useTypography} from "../../composables/typography";

import "./JvText.sass"

const makeJvTextProps = propsFactory({
    // @ts-ignore
    ...makeTypographyProps(),
}, 'JvText')

if (process.env.NODE_ENV === 'development') console.log(makeJvTextProps)

export default {
    name: 'JvText',
    // @ts-ignore
    props: makeJvTextProps()/*{
        type: {default: THEME.typography.bodyMedium},
        gordo: {type: Boolean}
    }*/,

    setup(props, { slots }) {
        const {typographyClasses} = useTypography(props);

        if (process.env.NODE_ENV === 'development') console.log('typographyClasses:', typographyClasses)

        let tag:string = 'p'

        switch (props.typography) {
            case 'displayLarge':
            case 'displayMedium':
            case 'displaySmall':
                tag = "h1"
                break
            case 'titleLarge':
                tag = "h2"
                break
            case 'titleMedium':
                tag = "h3"
                break
            case 'titleSmall':
                tag = "h4"
                break
        }

        return () => createVNode(tag, {
            // 'style': [{
            //     'font-size': props.type.fontSize + 'em',
            //     'fontFamily': props.gordo? "cubano" : props.type.fontFamily || 'inherit',
            //     'font-weight': props.type.fontWeight
            // }]
            'class': ['jv-text', typographyClasses.value]
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