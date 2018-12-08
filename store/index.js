import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      articles: [],
      news: [],
      compilations: [],
      titles: {}
    },
    getters: {
      articles(state) {
        return state.articles
      },
      news(state) {
        return state.news
      },
      compilations(state) {
        return state.compilations
      },
      titles(state) {
        return state.titles
      }
    },
    actions: {
      async updateArticles(context) {
        const req = await this.$axios.get(
          'http://mosolymp.school-olymp.com/Andrey/blog/ArticleCard.php'
        )
        context.commit('GET_ARTICLES', req.data)
      },
      async updateNews(context) {
        const req = await this.$axios.get(
          'http://mosolymp.school-olymp.com/Andrey/blog/News.php'
        )
        context.commit('GET_NEWS', req.data)
      },
      async updateCompilations(context) {
        const req = await this.$axios.get(
          'http://mosolymp.school-olymp.com/Andrey/blog/Compilations.php'
        )
        context.commit('GET_COMPILATIONS', req.data)
      },
      async updateTitles(context) {
        const req = await this.$axios.get(
          'http://mosolymp.school-olymp.com/Andrey/blog/Titles.php'
        )
        context.commit('GET_TITLES', req.data)
      }
    },
    mutations: {
      GET_ARTICLES(state, articles) {
        state.articles = articles
      },
      GET_NEWS(state, news) {
        state.news = news
      },
      GET_COMPILATIONS(state, compilations) {
        state.compilations = compilations
      },
      GET_TITLES(state, titles) {
        state.titles = titles
      }
    }
  })
}

export default createStore
