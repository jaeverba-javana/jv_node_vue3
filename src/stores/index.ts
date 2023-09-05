import {createStore} from 'vuex'
import blogViewStoreComponent from "./views/blogViewStoreComponent";

export default createStore({
    state: {
        contactMe: {
            showDialog: false,
            Ok: false,
            status: 0,
        },
        components: {
            LangSelector: {
                active: null,
                height: ""
            },
            vNavigationDrawer: {
                leftDrawer: {
                    active: null
                }
            }
        },
        views: {
            blogView: {
                components: {
                    vNavigationDrawer: {
                        leftDrawer: {
                            active: null
                        }
                    }
                }
            }
        }
    },
    getters: {},
    mutations: {
        toggleShowDialog(state) {
            state.contactMe.showDialog = false
        },
        toggleEmailSentOk(state, b: boolean = null) {
            state.contactMe.Ok = b === null ? !state.contactMe.Ok : b
        },
        setStatus(state, s) {
            state.contactMe.status = s
        },
        toggleActivationOfLeftVNavigationDrawerComponent: (state, active: boolean = null) => state.views.blogView.components.vNavigationDrawer.leftDrawer.active = active === null
            ? !state.views.blogView.components.vNavigationDrawer.leftDrawer.active
            : active,
        toggleActivationOfLangSelectorComponent: (state, active: boolean = null) => {
            state.components.LangSelector.active = active === null ? !state.components.LangSelector.active : active

        },


    },
    actions: {
        toggleActivationOfLangSelectorComponent: (context, active: boolean = null) => {
        }
    }
})
