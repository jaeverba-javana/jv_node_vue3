import { defineStore } from "pinia";

export default defineStore("blogViewStore", {
    state: ():object => ({
        components: {
            vNavigationDrawer: {
                leftDrawer: {
                    active: null
                }
            }
        }
    }),

    getters: {},
})