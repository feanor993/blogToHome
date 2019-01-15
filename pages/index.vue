<template>
  <div class="container">
    <main class="main main--mt-30">
      <section class="section section__main-page">
        <div class="popular">
          <ArticleCard
            v-for="article in popular"
            :key="article.code"
            :article="article"
          />
          <h3 class="popular__heading">Популярное</h3>
        </div>

        <div class="news">
          <h3 class="news__heading">Новости</h3>
          <div class="news__list">
            <NewsItem
              v-for="news in newsSlice"
              :key="news.code"
              :news="news"
            />
          </div>
          <nuxt-link
            to="/news"
            class="news__all">Все новости</nuxt-link>
        </div>
      </section>

      <section class="section section--column">
        <h1 class="section__heading--articles">Статьи</h1>

        <div class="article__container">
          <ArticleCard
            v-for="article in articlesSlice"
            :key="article.code"
            :article="article"
          />
        </div>
      </section>
      <ShowMore
        v-if="showBtn"
        class="main__show-more"
        @addMore="addMore"
      />
      <div
        v-else
        class="marger"
      />
    </main>

    <section class="compil__wrapper">
      <div class="main">
        <div class="article__container--jcsb">
          <h1>Подборки</h1>
          <nuxt-link
            to="/compilations"
            class="compil__all">Все подборки</nuxt-link>
        </div>
        <div class="article__container compil__list compil--three">
          <Compilation
            v-for="compilation in threeCompilations"
            :key="compilation.id"
            :compilation="compilation"
            class="compil__item--mb80"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ArticleCard from '~/components/ArticleCard.vue'
import NewsItem from '~/components/NewsItem.vue'
import Compilation from '~/components/Compilation.vue'
import ShowMore from '~/components/ShowMore.vue'

export default {
  head() {
    return {
      title: 'Главная',
      meta: [
        {
          name: 'description',
          content: 'Главная'
        }
      ]
    }
  },

  name: 'Index',

  components: {
    ArticleCard,
    NewsItem,
    Compilation,
    ShowMore
  },

  data() {
    return {
      showValue: 3
    }
  },

  async asyncData({ store }) {
    await store.dispatch('updateArticles')
    await store.dispatch('updateNews')
    await store.dispatch('updateCompilations')
    return {
      articles: store.getters.articles,
      news: store.getters.news,
      compilations: store.getters.compilations
    }
  },

  computed: {
    newsSlice() {
      return this.news.slice(0, 7)
    },
    popular() {
      return this._.filter(this.articles, { popular: true })
    },
    threeCompilations() {
      return this.compilations.slice(0, 3)
    },
    articlesSlice() {
      return this.articles.slice(0, this.showValue)
    },
    showBtn() {
      return this.articles.length > this.showValue
    }
  },

  methods: {
    addMore() {
      this.showValue += 1
    }
  }
}
</script>

<style>
.popular {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 763px;
  width: 100%;
}
.popular .article {
  margin: 0;
}
.popular .article:nth-child(3) {
  margin: 0 44px;
}
.popular .article:nth-child(1) {
  margin: 0 0 80px 0;
}
.popular__heading {
  position: absolute;
  top: 450px;
}
.popular .article.article--big {
  width: 100%;
}
.compil__wrapper {
  background-color: #f9f9f9;
  padding: 70px 0 160px 0;
}
.compil {
  max-width: 1170px;
  width: 100%;
}
.compil__heading {
  width: 100%;
  text-align: center;
}
.news {
  width: 31%;
  max-width: 360px;
  padding: 35px 40px 40px 40px;
  border-radius: 4px;
  border: solid 1px #f2f2f2;
  background-color: #fafafa;
}
.news__heading {
  position: relative;
  margin: 0;
}
.news__heading:before {
  content: '';
  position: absolute;
  left: -45px;
  top: 50%;
  transform: translateY(-50%);
  width: 29px;
  height: 19px;
  background: url('../assets/img/ribbons.svg') no-repeat;
}
.news__title {
  transition: 0.3s ease-out;
}
.news__list .news__title {
  margin: 0;
}
.news__list .news__views {
  display: none;
}
.news__all {
  display: inline-block;
  font: 600 15px 'Montserrat';
  transition: 0.3s ease-out;
}
.news__all:hover {
  color: #ef1832;
}
.compil__wrapper {
  background-color: #f9f9f9;
  padding: 70px 0 160px 0;
}
.compil__list {
  margin: 60px 0 0 0;
}
.compil__all {
  display: flex;
  justify-content: center;
  align-items: center;
  font: 600 14px 'Montserrat';
  width: 164px;
  height: 42px;
  border-radius: 4px;
  border: solid 1px #cdd0d0;
  transition: 0.3s ease-out;
}
.compil__all:hover {
  color: #ef1832;
  border-color: #ef1832;
}
.article__container--jcsb {
  display: flex;
  justify-content: space-between;
}
.main__show-more {
  margin: 0 0 160px 0;
}
</style>
