import { createStore } from 'vuex'

const dawersMutations = {
  toggleShowDrawer:(state, p) => {
    console.log(state.components.vNavigationDrawer[p].active)
    state.components.vNavigationDrawer[p].active = !state.components.vNavigationDrawer[p].active;
    console.log(state.components.vNavigationDrawer[p].active)}
}

export default createStore({
  state: {
    contactMe: {
      showDialog: false,
      Ok: false,
      status: 0,
    },
    components: {
      vNavigationDrawer: {
        left: {
          active: window.innerWidth >= 1280
        },
        right: {
          active: window.innerWidth >= 1280
        },
      },
    },
  },
  getters: {
  },

  mutations: {...dawersMutations,
    toggleShowDialog: state => state.contactMe.showDialog = true,
    toggleEmailSentOk: (state, b = null) => state.contactMe.Ok = b===null ? !state.contactMe.Ok : b,
    setStatus: (state, s) => state.contactMe.status = s
  },
  actions: {
  },
  modules: {
  },
  // strict: process.env.NODE_ENV !== 'production'
})
