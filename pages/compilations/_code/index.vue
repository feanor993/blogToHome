<template>
  <div class="main">
    <div class="compil-banner">
      <img
        :src="getCurrent.innerImage"
        class="compil-banner__cover"
        alt="Обложка подборки">
      <div class="compil-banner__content">
        <h1
          class="compil-banner__heading"
          v-text="getCurrent.innerTitle"/>
        <p
          class="compil-banner__text"
          v-text="getCurrent.innerSubtitle"/>
      </div>
    </div>
    <div class="article__container compil__item-page">
      <ArticleCard
        v-for="article in getArticles"
        :key="article.code"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import ArticleCard from '~/components/ArticleCard.vue'

export default {
  name: 'Compilation',

  components: {
    ArticleCard
  },

  async asyncData({ store }) {
    await store.dispatch('updateCompilations')
    await store.dispatch('updateArticles')
    return {
      compilations: store.getters.compilations,
      articles: store.getters.articles
    }
  },

  computed: {
    getCurrent() {
      return this._.find(this.compilations, ['code', this.$route.params.code])
    },
    getArticles() {
      return this._.reduce(
        this.getCurrent.innerArticles,
        (res, item) => {
          return res.concat(this._.find(this.articles, ['code', item]))
        },
        []
      )
    }
  }
}
</script>

<style>
.compil-banner {
  display: flex;
  position: relative;
  top: -2px;
  width: 100%;
  padding: 65px 0 60px 0;
  background-color: #8e97d2;
  border-radius: 0 0 4px 4px;
}
.compil-banner__cover {
  margin: 0 160px 0 160px;
}
.compil-banner__content {
  max-width: 580px;
  width: 100%;
}
.compil-banner__heading {
  color: #fff;
  margin: 0 0 30px 0;
}
.compil-banner__text {
  color: #fff;
  font: 500 16px/1.6 'Montserrat';
}
.compil__item-page {
  margin: 70px 0 40px 0;
}
.article__container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
}
</style>
