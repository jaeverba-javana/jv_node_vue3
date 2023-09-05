import {computed, isRef} from "vue";
import propsFactory from "../util/propsFactory";

const typographyTypes = [
    'labelSmall',
    'labelMedium',
    'labelLarge',
    'bodySmall',
    'bodyMedium',
    'bodyLarge',
    'titleSmall',
    'titleMedium',
    'titleLarge',
    'displaySmall',
    'displayMedium',
    'displayLarge',
]

export const makeTypographyProps = propsFactory(
    {
        typography: {
            type: String,
            validator: (v: string) => typographyTypes.includes(v)
        },
        flat: {
            type: Boolean
        }
    },
    'typography'
)

export function useTypography(props: { typography: string; [x: string]: any}) {
    const {typography, flat} = props
    const typographyClasses = computed(():string[] => {
        const classes = [`typography-${typography || 'bodyMedium'}`]

        if (flat) classes.push('flat')

        return classes
    })

    return {typographyClasses}
}