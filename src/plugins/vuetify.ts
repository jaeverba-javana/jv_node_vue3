// Styles
// import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'

// import '@/assets/vuetifyVariables.css'
// import '@/assets/jvi/jvi-v1.0/style.css'

// import { aliases, mdi } from 'vuetify/iconsets/mdi'
// import { aliases, fa } from 'vuetify/iconsets/fa'

import { VSkeletonLoader } from "vuetify/lib/labs/VSkeletonLoader/index.mjs";
import { aliases, jvi } from '../fonts/jvi-svg'
import {md3} from 'vuetify/blueprints'
import {engine} from "./../engine";
import Themes from './../common/theme'

import {createVuetify} from 'vuetify'

// import { Hct } from "@material/material-color-utilities";

// Simple demonstration of HCT.
// const color = Hct.fromInt(0xff4285f4);
// console.log(`Hue: ${color.hue}`);
// console.log(`Chrome: ${color.chroma}`);
// console.log(`Tone: ${color.tone}`);

// const color =


engine.theme.set()
const colors = engine.theme.colors
console.log(colors)

// @ts-ignore
let theme: Themes = new Themes(colors);

export default createVuetify({
    components: {VSkeletonLoader},
    icons: {
        defaultSet: 'jvi',
        aliases: {
            ...aliases,
        },
        sets: {jvi}
    },
    theme: {
        //defaultTheme: 'dark',
        // @ts-ignore
        themes: {darkTheme: theme.dark, lightTheme: theme.light},
        variations: {
            colors: ['primary', 'secondary', 'primary-container', 'on-primary-container', 'surface',],
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
        },
        VCard: {
            elevation: '2',
            VCard: {
                elevation: '0',
                color: 'inherit',
            }
        }
    },
    display: {
        thresholds: {
            sm: 750
        }
    }
})
