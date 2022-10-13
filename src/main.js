import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.scss'

const app = createApp(App)
    .use(router)

app.config.globalProperties.$filters = {
    capitalize (texto) {
        return  texto.charAt(0).toUpperCase() + texto.slice(1);
    }
}

app.mount('#app')


let ls = 0, abajo = false

window.addEventListener('scroll', function(e) {

    let as = window.scrollY

    if (abajo) {
        if (as < window.innerHeight - 120) {
            $('#HeaderNavTemplateContainer').removeClass('paso')
            $('#HeaderPerfilTemplateContainer').removeClass('mdc-elevation--z4')
            $('#HeaderPerfilTemplateContainer').addClass('mdc-elevation--z6')

            abajo = false
        }
    } else {
        if (as >= window.innerHeight - 120) {
            $('#HeaderNavTemplateContainer').addClass('paso')
            $('#HeaderPerfilTemplateContainer').removeClass('mdc-elevation--z6')
            $('#HeaderPerfilTemplateContainer').addClass('mdc-elevation--z4')

            abajo = true
        }
    }

    ls = as
})
