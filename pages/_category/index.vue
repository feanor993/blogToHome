<template>
  <div class="container">
    <main class="main main--mt-30">
      <section class="section section--column">
        <div class="toolbar">
          <div class="toolbar__container">
            <div class="toolbar__content">
              <h1
                class="toolbar__title"
                v-text="filteredTitles.title"/>
              <p
                class="toolbar__subtitle"
                v-text="filteredTitles.subtitle"/>
            </div>
            <img
              :src="filteredTitles.image"
              alt="Картинка раздела">
          </div>
        </div>
        <div
          v-show="subjects[0] != null"
          class="subject__wrapper">
          <ul class="subject__list">
            <subject
              v-for="(subject, index) in subjects" 
              :key="index" 
              :title="subject"
            />
          </ul>
        </div>
        <ul class="tags__wrapper">
          <Tag
            v-for="tag in tags"
            :key="tag"
            :title="tag"
          />
        </ul>
        <div class="article__container">
          <ArticleCard
            v-for="article in filteredArticlesSlice"
            :key="article.code"
            :article="article"
          />
        </div>
      </section>
    </main>
    <ShowMore
      v-if="showBtn"
      class="category__show-more"
      @addMore="addMore"
    />
    <div
      v-else
      class="marger"
    />
  </div>
</template>

<script>
import ArticleCard from '~/components/ArticleCard.vue'
import Tag from '~/components/Tag.vue'
import Subject from '~/components/Subject.vue'
import ShowMore from '~/components/ShowMore.vue'

export default {
  async validate({ route, store }) {
    const menus = await store.state.NuxtServerInit.menu.main
    return menus
      .reduce((res, item) => {
        return res.concat(item.href)
      }, [])
      .includes(route.fullPath)
  },

  head() {
    return {
      title: this.filteredTitles.title,
      meta: [
        {
          name: 'description',
          content: this.filteredTitles.title
        }
      ]
    }
  },

  name: 'Catalog',

  components: {
    ArticleCard,
    Tag,
    Subject,
    ShowMore
  },

  data() {
    return {
      showValue: 6
    }
  },

  async asyncData({ store }) {
    await store.dispatch('updateArticles')
    await store.dispatch('updateTitles')
    return {
      articles: store.getters.articles,
      titles: store.getters.titles
    }
  },

  computed: {
    currentRout() {
      return this.$route.params.category
    },

    filteredTitles() {
      return this._.find(this.titles, {
        id: this.currentRout
      })
    },

    filteredArticles() {
      return this._.filter(this.articles, {
        category: this.filteredTitles.title
      })
    },

    filteredArticlesSlice() {
      return this.filteredArticles.slice(0, this.showValue)
    },

    tags() {
      return this._.uniq(
        this._.reduce(
          this.filteredArticles,
          (res, item) => {
            return res.concat(item.tags)
          },
          []
        )
      )
    },

    subjects() {
      return this._.uniq(
        this._.reduce(
          this.filteredArticles,
          (res, item) => {
            return res.concat(item.subject)
          },
          []
        )
      )
    },

    showBtn() {
      return this.filteredArticles.length > this.showValue
    }
  },

  methods: {
    addMore() {
      this.showValue += 6
    }
  }
}
</script>

<style>
.toolbar {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 140px 0 130px;
}

.toolbar__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 60px 0;
}

.toolbar__content {
  width: 520px;
}

.toolbar__subtitle {
  font: 500 18px/1.6 'Montserrat';
  margin: 15px 0 0 0;
}

.tags__list {
  display: flex;
  flex-wrap: wrap;
  height: 40px;
  width: 830px;
  overflow: hidden;
}

.tags__container {
  align-items: flex-end;
  justify-content: space-between;
  display: flex;
  margin: 0 0 25px 0;
}

.tags__add-more {
  opacity: 0.6;
  letter-spacing: 1.4px;
  font: 600 12px/40px 'Montserrat';
  color: #5c5a5a;
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-out;
}

.tags__add-more:hover {
  opacity: 1;
}

.compilations__end-block {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0 60px 0;
  color: #a3a4a6;
}

.subject__list {
  display: flex;
}
.category__show-more {
  margin: 0 auto 160px;
}
.marger {
  height: 160px;
  width: 100%;
}
</style>
