<template>
  <div>
    <div class="main">
      <section class="section">
        <div class="search__section">
          <div class="search__field">
            <input
              :value="query"
              class="input"
              type="text">

            <button
              class="search__btn"
              type="button">Найти</button>
          </div>
          <div class="sort-by">
            <span
              class="sort-by__stroke"
              @click="toggleDateSort()"
            >по дате</span>
            <span
              class="sort-by__stroke"
              @click="toggleViewsSort()">по популярности</span>
          </div>
          <ul v-if="pages.length > 1">
            <li
              :class="{'dis': disBack}"
              @click="goBack()">Назад</li>
            <li
              v-for="(item, index) in pages"
              :key="item.id"
              :class="{'act': activePage(index)}"
              @click="setPage(item)"
            >
              {{ item }}
            </li>
            <li
              :class="{'dis': disForward}"
              @click="goForward()">Вперед</li>
          </ul>
          <SearchCard
            v-for="item in filteredArticles"
            :key="item.id"
            :url="item.code"
            :img="item.image"
            :category="item.category"
            :title="item.title"
            :text="item.description"
            :date="item.date"
            :views="item.views"
          />
        </div>
        <Info/>
      </section>
    </div>
  </div>
</template>

<script>
import Info from '~/components/Info.vue'
import { mapActions } from 'vuex'
import SearchCard from '~/components/SearchCard.vue'
export default {
  head() {
    return {
      title: 'Поиск',
      meta: [
        {
          name: 'description',
          content: 'Поиск'
        }
      ]
    }
  },

  name: 'Search',
  components: {
    Info,
    SearchCard
  },
  data() {
    return {
      query: '',
      pages: [],
      currentPage: 0,
      articlesPerPage: 3,
      askDate: true,
      askViews: false
    }
  },
  computed: {
    queryArticles() {
      return this.articles.filter(item => item.tags.includes(this.query))
    },
    filteredArticles() {
      if (this.queryArticles) {
        let curPlus = this.currentPage + 1
        let from = curPlus * this.articlesPerPage - this.articlesPerPage
        let to = curPlus * this.articlesPerPage
        return this.queryArticles.slice(from, to)
      }
    },
    disBack() {
      return this.currentPage <= 0
    },
    disForward() {
      return this.currentPage + 1 >= this.pages.length
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(newVal) {
        this.query = newVal.query.q
        this.$store.dispatch('updateQuery', newVal.query.q)
      }
    }
  },
  mounted() {
    this.sortData()
    for (let i = 0; i < Math.ceil(this.queryArticles.length / 3); i++) {
      this.pages.push(i + 1)
    }
    this.$store.dispatch('updateQuery', this.$route.query.q)
    this.query = this.$route.query.q
  },
  methods: {
    setPage(item) {
      this.currentPage = item - 1
    },
    goBack() {
      if (this.currentPage > 0) {
        this.currentPage--
      }
    },
    goForward() {
      if (this.currentPage + 1 < this.pages.length) {
        this.currentPage++
      }
    },
    toggleDateSort() {
      this.askDate = !this.askDate
      if (this.askDate) {
        this.sortData()
      } else {
        this.reverseData()
      }
    },
    toggleViewsSort() {
      this.askViews = !this.askViews
      if (this.askViews) {
        this.sortViews()
      } else {
        this.reverseViews()
      }
    },
    activePage(index) {
      return this.currentPage === index
    },
    ...mapActions(['sortData', 'reverseData', 'sortViews', 'reverseViews'])
  },
  async asyncData({ store }) {
    // if (typeof window !== 'undefined') {
    //   console.log(2345)
    // }
    await store.dispatch('updateArticles')
    return {
      articles: store.getters.articles,
      qq: store.getters.query
    }
  }
}
</script>
<style lang="scss" scoped>
.dis {
  color: red;
}
.act {
  color: green;
}
</style>
<style>
.search__btn {
  width: 130px;
  height: 55px;
  border-radius: 4px;
  background-color: #b43545;
  padding: 0;
  margin: 0 0 0 15px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  transition: 0.3s ease-out;
}
.search__btn:hover {
  background: #941f2e;
}

.input {
  width: calc(100% - 145px);
  height: 55px;
  padding: 0 0 0 30px;
  border-radius: 4px;
  background-color: #f1f2f2;
  font: 700 30px/1.3 'Montserrat';
  border: none;
}

.search__field {
  display: flex;
  position: relative;
  width: 100%;
  margin: 60px 0 30px;
}
/* Страница поиска сортировка и результат */
.sort-by {
  display: flex;
}
.sort-by__stroke {
  font: 500 14px 'Montserrat';
  margin: 3px 0 0 25px;
}
.sort-by__result {
  margin: 0 auto 0 0;
}
.search__section {
  width: calc(100% - 345px);
  padding: 0 50px 0 0;
}

.search-select {
  margin: 0 40px 0 0;
}
.search-select ul {
  background: #fafafa !important;
  color: red !important;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1) !important;
  border: none !important;
  border-radius: 4px !important;
  width: 330px !important;
}
.search-select a {
  font-size: 14px !important;
  font-weight: 500 !important;
  color: #333333 !important;
}
.search-select li:hover,
.search-select a:hover {
  background: red !important;
}
.search-select .vs__selected-options .form-control,
.search-select .dropdown-toggle .vs__actions,
.search-select .vs__selected-options .selected-tag {
  padding: 0 !important;
  margin: 0 !important;
}
.search-select .dropdown-toggle {
  border: none;
  color: red;
}
.search-select:first-child {
  width: 155px;
}
.search-select:nth-child(2) {
  width: 175px;
}
.search-select:nth-child(3) {
  width: 120px;
  margin: 0 auto 0 0;
}
.search-select.v-select .open-indicator:before {
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
}
.search-select .clear {
  display: none;
}

.search-select ::-webkit-input-placeholder {
  color: #a3a4a6;
  font-size: 14px;
  font-weight: 500;
}
.search-select ::-moz-placeholder {
  color: #a3a4a6;
  font-size: 14px;
  font-weight: 500;
}
.search-select :-ms-input-placeholder {
  color: #a3a4a6;
  font-size: 14px;
  font-weight: 500;
}
.search-select :-moz-placeholder {
  color: #a3a4a6;
  font-size: 14px;
  font-weight: 500;
}
</style>
