export default {
  state: () => ({
    menu: [],
    social: []
  }),

  getters: {
    menu(state) {
      return state.menu
    },
    social(state) {
      return state.social
    }
  },

  actions: {
    async nuxtServerInit({ commit }, { app }) {
      const menu = await app.$axios.$get(
        'http://mosolymp.school-olymp.com/Andrey/blog/Menu.php'
      )
      const social = await app.$axios.$get(
        'http://mosolymp.school-olymp.com/Andrey/blog/Social.php'
      )
      commit('GET_SOCIAL', social)
      commit('GET_MENU', menu)
    }
  },

  mutations: {
    GET_MENU(state, menu) {
      state.menu = menu
    },
    GET_SOCIAL(state, social) {
      state.social = social
    }
  }
}
