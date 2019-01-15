export default {
  state: () => ({
    titles: {}
  }),

  getters: {
    titles(state) {
      return state.titles
    }
  },

  actions: {
    async updateTitles(context) {
      const req = await this.$axios.get(
        'https://school-olymp.ru/Andrey/blog/Titles.php'
      )
      context.commit('GET_TITLES', req.data)
    }
  },

  mutations: {
    GET_TITLES(state, titles) {
      state.titles = titles
    }
  }
}
