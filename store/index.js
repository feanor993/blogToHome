import Vuex from 'vuex'
import NuxtServerInit from './modules/nuxtServerInit'
import ArticlesModule from './modules/articlesModule'
import NewsModule from './modules/newsModule'
import TitlesModule from './modules/titlesModule'
import CompilationsModule from './modules/compilationsModule'
import TagModule from './modules/tag'
const createStore = () => {
  return new Vuex.Store({
    modules: {
      NuxtServerInit,
      ArticlesModule,
      NewsModule,
      TitlesModule,
      CompilationsModule,
      TagModule
    }
  })
}

export default createStore
