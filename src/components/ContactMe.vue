<template>
  <div id="ContactMeTemplate">
    <h1 class="titulo gordo">{{ text[engine.idiomaId].contactame }}</h1>

    <ContactMeForm/>
  </div>
</template>

<script>
import {engine} from "@/engine";
import "jquery"
import lottie from "lottie-web"
import ContactMeForm from "@/components/ContactMeForm.vue";

export default {
  name: "ContactMe",
  data() {
    return {
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
      text: {
        es: {
          "contactame": "contáctame",},
        en: {
          "contactame": "contact me",},
      }
    }
  },

  computed: {
    submit_disabled_bool() {
      return !((!this.classes.input_nom.warning && this.classes.input_nom.activado) && ((!this.classes.input_dir.warning && !this.classes.input_dir.warning_email) && this.classes.input_dir.activado) && (!this.classes.input_men.warning && this.classes.input_men.activado))
    }
  },

  methods: {
    inputId() {
      return 'input_' + id
    },
    menEvent(e) {
      if (
          e.target.value
          &&
          !this.classes[e.target.id].activado
      ) {
        this.classes[e.target.id].activado = true

        if (this.classes[e.target.id].warning) this.classes[e.target.id].warning = false


      } else if (
          !e.target.value
          &&
          this.classes[e.target.id].activado
      ) {
        this.classes[e.target.id].activado = false
        this.classes[e.target.id].warning = true
      } else if (e.target.value) {
      }

      //this.classes.submit.disabled = !(!this.classes.input_nom.warning && (!this.classes.input_dir.warning && !this.classes.input_dir.warning_email) && !this.classes.input_men.warning)
    },
    nomEvent(e) {

    },
    /*submit: this.handleSubmit(values => {
      this.$store.commit('toggleEmailSent')
      alert(JSON.stringify(values, null, 2))
    }),*/

    //TODO(aashni): Esto solamente va a ser llamdo cuando los imputs sean llamados
    inputEvent(e) {
      if (e.target.value) {
        this.classes[e.target.id].activado = true
        this.classes[e.target.id].warning = false

        if (e.target.id === "input_dir") {
          this.classes.input_dir.warning_email = !/^\w+([-._+]?\w+)*@\w+([.-]?\w+)*((\.\w{2,10})+$)|(@\w+([.-]?\w+)*((\.\w{2,10})+$))/.test(e.target.value)
        }
      } else if (!e.target.value) {
        this.classes[e.target.id].activado = false;
        this.classes[e.target.id].warning = true;

        if (e.target.id === "input_dir") {
          this.classes.input_dir.warning_email = false;
        }
      }

      //this.classes.submit.disabled = !(!this.classes.input_nom.warning && (!this.classes.input_dir.warning && !this.classes.input_dir.warning_email) && !this.classes.input_men.warning)
    },

    submitForm(e) {
      let vueContext = this;

      let nombre = document.getElementById("input_nom").value
      let email = document.getElementById('input_dir').value
      let mensaje = document.getElementById('input_men').value

      // console.log(nombre)
      // console.log(email)
      // console.log(mensaje)
      // console.log(e)


      /*$.ajax({
        url: "/form/solicitud",
        type: "POST",
        dataType: 'json',
        contentType: 'application/json',
        'processData': false,
        data: JSON.stringify({
          nombres: nombre,
          email: email,
          mensaje: mensaje
        }),

        success(res) {
          console.log(res)
        },

        error() { }
      })*/

      this.animationData.element.play()
      this.animationData.active = true

      $.ajax({
        "url": window.location.origin + "/form/solicitud",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "nombres": nombre,
          "email": email,
          "mensaje": mensaje
        }),
      }).done(function (response) {
        console.log(response)
        vueContext.animationData.active = false
        vueContext.animationData.element.stop()
      });
    }
  },

  components: {ContactMeForm}
}
</script>

<style lang="sass">

@use './../settings.scss'

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