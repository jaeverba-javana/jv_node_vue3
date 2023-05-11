<script>
import "jquery"
import {RouterLink, RouterView} from 'vue-router'
import {useTheme} from "vuetify";
import LanguageStore from "@/stores/engine/LanguageStore";
import {mapActions} from "pinia";

export default {
    data() {
        return {}
    },

    methods: {
        ...mapActions(LanguageStore, [])
    },

    beforeMount() {
        this.theme = useTheme()

        if (localStorage.getItem('theme') === 'dark') {
            this.theme.global.name.value = 'darkTheme'

            // $("#html").removeClass("light")
            $("#html").addClass("dark")
        } else {
            // $("#html").removeClass("dark")
            $("#html").addClass("light")
            this.theme.global.name.value = 'lightTheme'
        }

        /*this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
            }
        );*/
    },

    mounted() {
        if (this.$route.params.lang) {
            console.log('Existe el marámetro: ', this.$route.params.lang)
        }
    }
};

</script>

<template>
    <v-app full-height>
        <RouterView/>
    </v-app>
</template>

<style lang="sass">
/* --- --- --- --- MAIN - START --- --- --- --- */
#app
  min-height: 100vh
  background-color: var(--md-sys-color-background)

/* --- --- --- --- MAIN - END --- --- --- --- */
</style>
