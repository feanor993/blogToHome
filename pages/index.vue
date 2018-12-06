<template>
  <div class="container">
    <main class="main main--mt-30">
      <section class="section section__main-page">
        <div class="popular">
          <ArticleCard
            v-for="article in popular"
            :type="article.type"
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
          <h3 class="popular__heading">Популярное</h3>
        </div>

        <div class="news">
          <h3 class="news__heading">Новости</h3>
          <div class="news__list">
            <News
              v-for="news in newsSlice"
              :key="news.code"
              :href="news.code"
              :title="news.title"
              :date="news.date"
              :views="news.views"
            />
          </div>
          <router-link
            to="/news"
            class="news__all">Все новости</router-link>
        </div>
      </section>

      <section class="section section--column">
        <h1 class="section__heading--articles">Статьи</h1>

        <div class="article__container">
          <ArticleCard
            v-for="article in this.$store.state.ArticleCardList"
            :type="article.type"
            :key="article.code"
            :code="article.code"
            :cover-big="article.coverBig"
            :cover-begular="article.coverRegular"
            :cover-bedium="article.coverMedium"
            :category="article.category"
            :subject="article.subject"
            :title="article.title"
            :date="article.date"
            :views="article.views"
            :alt-text="article.altText"
          />
        </div>
      </section>

    <!-- <ShowMore class="show-more--mb-115"/> -->
    </main>

    <section class="compil__wrapper">
      <div class="main">
        <div class="article__container--jcsb">
          <h1>Подборки</h1>
          <router-link
            to="/compilationsAll"
            class="compil__all">Все подборки</router-link>
        </div>
        <div class="article__container compil__list compil--three">
          <Compilation
            v-for="compilation in threeCompilations"
            :key="compilation.id"
            :code="compilation.code"
            :img="compilation.img"
            :title="compilation.title"
            :description="compilation.description"
            :alt-text="compilation.altText"
            class="compil__item--mb80"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ArticleCard from '~/components/ArticleCard.vue'
import News from '~/components/News.vue'
// import ShowMore from "@/components/ShowMore.vue";
import Compilation from '~/components/Compilation.vue'

export default {
  name: 'Index',

  components: {
    ArticleCard,
    News,
    // ShowMore,
    Compilation
  },

  computed: {
    newsSlice() {
      return this.$store.state.NewsList.slice(0, 7)
    },

    popular() {
      return this._.filter(this.$store.state.ArticleCardList, { popular: true })
    },

    threeCompilations() {
      return this.$store.state.CompilationsList.slice(0, 3)
    }
  },

  mounted() {
    this.$store.dispatch('loadNews')
    this.$store.dispatch('loadPosts')
    this.$store.dispatch('loadCompilations')
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
.news__list {
  margin: 12px 0 20px 0;
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
</style>
