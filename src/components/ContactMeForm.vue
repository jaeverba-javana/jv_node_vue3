<template>
  <form @submit.prevent="submit">
    <div class="input_nom">
      <v-text-field
          elevation="5"
          v-model="name.value.value"
          :label="$filters.capitalize(text[engine.idiomaId].campos.input_nom.elemento)"
          :autocomplete="text[engine.idiomaId].campos.input_nom.autocomplete"
          :error-messages="name.errorMessage.value"
          hide-details="auto"
          color="var(--md-sys-color-on-surface-variant)"
          prepend-inner-icon="$user"
      ></v-text-field>
      <!--            :rules="text.es.campos.input_nom.rules"-->
    </div>

    <div class="input_dir">
      <v-text-field
          v-model="email.value.value"
          :label="$filters.capitalize(text[engine.idiomaId].campos.input_dir.elemento)"
          :autocomplete="text[engine.idiomaId].campos.input_dir.autocomplete"
          :error-messages="email.errorMessage.value"
          hide-details="auto"
          color="var(--md-sys-color-on-surface-variant)"
          placeholder="example@website.com"
          prepend-inner-icon="$envelope"
      ></v-text-field>
      <!--            :rules="text.es.campos.input_dir.rules"-->
    </div>

    <div class="input_men">
      <v-textarea
          v-model="mensaje.value.value"
          :label="$filters.capitalize(text[engine.idiomaId].campos.input_men.elemento)"
          :autocomplete="text[engine.idiomaId].campos.input_men.autocomplete"
          class=""
          :error-messages="mensaje.errorMessage.value"
          counter="200"
          color="var(--md-sys-color-on-surface-variant)"
          prepend-inner-icon="$messages"
          clearable>
      </v-textarea>
      <!--            :rules="text[engine.idiomaId].campos.input_men.rules"-->
    </div>

    <div class="boton">
      <v-btn
          class="me-4 gordo"
          type="submit"
          variant="tonal"
          :prepend-icon="animationData.active? '' : '$paper-plane'"
          rounded="0"
          elevation="2"
          size="x-large"
          bgColor="red"
      >
<!--        :disabled="animationData.active"-->
        <span v-show="!animationData.active">{{ text[engine.idiomaId].submit }}</span>
        <span id="loading-formData" v-show="animationData.active"></span>
      </v-btn>

      <v-dialog
          class="v-dialog_container"
          transition="dialog-bottom-transition"
          width="auto"
          v-model="$store.state.contactMe.showDialog"
      >
          <div class="v-dialog-alerts-container">
            <v-alert
                v-if="$store.state.contactMe.status === 2"
                type="success"
                title="El mensaje se ha enviado satisfactoriamente"
            ></v-alert>

            <v-alert
                v-else-if="$store.state.contactMe.status === 0"
                type="error"
                title="Mensaje no enviado"
                text="Ha ocurrido un error inesperado, por favor vuelva a intertarlo luego."
            ></v-alert>

            <v-alert
                v-else-if="$store.state.contactMe.status === 1"
                type="warning"
                title="Correo eltrónico duplicado"
            >
              <p>Se ha encontrado un mensaje con este correo.</p>
              <p>Si es un error, por favor comuníquese al correo: <a href="mailto:support@javiervergara.com">support@javiervergara.com</a>.</p>
            </v-alert>
          </div>
      </v-dialog>

<!--      <v-card>
        <div style="height: 50px; width: 50px; background-color: rgb(var(&#45;&#45;v-theme-primary))"></div>
        <div style="height: 50px; width: 50px; background-color: rgb(var(&#45;&#45;v-theme-on-primary))"></div>
      </v-card>

      <v-card>
        <div style="height: 50px; width: 50px; background-color: rgb(var(&#45;&#45;v-theme-primary-lighten-1))"></div>
        <div style="height: 50px; width: 50px; background-color: rgb(var(&#45;&#45;v-theme-primary))"></div>
        <div style="height: 50px; width: 50px; background-color: rgb(var(&#45;&#45;v-theme-primary-darken-1))"></div>
        <div style="height: 50px; width: 50px; background-color: rgb(var(&#45;&#45;v-theme-primary-darken-2))"></div>
        <div style="height: 50px; width: 50px; background-color: rgb(var(&#45;&#45;v-theme-primary-darken-3))"></div>
        <div style="height: 50px; width: 50px; background-color: rgb(var(&#45;&#45;v-theme-primary-darken-4))"></div>
        <div style="height: 50px; width: 50px; background-color: rgb(var(&#45;&#45;v-theme-primary-darken-5))"></div>
        <div style="height: 50px; width: 50px; background-color: rgb(var(&#45;&#45;v-theme-primary-darken-6))"></div>
      </v-card>-->
    </div>
  </form>
</template>

<script>
import axios from "axios";
import lottie from "lottie-web";
import {ref} from 'vue'
import {engine} from "@/engine";
import {useField, useForm} from "vee-validate";
// import * as VAlert from 'vuetify/lib/components/VAlert/index.mjs'
// import * as VBtn from 'vuetify/lib/components/VBtn/index.mjs'
// import * as VCard from 'vuetify/lib/components/VCard/index.mjs'
// import * as VDialog from 'vuetify/lib/components/VDialog/index.mjs'
// import * as VTextarea from 'vuetify/lib/components/VTextarea/index.mjs'
// import * as VTextField from 'vuetify/lib/components/VTextField/index.mjs'
// import * as VToolbar from 'vuetify/lib/components/VToolbar/index.mjs'

