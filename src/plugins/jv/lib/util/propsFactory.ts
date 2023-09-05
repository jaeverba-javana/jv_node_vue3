/**
 * Creates a factory function for props definitions.
 * This is used to define props in a composable then override default values in an implementing component.
 *
 * @example Simplified signature
 * (props: Props) => (defaults?: Record<keyof props, any>) => Props
 *
 * @example Usage
 * const makeProps = propsFactory({
 *   foo: String,
 * });
 *
 * defineComponent({
 *   props: {
 *     ...makeProps({
 *       foo: 'a',
 *     }),
 *   },
 *   setup (props) {
 *     // would be "string | undefined", now "string" because a default has been provided
 *     props.foo;
 *   },
 * };
 *
 */
export default function (props: object, source: string) {
    return (defaults: { [x: string]: any; }) => {
        return Object.keys(props).reduce((obj:object, prop:string) => {
            const isObjectDefinition:boolean = typeof props[prop] === "object" && props[prop] != null && !Array.isArray(props[prop]);
            const definition:object = isObjectDefinition ? props[prop] : {type: props[prop]};

            if (defaults && prop in defaults)
                obj[prop] = {...definition, default: defaults[prop]};

            else
                obj[prop] = definition;

            if (source && !obj[prop].source) {
                obj[prop].source = source;
            }

            if (process.env.NODE_ENV === 'development') console.log(obj)

            return obj
        }, {})
    }
}