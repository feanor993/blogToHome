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
        'https://school-olymp.ru/Andrey/blog/ArticleCard.php'
      )
      context.commit('GET_ARTICLES', req.data)
    },
    sortViews(context) {
      context.commit('sortViews')
    },
    sortData(context) {
      context.commit('sortData')
    },
    reverseViews(context) {
      context.commit('reverseViews')
    },
    reverseData(context) {
      context.commit('reverseData')
    }
  },

  mutations: {
    GET_ARTICLES(state, articles) {
      state.articles = articles
    },
    sortViews(state) {
      state.articles = state.articles.sort((a, b) => b.views - a.views)
    },
    sortData(state) {
      state.articles = state.articles.sort((a, b) => {
        let aArr = a.date.split('-').map(item => Number(item))
        let aNum = aArr[0] * 365 + aArr[1] * 30 + aArr[2]
        let bArr = b.date.split('-').map(item => Number(item))
        let bNum = bArr[0] * 365 + bArr[1] * 30 + bArr[2]
        return bNum - aNum
      })
    },
    reverseViews(state) {
      state.articles = state.articles.sort((a, b) => a.views - b.views)
    },
    reverseData(state) {
      state.articles = state.articles.sort((a, b) => {
        let aArr = a.date.split('-').map(item => Number(item))
        let aNum = aArr[0] * 365 + aArr[1] * 30 + aArr[2]
        let bArr = b.date.split('-').map(item => Number(item))
        let bNum = bArr[0] * 365 + bArr[1] * 30 + bArr[2]
        return aNum - bNum
      })
    }
  }
}
