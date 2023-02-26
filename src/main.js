import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Particles from 'vue3-particles'
import { loadFonts } from './plugins/webfontloader'

import './assets/main.scss'

loadFonts()

const app = createApp(App)
    .use(router)
    .use(store)
    .use(vuetify)
    .use(Particles)

app.config.globalProperties.$filters = {
    capitalize (texto) {
        return  texto.charAt(0).toUpperCase() + texto.slice(1);
    }
}

app.mount('#app')

let ls = 0, abajo = false

$("#hola").scroll(function() {

})

window.addEventListener('scroll', function(e) {

    let as = window.scrollY

    if (abajo) {
        if (as < document.getElementById("HeaderTemplateContainer").offsetHeight/* - 120*/) {
            $('#HeaderNavTemplateContainer').removeClass('paso')
            $('#HeaderPerfilTemplateContainer').removeClass('mdc-elevation--z4')
            $('#HeaderPerfilTemplateContainer').addClass('mdc-elevation--z6')

            abajo = false
        }
    } else {
        if (as >= document.getElementById("HeaderTemplateContainer").offsetHeight/* - 120*/) {
            $('#HeaderNavTemplateContainer').addClass('paso')
            $('#HeaderPerfilTemplateContainer').removeClass('mdc-elevation--z6')
            $('#HeaderPerfilTemplateContainer').addClass('mdc-elevation--z4')

            abajo = true
        }
    }

    ls = as
})


// para dehabilitar el click izquierdo sobre la página
window.onload = function() {
    document.addEventListener("contextmenu", function(e){
        e.preventDefault();
    }, false);
}

//alert('Este portafolio se encuantra en Proceso de Desarrollo, esto es solo un test')
