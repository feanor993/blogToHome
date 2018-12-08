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
        'http://mosolymp.school-olymp.com/Andrey/blog/News.php'
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
