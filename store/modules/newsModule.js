export default {
  state: () => ({
    news: []
  }),

  getters: {
    news(state) {
      return state.news
    }
  },

  actions: {
    async updateNews(context) {
      const req = await this.$axios.get(
        'https://school-olymp.ru/Andrey/blog/News.php'
      )
      context.commit('GET_NEWS', req.data)
    }
  },

  mutations: {
    GET_NEWS(state, news) {
      state.news = news
    }
  }
}
