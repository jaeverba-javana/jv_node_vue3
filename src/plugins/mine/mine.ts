import MText from "./components/MText/MText";
import THEME from './theme/constants'

const mine: {
    install(app: any, options: any): void
} = {
    install: (app, options) => {
        console.log('options', options)

        app.component('m-text', MText)

        app.mixin({
            data: () => ({
                Theme: THEME
            }),
            methods: {
                capitalize(string: string) {
                    return string.charAt(0).toUpperCase() + string.slice(1)
                }
            }
        })
    }
}

export default mine