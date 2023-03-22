import {createApp} from 'vue'

createApp({
    data(){
        return {
            preguntas : [
                {
                    p:'Pregunta 1',
                    r:'respuesta 1',
                    img:''
                },
                {
                    p:'Pregunta 2',
                    r:'respuesta 2',
                    img:''
                },
                {
                    p:'Pregunta 3',
                    r:'respuesta 3',
                    img:''
                },
                {
                    p:'Pregunta 4',
                    r:'respuesta 4',
                    img:''
                },
                {
                    p:'Pregunta 5',
                    r:'respuesta 5',
                    img:''
                },

            ],
                puntos:
            {

            }

        }

    },
    methods: {
        cargarPreguntas(){

        }
    },

}).mount('#app')