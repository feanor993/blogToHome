<template>
  <router-link 
    :to="code" 
    :class="getType">
    <img
      v-lazy="coverBig"
      :alt="altText"
      class="article__cover article__cover--big">
    <img
      v-lazy="coverRegular"
      :alt="altText"
      class="article__cover article__cover--regular">
    <img 
      v-lazy="coverMedium"
      :alt="altText"
      class="article__cover article__cover--medium">
    <div class="article__content">
      <div class="tag__container">
        <p
          class="article__tag" 
          v-text="category"/>
        <p 
          v-show="subject" 
          class="article__tag article__tag--black" 
          v-text="subject"/>
      </div>
      <h2 
        class="article__title" 
        v-text="title"/>
      <div class="article__info">
        <DateChecker :date="date"/>
        <div 
          class="article__views" 
          v-text="views"/>
      </div>
    </div>
  </router-link>
</template>

<script>
import DateChecker from '~/components/DateChecker.vue'

export default {
  name: 'ArticleCard',

  components: {
    DateChecker
  },

  props: {
    type: {
      type: String,
      default: 'regular'
    },
    code: {
      type: String,
      default: ''
    },
    coverBig: {
      type: String,
      default: ''
    },
    coverRegular: {
      type: String,
      default: ''
    },
    coverMedium: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    },
    subject: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    views: {
      type: String,
      default: ''
    },
    altText: {
      type: String,
      default: 'Обложка статьи'
    }
  },

  computed: {
    getType() {
      return (
        'article ' +
        (this.type === 'regular'
          ? 'article--regular'
          : this.type === 'medium'
            ? 'article--medium'
            : 'article--big')
      )
    }
  }
}
</script>

<style>
.article__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}
.article__container--center {
  align-items: center;
}
.article {
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 4px;
  transition: 0.3s ease-out;
}
.article__content {
  position: relative;
}
.article__cover {
  width: 100%;
  border-radius: 4px;
  display: none;
}
.article__text {
  font: 16px/1.5 'LavaPro-Reg';
  margin: 0 0 15px 0;
}
.article__tag {
  font: 700 12px 'Montserrat';
  letter-spacing: 1.4px;
  text-transform: uppercase;
  transition: 0.3s ease-out;
}
.article__views {
  position: relative;
  padding: 0 0 0 25px;
  color: #fff;
  font: 600 14px 'Montserrat';
}
.article__views:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 19px;
  height: 14px;
  background: url('../assets/img/views.svg') no-repeat;
}
/* Стили для самой большой превью статьи */
.article.article--big {
  height: auto;
  max-height: 423px;
  max-width: 765px;
  width: 64%;
}
.article.article--big:hover,
.article.article--medium:hover {
  opacity: 0.8;
}
.article.article--regular,
.article.article--medium {
  height: 423px;
}
.article--big .article__content,
.article--medium .article__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translate(-50%);
  width: 438px;
}
.article--big .article__tag,
.article--medium .article__tag {
  opacity: 0.59;
  color: #ffffff;
  margin: 0 0 10px 0;
}
.article--big .article__title,
.article--medium .article__title {
  font-weight: 600;
  text-align: center;
  margin: 0 0 20px 0;
  color: #ffffff;
}
.article--big .article__info,
.article--medium .article__info,
.article.article--tags .article__info {
  display: flex;
}
.article--big .article__date,
.article--medium .article__date {
  color: #fff;
  margin: 0 20px 0 0;
  font: 600 14px 'Montserrat';
}

/* Стили для самой маленькой статьи в популярном */
.popular .article:nth-child(2),
.popular .article:nth-child(3),
.popular .article:nth-child(4) {
  max-width: 225px;
  width: 100%;
  height: auto;
}
.article.article--x-small .article__cover {
  max-height: 205px;
}
.popular .article:nth-child(2) .article__views,
.popular .article:nth-child(3) .article__views,
.popular .article:nth-child(4) .article__views,
.article--regular .article__views {
  display: none;
}
.popular .article:nth-child(2):hover .article__tag,
.popular .article:nth-child(3):hover .article__tag,
.popular .article:nth-child(4):hover .article__tag,
.article--regular:hover .article__tag {
  color: #d5001a;
}
.popular .article:nth-child(2):hover .article__views,
.popular .article:nth-child(3):hover .article__views,
.popular .article:nth-child(4):hover .article__views,
.article--regular:hover .article__views {
  display: block;
}
.popular .article:nth-child(2) .article__tag,
.popular .article:nth-child(3) .article__tag,
.popular .article:nth-child(4) .article__tag,
.article--regular .article__tag {
  color: #ef1832;
  margin: 17px 0 10px 0;
}
.popular .article:nth-child(2) .article__tag:last-child,
.popular .article:nth-child(3) .article__tag:last-child,
.popular .article:nth-child(4) .article__tag:last-child,
.article--regular .article__tag:last-child {
  margin: 17px 0 10px 30px;
  color: #2e2e2e;
  position: relative;
}
.popular .article:nth-child(2) .article__tag:last-child:before,
.popular .article:nth-child(3) .article__tag:last-child:before,
.popular .article:nth-child(4) .article__tag:last-child:before,
.article--regular .article__tag:last-child:before {
  position: absolute;
  left: -15px;
  top: 50%;
  transform: translateY(-50%);
  height: 8px;
  width: 2px;
  content: '';
  background: #191919;
}
.popular .article:nth-child(2) .article__title,
.popular .article:nth-child(3) .article__title,
.popular .article:nth-child(4) .article__title,
.article--regular .article__title {
  font: 600 17px/1.5 'Montserrat';
  margin: 0 0 10px 0;
}
.popular .article:nth-child(2) .article__date,
.popular .article:nth-child(3) .article__date,
.popular .article:nth-child(4) .article__date,
.article--regular .article__date {
  font: 500 13px 'Montserrat';
  color: #a3a4a6;
}
.popular .article:nth-child(2) .article__views,
.popular .article:nth-child(3) .article__views,
.popular .article:nth-child(4) .article__views,
.article--regular .article__views {
  position: absolute;
  top: -33px;
  left: 20px;
}
/* Стили для стандартной превью статьи */
.article.article--regular,
.article.article--medium {
  max-width: 360px;
  width: 32%;
  margin: 0 15px 80px;
}
.article--regular .article__title {
  font-size: 20px;
}
/* Стили для длинного среднего превью статьи */
.article--medium .article__content {
  width: 300px;
}
.article--medium .article__title {
  font: 600 20px 'Montserrat';
}

.article--big .article__cover--big {
  display: block;
}

.article--medium .article__cover--medium {
  display: block;
}

.article--regular .article__cover--regular {
  display: block;
}

.article--x-small .article__cover--x-small {
  display: block;
}
/* Вид статьи на странице тега */
.article.article--tags {
  flex-direction: row;
  align-items: flex-start;
  max-width: 765px;
  width: 100%;
  padding: 50px 0 70px;
  border-bottom: 1px solid #eaecec;
  height: auto;
  margin: 0;
}
.article.article--tags:last-child {
  border: none;
}
.article--tags .article__cover {
  max-width: 262px;
  margin: 0 40px 0 0;
}
.article--tags .article__tag {
  margin: 0 0 10px 0;
}
.article--tags .article__views {
  display: block;
  position: relative;
  top: auto;
  left: auto;
  color: #a3a4a6;
  font-weight: 500;
  margin: 0 0 0 20px;
}
.article--tags .article__views:before {
  background: url(../assets/img/views-grey.svg) no-repeat;
}
.tag__container {
  display: flex;
}
.article__tag:last-child {
  margin-left: 20px;
}
</style>
