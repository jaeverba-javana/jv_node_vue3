<template>
  <div id="ContactMeTemplate">
    <h1 class="titulo gordo">{{ text[engine.idiomaId].contactame }}</h1>

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
            :prepend-inner-icon="icons.classic.solid.user"
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
            :prepend-inner-icon="icons.classic.solid.envelope"
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
            :prepend-inner-icon="icons.classic.solid.messages"
            clearable>
        </v-textarea>
        <!--            :rules="text[engine.idiomaId].campos.input_men.rules"-->
      </div>

      <div class="boton">
        <v-btn
            class="me-4 gordo"
            type="submit"
            variant="tonal"
            :prepend-icon="animationData.active? '' : icons.classic.solid.paperPlane"
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
        </v-dialog>
      </div>
    </form>
  </div>
</template>

<script>
import IconStore from "@/stores/IconStore";
import {engine} from "@/engine";
import {mapState} from "pinia";
import { jvi_00__classic_light } from "@/fonts/paths/full/classicLight.mjs";
import "jquery"
import lottie from "lottie-web"
import ContactMeForm from "@/components/ContactMeForm.vue";
import {useField, useForm} from "vee-validate";
import axios from "axios";
// import {mapState} from "vuex";

export default {
  name: "ContactMe",
  data() {
    return {
      jvi_00__classic_light,
      engine,
      exe: 'input_men',
      classes: {
        input_nom: {
          activado: false,
          warning: false
        },
        input_dir: {
          activado: false,
          warning: false,
          warning_email: false,
        },
        input_men: {
          activado: false,
          warning: false
        }
      },
      animationData: {
        active: false
      },
      dialogo: false
      // text: {
      //   es: {
      //     "contactame": "contáctame",},
      //   en: {
      //     "contactame": "contact me",},
      // }
    }
  },

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
        "contactame": "contáctame",
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

  computed: {
      ...mapState(IconStore, {
          icons: store => store.icons
      }),
    submit_disabled_bool() {
      return !((!this.classes.input_nom.warning && this.classes.input_nom.activado) && ((!this.classes.input_dir.warning && !this.classes.input_dir.warning_email) && this.classes.input_dir.activado) && (!this.classes.input_men.warning && this.classes.input_men.activado))
    }
  },

  methods: {
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

  components: {ContactMeForm}
}
</script>

<style lang="sass">
.v-dialog_container, .v-overlay__scrim
  background-color: #0009
</style>


<style lang="sass" scoped>
@use "./../settings.scss"


.v-dialog-alerts-container
  max-width: 450px
  //backdrop-filter: opacity(0.4)
  //-webkit-backdrop-filter: opacity(0.4)

//.my-button
//  height: settings.$button-height


/* -------------------- Contactame - INICIO -------------------- */

#ContactMeTemplate
  display: flex
  flex-direction: column
  row-gap: 1em
  width: 100%
  height: 100%
  padding:
    left: 50px
    right: 50px

  > h1
    text-align: center
    color: var(--md-sys-color-on-background)
    font-size: 60px
    margin:
      top: 40px
    @media (max-width: 750px)
      font-size: 50px
    @media (max-width: 650px)
      font-size: 40px
    @media (max-width: 550px)
      font-size: 35px

  > form
    display: grid
    width: 100%
    row-gap: 30px
    column-gap: 40px
    grid-template:
      areas: "nom men" "dir men" "input input"
      columns: 1fr 1fr
      rows: min-content 1fr auto

    @media (max-width: 750px)
      grid-template:
        areas: "nom" "dir" "men" "input"
        rows: 1fr 1fr 2fr auto
        columns: 1fr
      row-gap: 10px

    > .input_nom
      grid-area: nom

    > .input_dir
      grid-area: dir

    > .input_men
      grid-area: men

    > div
      height: min-content

      > #inputErrorsContainer

        > .empity-error-container
          height: 0
          display: flex
          flex-direction: column
          justify-content: end

          > .error-text
            position: relative
            background-color: var(--md-sys-color-error-container)
            color: var(--md-sys-color-on-error-container)

            > svg
              height: 20px
              position: absolute
              width: 100%

              .principal
                fill: var(--md-sys-color-error-container)


      > h4
        color: var(--color-enphasis)
        font-size: 20px
        text-shadow: var(--md-sys-elevation-2px)

        &::after
          content: "*"
          color: var(--md-sys-color-error)

      > input,
      > textarea
        flex: 1 1 1px
        font-size: 16px
        padding: 5px
        opacity: 0.5
        border-width: 2px
        transition: all ease-in-out 0.4s

      > input.warning,
      > textarea.warning
        background-color: var(--md-sys-color-error-container)
        border-color: var(--md-sys-color-error)
        color: var(--md-sys-color-on-errorj-container)
        opacity: 1

      > input.warning_email
        border-color: var(--md-sys-color-error)

      > input:hover,
      > textarea:hover
        box-shadow: var(--md-sys-elevation-12px)

      > input.activado,
      > textarea.activado
        opacity: 1

      > input:focus,
      > textarea:focus
        border-color: var(--md-sys-color-primary)

      > div.error_text
        height: 0

        color: var(--md-sys-color-error)


@media (max-width: 600px)
  #contactame > form > div
    > input,
    > textarea
      font-size: 18px


@media (max-width: 560px)
  #ContactMeTemplate > form > div
    > input,
    > textarea
      font-size: 16px


@media (max-width: 750px)
  #ContactMeTemplate
    > form
      > div
        > input,
        > textarea
          font-size: 18px


#ContactMeTemplate form > div.boton
  display: flex
  justify-content: center
  align-items: center
  grid-area: input
  padding: 10px

  > input
    font:
      size: 20px
      weight: bold
    border: 4px solid var(--md-sys-color-primary-container)
    text-transform: uppercase
    background-color: var(--md-sys-color-primary)
    color: var(--md-sys-color-on-primary)
    padding: 5px 30px
    cursor: pointer
    opacity: 1

  > input.disabled
    opacity: 0.5

  > div
    height: 40px
    display: flex
    align-items: center

#loading-formData
  height: 50px
  svg
    transform: scale(2) !important


/* -------------------- Contactame - FIN -------------------- */
</style>