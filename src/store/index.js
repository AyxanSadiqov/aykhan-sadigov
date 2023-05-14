import { createStore } from 'vuex'

export default createStore({
  state: {
    hideCursor: true,
  },
  getters: {
  },
  mutations: {
    hideCursor: (state, val) => (state.hideCursor = val),
  },
  actions: {
    hideCursor: ({ commit }, val) => commit("hideCursor", val),
  },
  modules: {
  }
})
