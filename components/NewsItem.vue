<template>
  <nuxt-link 
    :to="news.code"
    class="news__item">
    <h4
      class="news__title"
      v-text="news.title"/>
    <div class="news__info">
      <DateChecker 
        :date="news.date"
        class="news__date"/>
      <div 
        class="news__views"
        v-text="news.views"/>
    </div>
  </nuxt-link>
</template>

<script>
import DateChecker from '~/components/DateChecker.vue'

export default {
  name: 'NewsItem',

  components: {
    DateChecker
  },

  props: {
    news: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style>
.news__item {
  display: block;
  padding: 13px 0 15px 0;
  border-bottom: 1px solid #eaecec;
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
.news__views::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 19px;
  height: 14px;
  background: url('~assets/img/views-grey.svg') no-repeat;
}

.news__item--full-page {
  padding: 0 90px 0 0;
  margin: 60px 0 0 0;
  border-bottom: none;
}
.news__item--full-page .news__title {
  font: 600 22px/1.4 'Montserrat';
}
</style>
