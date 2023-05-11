export default {
    state: () => ({
        components: {
            vNavigationDrawer: {
                leftDrawer: {
                    active: null
                }
            }
        }
    }),

    mutations: {
        toggleActivationOfLeftVNavigationDrawerComponent: (state, activate: boolean = null) => state.components.vNavigationDrawer.leftDrawer.active  = activate === null ? !state.components.vNavigationDrawer.leftDrawer.active : activate
    },
    actions: {
    },
    getters: {}
}