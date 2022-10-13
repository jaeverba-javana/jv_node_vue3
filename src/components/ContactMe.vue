<template>
  <div id="ContactMeTemplate">
    <h1 class="titulo gordo">{{text[engine.idiomaId].contactame}}</h1>

    <form>
      <div v-for="(item, index) in text[engine.idiomaId].campos" :class="index">
        <!--.contactame_input()-->
        <!--div id="inputErrorsContainer">
          <div class="empity-error-container" v-if="!classes[index].activado">
            <div class="error-text">
              <p>{{item.empty_error}}</p>

              <svg viewBox="0 0 10 10">
                <polygon class="principal" points="0 0 10 0 5 10" />

                <path d="M0,0 5,10 10,0" stroke-width="2" fill="transparent"/>
              </svg>
            </div>

            <div style="min-height: 10px"></div>
          </div>

          <div v-else-if="index == 'input_dir'"></div>
        </div-->

        <h4>{{$filters.capitalize(item.elemento)}}</h4>

        <input
            v-if="index !== exe"
            :type="item.type"
            :id="index"
            class="mdc-elevation--z4"
            :class="classes[index]"
            :autocomplete="item.autocomplete"
            @input="inputEvent"
        />

        <textarea
            v-else :id="index"
            @keyup="menEvent"
            class="mdc-elevation--z4"
            :class="classes[index]"
        ></textarea>

        <div
            class="error_text"
        >
          <p
              v-show="classes[index].warning"
          >{{item.empty_error}}</p>

          <p
              v-show="classes.input_dir.warning_email && index === 'input_dir'"
          >{{item.invalid_error}}</p>
        </div>
      </div>

      <div class="boton">
        <input
            type="button"
            @click="submitForm"
            :value="text[engine.idiomaId].submit"
            :class="{disabled: submit_disabled_bool}"
            :disabled="submit_disabled_bool"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { engine } from "@/engine";
import "jquery"

export default {
  name: "ContactMe",

  data() {return {
    text: {
      "es": {
        "campos": {
          "input_nom": {
            "autocomplete": "name",
            "elemento": "nombres",
            "type": "text",
            empty_error: "Este campo no puede estar vacío."
          },
          "input_dir": {
            "autocomplete": "email",
            "elemento": "correo",
            "type": "email",
            empty_error: "Este campo no puede estar vacío.",
            invalid_error: "El Correo es inválido"
          },
          "input_men": {
            "elemento": "mensaje",
            empty_error: "Debe incluir algún mensaje."
          }
        },
        "contactame": "contáctame",
        "submit": "enviar"
      },
      "en": {
        "campos": {
          "input_nom": {
            "autocomplete": "name",
            "elemento": "names",
            "type": "text",
            empty_error: "Este campo es obligatorio."
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
          }
        },
        "contactame": "contact me",
        "submit": "submit"
      }
    },

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
    }
  }},

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
      let nombre = document.getElementById("input_nom").value
      let email = document.getElementById('input_dir').value
      let mensaje = document.getElementById('input_men').value

      console.log(nombre)
      console.log(email)
      console.log(mensaje)
      console.log(e)


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

      $.ajax({
        "url": "http://localhost:8082/form/solicitud",
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
        console.log(response);
      });
    }
  }
}
</script>

<style lang="sass">
/* -------------------- Contactame - INICIO -------------------- */

#ContactMeTemplate
  width: 100%
  height: 100%

  > h1
    text-align: center
    color: var(--md-sys-color-on-background)
    font-size: 60px
    margin:
      top: 40px
      bottom: 40px

  > form
    display: grid

    width: 100%


    row-gap: 20px
    column-gap: 20px
    padding: 0 20px

    grid-template:
      areas: "nom men" "dir men" "input input"
      columns: 1fr 1fr
      rows: 1fr 1fr

    > .input_nom
      grid-area: nom

    > .input_dir
      grid-area: dir

    > .input_men
      grid-area: men

    > div
      width: 100%
      height: 100%
      display: flex
      flex-direction: column

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
        font-size: 24px
        text-shadow: var(--md-sys-elevation-2px)

        &::after
          content: "*"
          color: var(--md-sys-color-error)

      > input
        min-height: 40px

      > input,
      > textarea
        flex: 1 1 1px
        font-size: 20px
        padding: 10px
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
    >textarea
      font-size: 18px


@media (max-width: 560px)
  #ContactMeTemplate > form > div
    > input,
    >textarea
      font-size: 16px


@media (max-width: 490px)
  #ContactMeTemplate
    > h1
      font-size: 50px
    > form
      grid-template:
        areas: "nom" "dir" "men" "input"
        rows: 1fr 1fr 2fr auto
        columns: 1fr

      > div
        > input,
        >textarea
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



/* -------------------- Contactame - FIN -------------------- */
</style>