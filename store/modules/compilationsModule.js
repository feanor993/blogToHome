export default {
  state: () => {
    compilations: []
  },
  getters: {
    compilations(state) {
      return state.compilations
    }
  },
  actions: {
    async updateCompilations(context) {
      const req = await this.$axios.get(
        'http://mosolymp.school-olymp.com/Andrey/blog/Compilations.php'
      )
      context.commit('GET_COMPILATIONS', req.data)
    }
  },
  mutations: {
    GET_COMPILATIONS(state, compilations) {
      state.compilations = compilations
    }
  }
}