export default {
  name: "ContactMeForm",
  data() {return{engine,
    animationData: {
      active: false
    },
    dialogo: false
  }},
  setup() {
    let text = {
      "es": {
        "campos": {
          "input_nom": {
            "autocomplete": "name",
            "elemento": "nombres",
            "type": "text",
            empty_error: "Este campo no puede estar vacío.",
            minCharacters: "Debes escribir por lo menos tres caracteres.",
            rules: [
              value => !!value || 'Required.',
              value => (value && value.length >= 3) || 'Min 3 characters',
            ]
          },
          "input_dir": {
            "autocomplete": "email",
            "elemento": "correo",
            "type": "email",
            empty_error: "Este campo no puede estar vacío.",
            invalid_error: "El Correo es inválido",
            rules: [
              value => !!value || 'Required.',
              value => (value || '').length <= 50 || 'Max 50 characters',
              value => {
                const pattern = /^\w+([-._+]?\w+)*@\w+([.-]?\w+)*((\.\w{2,10})+$)|(@\w+([.-]?\w+)*((\.\w{2,10})+$))/
                return pattern.test(value) || 'Invalid e-mail.'
              },
            ]
          },
          "input_men": {
            "elemento": "mensaje",
            empty_error: "Debe incluir algún mensaje.",
            minCharacters: "Incluye un mensaje con un mínimo de diez caracteres.",
            maxCharacters: "Incluye un mensaje con un máximo de doscientos caracteres.",
            rules: [
              value => !!value || 'Required.',
              value => (value || '').length <= 200 || 'Max 200 characters',
              value => {
                const pattern = /(<script>)|(<\/script>)|script/
                return !pattern.test(value) || 'No incluir scripts.'
              },
            ]
          }
        },
        "submit": "enviar"
      },
      "en": {
        "campos": {
          "input_nom": {
            "autocomplete": "name",
            "elemento": "name",
            "type": "text",
            empty_error: "Este campo es obligatorio.",
            minCharacters: "Name needs to be at least 2 characters.",
          },
          "input_dir": {
            "autocomplete": "email",
            "elemento": "email address",
            "type": "email",
            empty_error: "Este campo es obligatorio.",
            invalid_error: "This email is invalid"
          },
          "input_men": {
            "elemento": "message",
            empty_error: "Este campo es obligatorio.",
            minCharacters: "Message needs to be at least 10 characters.",
            maxCharacters: "The message must have a maximum of 200 characters..",
          }
        },
        "contactame": "contact me",
        "submit": "submit"
      }
    }

    const {handleSubmit, handleReset} = useForm({
      validationSchema: {
        name(value) {
          if (!value?.length) return text[engine.idiomaId].campos.input_nom.empty_error
          if (value?.length < 3) return text[engine.idiomaId].campos.input_nom.minCharacters

          return true
        },
        mensaje(value) {
          if (!value?.length) return text[engine.idiomaId].campos.input_men.empty_error
          if (value?.length < 10) return text[engine.idiomaId].campos.input_men.minCharacters
          if (value?.length > 200) return text[engine.idiomaId].campos.input_men.maxCharacters

          return true
        },
        email(value) {
          if (!value?.length) return text[engine.idiomaId].campos.input_dir.empty_error
          if (!/^\w+([-._+]?\w+)*@\w+([.-]?\w+)*((\.\w{2,10})+$)|(@\w+([.-]?\w+)*((\.\w{2,10})+$))/i.test(value)) return 'Must be a valid e-mail.'

          return true
        },
      },
    })

    let name = useField('name')
    let email = useField('email')
    let mensaje = useField('mensaje')


    return {text, name, mensaje, email, handleSubmit}
  },

  mounted() {
    // console.log(this)
    this.animationData.element = lottie.loadAnimation({
      container: document.getElementById("loading-formData"),
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: "/img/json/lottie/block_loader.json"
    })


    // this.submit = this.handleSubmit(async values => {
    this.submit = this.handleSubmit(values => {
      // this.$store.commit('toggleEmailSent')
      if (this.animationData.active) {

      } else {
        this.animationData.element.play()
        this.animationData.active = true

        // let res = await axios.post("/api/contactmeform", values);

        axios.post("/api/contactmeform", values,)
            .then(res => {
              console.log(res)
              let p = (res.status+"").charAt(0);
              console.log(p)

              switch ((res.status+"").charAt(0)) {
                case "2":
                  this.$store.commit('toggleShowDialog');
                  this.$store.commit('setStatus', res.data.ok)

                  break

                case "4":
                case "5":
                  break
              }

              this.animationData.active = false;
              this.animationData.element.stop;
            }).catch(error => {
              this.$store.commit('toggleShowDialog');
              this.$store.commit('setStatus', 0)

              this.animationData.active = false;
              this.animationData.element.stop;
        })

      }

    })
  },
  // components: {...VAlert, ...VBtn, ...VCard, ...VDialog, ...VTextarea, ...VTextField, ...VToolbar,}
}
</script>

<style lang="sass" scoped>
.v-dialog-alerts-container
  max-width: 450px
.v-dialog_container
  background-color: #0007
  backdrop-filter: opacity(0.4)
  -webkit-backdrop-filter: opacity(0.4)
</style>