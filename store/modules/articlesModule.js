export default {
  state: () => ({
    articles: []
  }),

  getters: {
    articles(state) {
      return state.articles
    }
  },

  actions: {
    async updateArticles(context) {
      const req = await this.$axios.get(
        'http://mosolymp.school-olymp.com/Andrey/blog/ArticleCard.php'
      )
      context.commit('GET_ARTICLES', req.data)
    }
  },

  mutations: {
    GET_ARTICLES(state, articles) {
      state.articles = articles
    }
  }
}
