<template>
  <div class="main">
    <div class="compil-banner">
      <img
        :src="compilation.innerImage"
        class="compil-banner__cover"
        alt="Обложка подборки">
      <div class="compil-banner__content">
        <h1
          class="compil-banner__heading"
          v-text="compilation.innerTitle"/>
        <p
          class="compil-banner__text"
          v-text="compilation.innerSubtitle"/>
      </div>
    </div>
    <div class="article__container compil__item-page">

      <ArticleCard
        v-for="article in articles"
        :key="article.code"
        :code="article.code"
        :cover-big="article.coverBig"
        :cover-regular="article.coverRegular"
        :cover-medium="article.coverMedium"
        :category="article.category"
        :subject="article.subject"
        :title="article.title"
        :date="article.date"
        :views="article.views"
        :alt-text="article.altText"
      />
      
    </div>
  </div>
</template>

<script>
import ArticleCard from '~/components/ArticleCard.vue'

export default {
  components: {
    ArticleCard
  },

  computed: {
    compilation() {
      return this._.find(this.$store.state.CompilationsList, [
        'code',
        this.$route.params.code
      ])
    },
    articles() {
      return this._.reduce(
        this.compilation.innerArticles,
        (res, elem) => {
          return res.concat(
            this._.find(this.$store.state.ArticleCardList, ['code', elem])
          )
        },
        []
      )
    }
  },

  mounted() {
    this.$store.dispatch('loadPosts')
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
