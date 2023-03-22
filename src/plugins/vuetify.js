// Styles
// import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'

// import '@/assets/vuetifyVariables.css'
import '@/assets/jvi/jvi-v1.0/style.css'

// import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { aliases, jvi } from '@/fonts/jvi'
// import { aliases, fa } from 'vuetify/iconsets/fa'
import {md3} from 'vuetify/blueprints'

// Vuetify
import {createVuetify} from 'vuetify'

import {engine} from "@/engine";
import {hexFromArgb} from "@material/material-color-utilities";

engine.theme.set()
const colors = engine.theme.colors
console.log(colors.schemes.dark.error)
console.log(colors.schemes.light)


let darkTheme = {
    dark: true,
    colors: {
        'primary': hexFromArgb(colors.schemes.dark.primary),
        'on-primary': hexFromArgb(colors.schemes.dark.onPrimary),
        'primary-container': hexFromArgb(colors.schemes.dark.primaryContainer),
        'on-primary-container': hexFromArgb(colors.schemes.dark.onPrimaryContainer),
        'secondary': hexFromArgb(colors.schemes.dark.secondary),
        'on-secondary': hexFromArgb(colors.schemes.dark.onSecondary),
        'secondary-container': hexFromArgb(colors.schemes.dark.secondaryContainer),
        'on-secondary-container': hexFromArgb(colors.schemes.dark.onSecondaryContainer),
        'tertiary': hexFromArgb(colors.schemes.dark.tertiary),
        'on-tertiary': hexFromArgb(colors.schemes.dark.onTertiary),
        'tertiary-container': hexFromArgb(colors.schemes.dark.tertiaryContainer),
        'on-tertiary-container': hexFromArgb(colors.schemes.dark.onTertiaryContainer),
        'error': hexFromArgb(colors.schemes.dark.error),
        'on-error': hexFromArgb(colors.schemes.dark.onError),
        'error-container': hexFromArgb(colors.schemes.dark.errorContainer),
        'on-error-container': hexFromArgb(colors.schemes.dark.onErrorContainer),
        'background': hexFromArgb(colors.schemes.dark.background),
        'on-background': hexFromArgb(colors.schemes.dark.onBackground),
        'surface': hexFromArgb(colors.schemes.dark.surface),
        'on-surface': hexFromArgb(colors.schemes.dark.onSurface),
        'surface-variant': hexFromArgb(colors.schemes.dark.surfaceVariant),
        'on-surface-variant': hexFromArgb(colors.schemes.dark.onSurfaceVariant),
        'outline': hexFromArgb(colors.schemes.dark.outline),
        'outline-variant': hexFromArgb(colors.schemes.dark.outlineVariant),
        'shadow': hexFromArgb(colors.schemes.dark.shadow),
        'scrim': hexFromArgb(colors.schemes.dark.scrim),
        'inverse-surface': hexFromArgb(colors.schemes.dark.inverseSurface),
        'inverse-on-surface': hexFromArgb(colors.schemes.dark.inverseOnSurface),
        'inverse-primary': hexFromArgb(colors.schemes.dark.inversePrimary),
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}

console.log(darkTheme.colors.secondary)

let lightTheme = {
    dark: false,
    colors: {
        'primary': hexFromArgb(colors.schemes.light.primary),
        'on-primary': hexFromArgb(colors.schemes.light.onPrimary),
        'primary-container': hexFromArgb(colors.schemes.light.primaryContainer),
        'on-primary-container': hexFromArgb(colors.schemes.light.onPrimaryContainer),
        'secondary': hexFromArgb(colors.schemes.light.secondary),
        'on-secondary': hexFromArgb(colors.schemes.light.onSecondary),
        'secondary-container': hexFromArgb(colors.schemes.light.secondaryContainer),
        'on-secondary-container': hexFromArgb(colors.schemes.light.onSecondaryContainer),
        'tertiary': hexFromArgb(colors.schemes.light.tertiary),
        'on-tertiary': hexFromArgb(colors.schemes.light.onTertiary),
        'tertiary-container': hexFromArgb(colors.schemes.light.tertiaryContainer),
        'on-tertiary-container': hexFromArgb(colors.schemes.light.onTertiaryContainer),
        'error': hexFromArgb(colors.schemes.light.error),
        'on-error': hexFromArgb(colors.schemes.light.onError),
        'error-container': hexFromArgb(colors.schemes.light.errorContainer),
        'on-error-container': hexFromArgb(colors.schemes.light.onErrorContainer),
        'background': hexFromArgb(colors.schemes.light.background),
        'on-background': hexFromArgb(colors.schemes.light.onBackground),
        'surface': hexFromArgb(colors.schemes.light.surface),
        'on-surface': hexFromArgb(colors.schemes.light.onSurface),
        'surface-variant': hexFromArgb(colors.schemes.light.surfaceVariant),
        'on-surface-variant': hexFromArgb(colors.schemes.light.onSurfaceVariant),
        'outline': hexFromArgb(colors.schemes.light.outline),
        'outline-variant': hexFromArgb(colors.schemes.light.outlineVariant),
        'shadow': hexFromArgb(colors.schemes.light.shadow),
        'scrim': hexFromArgb(colors.schemes.light.scrim),
        'inverse-surface': hexFromArgb(colors.schemes.light.inverseSurface),
        'inverse-on-surface': hexFromArgb(colors.schemes.light.inverseOnSurface),
        'inverse-primary': hexFromArgb(colors.schemes.light.inversePrimary),
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}


export default createVuetify({
    icons: {
        defaultSet: 'jvi',
        aliases: {
            ...aliases,
            messages: 'jvi-messages-classic-solid',
            'paper-plane-top': 'jvi-paper-plane-top-classic-solid',
            'user': 'jvi-user-classic-solid',
            'paper-plane': 'jvi-paper-plane-classic-solid',
            'envelope': 'jvi-envelope-classic-solid',
        },
        sets: {jvi}
    },
    customProperties: true,
    theme: {
        //defaultTheme: 'dark',
        themes: {darkTheme, lightTheme,},
        variations: {
            colors: ['primary', 'secondary', 'primary-container', 'on-primary-container'],
            lighten: 2,
            darken: 2,
        },
    },
    blueprint: md3,
    defaults: {
        global: {
            // variant: 'solo',
        },
        VAlert: {
            border: 'start',
            density: "comfortable",
        },
        VTextarea: {
            variant: 'outlined',
        },
        VTextField: {
            variant: 'outlined',
        }
    }
})
