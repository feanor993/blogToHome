export default {
  state: () => ({
    query: ''
  }),

  getters: {
    query(state) {
      return state.query
    }
  },

  actions: {
    updateQuery(context, payload) {
      context.commit('GET_QUERY', payload)
    }
  },

  mutations: {
    GET_QUERY(state, query) {
      state.query = query
    }
  }
}
