import Vuex from 'vuex'
import NuxtServerInit from './modules/nuxtServerInit'
import ArticlesModule from './modules/articlesModule'
import NewsModule from './modules/newsModule'
import TitlesModule from './modules/titlesModule'
import CompilationsModule from './modules/compilationsModule'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      NuxtServerInit,
      ArticlesModule,
      NewsModule,
      TitlesModule,
      CompilationsModule
    }
  })
}

export default createStore
