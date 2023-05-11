import {createStore} from 'vuex'
import blogViewStoreComponent from "./views/blogViewStoreComponent";

/*import {

    jvi_angle_down__classic_solid,
    jvi_angle_left__classic_solid,
    jvi_angle_right__classic_solid,
    jvi_angle_up__classic_solid,
    jvi_chevron_up__classic_solid,
    jvi_envelope__classic_solid,
    jvi_messages__classic_solid,
    jvi_paper_plane__classic_solid,
    jvi_person_running__classic_solid,
    jvi_star__classic_solid,
    jvi_user__classic_solid,
} from './../fonts/paths/full/classicSolid.mjs'
import {
    jvi_angle_up__classic_light,
    jvi_envelope__classic_light,
    jvi_messages__classic_light,
    jvi_paper_plane__classic_light,
    jvi_person_running__classic_light,
    jvi_star__classic_light,
    jvi_user__classic_light,
} from './../fonts/paths/full/classicLight.mjs'
import {
    jvi_envelope__classic_regular,
    jvi_messages__classic_regular,
    jvi_paper_plane__classic_regular,
    jvi_user__classic_regular,
} from './../fonts/paths/full/classicRegular.mjs'*/

/*const sharpIcons = {
    solid: {},
    regular: {},

}*/

/*const classicIcons = {
    solid: {
        angleDown: jvi_angle_down__classic_solid,
        angleLeft: jvi_angle_left__classic_solid,
        angleRight: jvi_angle_right__classic_solid,
        angleUp: jvi_angle_up__classic_solid,
        chevronUp: jvi_chevron_up__classic_solid,
        envelope: jvi_envelope__classic_solid,
        messages: jvi_messages__classic_solid,
        paperPlane: jvi_paper_plane__classic_solid,
        personRunning: jvi_person_running__classic_solid,
        star: jvi_star__classic_solid,
        user: jvi_user__classic_solid,

    },
    regular: {
        envelope: jvi_envelope__classic_regular,
        messages: jvi_messages__classic_regular,
        paperPlane: jvi_paper_plane__classic_regular,
        user: jvi_user__classic_regular,
    },
    light: {
        angleUp: jvi_angle_up__classic_light,
        envelope: jvi_envelope__classic_light,
        messages: jvi_messages__classic_light,
        paperPlane: jvi_paper_plane__classic_light,
        personRunning: jvi_person_running__classic_light,
        star: jvi_star__classic_light,
        user: jvi_user__classic_light,

    },
    thin: {},
}*/

export default createStore({
    state: {
        contactMe: {
            showDialog: false,
            Ok: false,
            status: 0,
        },
        /*icons: {
            classic: classicIcons,
            sharp: sharpIcons,
        },*/
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
