import {reactive} from 'vue'
//import { Hct as HCT, argbFromHex, themeFromSourceColor, applyTheme } from "MCU";

import {themeFromSourceColor, applyTheme, argbFromHex} from "@material/material-color-utilities"

import '@/assets/libs/jquery-3.6.1.min'
// import 'jquery/dist/jquery.slim'

// import {$, JQuery} from 'jquery'

// window.$ = $

export var cookieManager = {
    add: (values) => {
        let key_value;
        // noinspection ExceptionCaughtLocallyJS
        try {
            if ((values.key && values.value) || values.value === "") key_value = values.key + "=" + values.value;
            else if (!values.key && !values.value) { // noinspection ExceptionCaughtLocallyJS
                throw new Error("Propiedades 'key' y 'valor' no detectadas");
            }
            else { // noinspection ExceptionCaughtLocallyJS
                if (!values.key) { // noinspection ExceptionCaughtLocallyJS
                    throw new Error("Propiedad 'key' no detectada")
                } else { // noinspection ExceptionCaughtLocallyJS
                    throw new Error("Propiedad 'valor' no detectada");
                }
            }
            let path = values.path ? ";path=" + values.path : "";
            let domain = values.domain ? ";domain=" + values.domain : "";
            let max_age = values.max_age ? ";max-age=" + values.max_age : "";
            let expires = values.expires ? ";expires=" + values.expires : "";
            let secure = values.secure ? ";secure" : "";
            let samesite = values.samesite === "strict" ? ";samesite=strict" : values.samesite === "lax" ? ";samesite=lax" : "";
            document.cookie = key_value + path + domain + max_age + expires + secure + samesite;
        } catch (msg) {
            console.error("Ha ocurrido un error con la creación de la cookie \nEspecificación del error: " + msg);
        }
    },

    get: (key) => {
        try {
            return new RegExp('\\b(?<=' + key + '\\=)(?:\\w|\\s)*\\b').exec(document.cookie)[0];
        } catch {
            return '';
        }
    },

    exist: (key) => {
        return new RegExp('\\b' + key + '\\b').test(document.cookie);
    },

    samesite: {STRICT: "strict", LAX: "lax"}
};






export var engine = reactive({
    idiomaId: cookieManager.get('lang'),

    templates: {},

    elements: {
        root: {
            document: document.getElementById("html"),
            jquery: $("#html"),
        },
        body: {
            document: document.getElementById("body"),
            jquery: $("#body"),
        },
        window: {
            eventListeners: {
                vars: {
                    ls: 0,
                    abajo: false,
                },
                scrollEventListener(e) {
                    let as = window.scrollY;

                    // console.log(engine.elements.window.eventListeners)

                    if (engine.elements.window.eventListeners.vars.abajo) {
                        if (as < document.getElementById("HeaderTemplateContainer").offsetHeight/* - 120*/) {
                            $('#HeaderNavTemplateContainer').removeClass('paso')
                            $('#HeaderPerfilTemplateContainer').removeClass('mdc-elevation--z4')
                            $('#HeaderPerfilTemplateContainer').addClass('mdc-elevation--z6')

                            engine.elements.window.eventListeners.vars.abajo = false
                        }
                    } else {
                        if (as >= document.getElementById("HeaderTemplateContainer").offsetHeight/* - 120*/) {
                            $('#HeaderNavTemplateContainer').addClass('paso')
                            $('#HeaderPerfilTemplateContainer').removeClass('mdc-elevation--z6')
                            $('#HeaderPerfilTemplateContainer').addClass('mdc-elevation--z4')

                            engine.elements.window.eventListeners.vars.abajo = true
                        }
                    }

                    engine.elements.window.eventListeners.vars.ls = as
                }
            }
        }
    },

    theme: {
        toggle() {
            localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark');
            this.apply()
        },
        set() {
            if (!localStorage.getItem('theme')) localStorage.setItem('theme', window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light')

            this.apply()
        },
        get() {
            return localStorage.getItem('theme')
        },
        colors: themeFromSourceColor(argbFromHex('#59B3B3'), [{
            name: "secondary",
            value: argbFromHex("#E88A35"),
            blend: true
        },{
            name: "tertiary",
            value: argbFromHex("#59B359"),
            blend: true
        }]),
        apply() {
            applyTheme(
                this.colors, {
                    target: document.body,
                    dark: localStorage.getItem('theme') === 'dark'
                }
            )
        }
    }
})


// console.log(engine.theme.colors)


//engine.theme.set();