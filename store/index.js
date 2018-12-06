import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      ArticleCardList: [],
      NewsList: [1, 2],
      Titles: {},
      CompilationsList: []
    }),
    actions: {
      async loadPosts({ commit }) {
        const ip = await this.$axios.$get(
          'http://mosolymp.school-olymp.com/Andrey/blog/ArticleCard.php'
        )
        commit('UPGRADE_ARTICLE', ip)
      },
      async loadNews({ commit }) {
        const ip = await this.$axios.$get(
          'http://mosolymp.school-olymp.com/Andrey/blog/News.php'
        )
        commit('UPGRADE_NEWS', ip)
      },
      async loadTitles({ commit }) {
        const ip = await this.$axios.$get(
          'http://mosolymp.school-olymp.com/Andrey/blog/Titles.php'
        )
        commit('UPDATE_TITLES', ip)
      },
      async loadCompilations({ commit }) {
        const ip = await this.$axios.$get(
          'http://mosolymp.school-olymp.com/Andrey/blog/Compilations.php'
        )
        commit('UPDATE_COMPILATIONS', ip)
      }
    },
    mutations: {
      UPGRADE_ARTICLE(state, content) {
        state.ArticleCardList = content
      },
      UPGRADE_NEWS(state, content) {
        state.NewsList = content
      },
      UPDATE_TITLES(state, content) {
        state.Titles = content
      },
      UPDATE_COMPILATIONS(state, content) {
        state.CompilationsList = content
      }
    }
  })
}

export default createStore
