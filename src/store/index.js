import { createStore } from 'vuex'

export default createStore({
  state: {
    contactMe: {
      showDialog: false,
      Ok: false,
      status: 0,
    }
  },
  getters: {
  },
  mutations: {
    toggleShowDialog(state) {
      state.contactMe.showDialog = true
    },
    toggleEmailSentOk(state, b = null) {
      state.contactMe.Ok = b===null ? !state.contactMe.Ok : b
    },
    setStatus(state, s) {state.contactMe.status = s}
  },
  actions: {
  },
  modules: {
  }
})
