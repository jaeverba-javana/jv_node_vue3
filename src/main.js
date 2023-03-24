import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Particles from 'vue3-particles'
import { loadFonts } from './plugins/webfontloader'

import './assets/main.scss'
import "swiper/scss"
import "swiper/scss/navigation"
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

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

// para dehabilitar el click izquierdo sobre la página
window.onload = function() {
    document.addEventListener("contextmenu", function(e){
        e.preventDefault();
    }, false);
}

//alert('Este portafolio se encuantra en Proceso de Desarrollo, esto es solo un test')
