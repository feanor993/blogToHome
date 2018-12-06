<template>
  <div class="main">
    <div class="heading">
      <h1>Новости</h1>
    </div>
    <section class="section">
      <div class="news__list--full">
        <News
          v-for="news in news"
          :key="news.code"
          :href="news.code"
          :title="news.title"
          :date="news.date"
          :views="news.views"
          class="news__item--full-page"
        />

        <!-- <ShowMore class="show-more--news" :showValue="showValue"/> -->
        <!-- <ShowMore v-if="watchToggleBtn" @showMoreItem="showMore" class="show-more--news"/>

        <div 
          class="news__end-block"
          v-else
        >
          Пока что это все.
        </div>-->
      </div>
      <Info/>
    </section>
  </div>
</template>

<script>
import News from '~/components/News.vue'
// import ShowMore from "@/components/ShowMore.vue";
import Info from '~/components/Info.vue'
// import { mapState } from 'vuex'

export default {
  components: {
    News,
    // ShowMore,
    Info
  },

  data() {
    return {
      showValue: 10
    }
  },

  computed: {
    // ...mapState(['NewsList'])
    news() {
      return this.$store.state.NewsList.slice(0, this.showValue)
    }
    // watchToggleBtn() {
    //   return this.toggleBtn();
    // }
  },

  mounted() {
    this.$store.dispatch('loadNews')
  }

  // methods: {
  // showMore() {
  //   this.showValue += 10;
  // },
  // toggleBtn() {
  //   return this.showValue >= this.$store.state.NewsList.length ? false : true;
  // }
  // }
}
</script>

<style>
.heading {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 55px 0;
  border-bottom: 1px solid #d8d8d8;
}
/* news */
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
  background: url('~/assets/img/ribbons.svg') no-repeat;
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
.news__item {
  display: block;
  padding: 13px 0 15px 0;
  border-bottom: 1px solid #eaecec;
}
.news__item--full-page {
  padding: 0 90px 0 0;
  margin: 60px 0 0 0;
  border-bottom: none;
}
.news__item:last-child {
  border-bottom: none;
}
.news__item:hover .news__title {
  color: #ef1832;
}
.news__item:hover .news__date,
.news__item:hover .news__views {
  color: #768188;
}
.news__info {
  display: flex;
  margin: 11px 0 0 0;
}
.news__date {
  font: 500 14px 'Montserrat';
  color: #a3a4a6;
  transition: 0.3s ease-out;
}
.news__views {
  position: relative;
  padding: 0 0 0 25px;
  margin: 0 0 0 25px;
  font: 500 14px 'Montserrat';
  color: #a3a4a6;
  line-height: 1.5;
  transition: 0.3s ease-out;
}
.news__views:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 19px;
  height: 14px;
  background: url('~assets/img/views-grey.svg') no-repeat;
}
.news__all {
  display: inline-block;
  font: 600 15px 'Montserrat';
  transition: 0.3s ease-out;
}
.news__all:hover {
  color: #ef1832;
}
.news__end-block {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px 0 160px 0;
  color: #a3a4a6;
}
.news__list--full {
  width: calc(100% - 345px);
}
</style>
