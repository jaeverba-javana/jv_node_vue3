import {reactive} from 'vue'
//import { Hct as HCT, argbFromHex, themeFromSourceColor, applyTheme } from "MCU";

import {themeFromSourceColor, applyTheme, argbFromHex} from "@material/material-color-utilities"

export var cookieManager = {
    add: (values) => {
        let key_value;
        try {
            if ((values.key && values.value) || values.value === "") key_value = values.key + "=" + values.value;
            else if (!values.key && !values.value) throw new Error("Propiedades 'key' y 'valor' no detectadas");
            else if (!values.key) throw new Error("Propiedad 'key' no detectada");
            else throw new Error("Propiedad 'valor' no detectada");
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
    idiomas: [
        {
            id: "es",
            idioma: "español",
            img: "/img/svg/banderas/SVG/Espana_cuadrado.svg"
        }, {
            id: "en",
            idioma: "english",
            img: "/img/svg/banderas/SVG/Inglaterra_cuadrado.svg"
        }
    ],
    idioma() {
        for (let item of engine.idiomas) {
            if (item.id == cookieManager.get('lang')) {
                return item
            }
        }
    },

    idiomaId: cookieManager.get('lang'),

    setIdiomaId(id) {
        this.idiomaId = id
    },

    templates: {},

    theme: {
        toggle() {
            localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark');
            this.apply()
        },
        set() {
            if (!localStorage.getItem('theme')) localStorage.setItem('theme', window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light')

            this.apply()
        },
        apply() {
            applyTheme(
                themeFromSourceColor(argbFromHex('#007997'), [{
                    name: 'personalizado-1',
                    value: argbFromHex("#222222"),
                    blend: true
                }, {
                    name: "personalizado-2",
                    value: argbFromHex("#ff0000"),
                    blend: false
                }]), {
                    target: document.body,
                    dark: localStorage.getItem('theme') === 'dark' ? true : false
                }
            )
        }
    }

})

engine.theme.set();