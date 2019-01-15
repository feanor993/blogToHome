<template>
  <main class="main paper__main">
    <section class="section">
      <div class="pad pad--scroll">
        <Likes
          :class="{ likemod: isLiked, dislikemod: isDisliked }"
          :likes="articleText.likes"
          :dislikes="articleText.dislikes"
          @like="clickLike"
          @dislike="clickDislike"
        />
        <SocShare
          :share="share"
        />
      </div>
      <div class="paper">
        <div class="paper__info">
          <span
            v-if="articleText.category != undefined"
            class="paper__tag"
            v-text="articleText.category"
          />
          <span
            v-if="articleText.subject != undefined"
            class="paper__subject"
            v-text="articleText.subject"
          />
          <DateChecker
            :date="articleText.date"
            class="paper__date"
          />
        </div>
        <h1
          class="paper__title"
          v-text="articleText.title"
        />

        <div
          class="article__inner"
          v-html="articleText.html"
        />

        <div class="paper__tags">
          <Tag
            v-for="tag in articleText.tags"
            :key="tag"
            :title="tag"
          />
        </div>

        <div class="pad">
          <Likes
            :class="{ likemod: isLiked, dislikemod: isDisliked }"
            :likes="articleText.likes"
            :dislikes="articleText.dislikes"
            class="likes__bottom"
            @like="clickLike"
            @dislike="clickDislike"
          />
          <SocShare
            :share="share"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Tag from '~/components/Tag.vue'
import DateChecker from '~/components/DateChecker.vue'
import SocShare from '~/components/SocShare.vue'
import Likes from '~/components/Likes.vue'

export default {
  name: 'ArticleInner',

  components: {
    Tag,
    DateChecker,
    SocShare,
    Likes
  },

  props: {
    articleText: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },

  data() {
    return {
      isLiked: false,
      isDisliked: false
    }
  },

  computed: {
    share() {
      let url = this.$route.fullPath
      let title = this.articleText.title
      let hashtags = this.articleText.tags.join(',')
      return {
        url,
        title,
        hashtags
      }
    }
  },

  mounted() {
    this.postViews()
  },

  methods: {
    postViews() {
      let newViews = +this.articleText.views + 1
      this.$axios.$post('http://httpbin.org/post', { newViews: newViews })
    },
    clickLike() {
      if (this.isLiked === true) {
        this.isLiked = false
        this.articleText.likes -= 1
      } else {
        this.isLiked = true
        this.articleText.likes += 1
      }
      if (this.isDisliked === true) {
        this.isDisliked = false
        this.articleText.dislikes -= 1
      }
    },
    clickDislike() {
      if (this.isDisliked === true) {
        this.isDisliked = false
        this.articleText.dislikes -= 1
      } else {
        this.isDisliked = true
        this.articleText.dislikes += 1
      }
      if (this.isLiked === true) {
        this.isLiked = false
        this.articleText.likes -= 1
      }
    }
  }
}
</script>

<style lang="scss">
.likes__section {
  margin: 90px 0 80px;
}
.likes__title {
  margin: 0 0 40px 0;
}

.paper__main {
  position: relative;
}
.paper__info {
  display: flex;
  align-items: center;
}
.paper {
  max-width: 768px;
  width: 100%;
  margin: 55px auto;
}
.paper__tag {
  display: inline-block;
  font: 700 12px 'Montserrat';
  letter-spacing: 1.4px;
  color: #ef1832;
  text-transform: uppercase;
  margin: 0 30px 0 0;
}
.paper__subject {
  position: relative;
  display: inline-block;
  font: 700 12px 'Montserrat';
  letter-spacing: 1.4px;
  color: #2e2e2e;
  text-transform: uppercase;
  margin: 0 25px 0 0;
}
.paper__subject:before {
  position: absolute;
  left: -15px;
  top: 50%;
  transform: translateY(-50%);
  height: 10px;
  width: 2px;
  content: '';
  background: #191919;
}
.paper__date {
  display: inline-block;
  font: 600 12px 'Montserrat';
  letter-spacing: 1.4px;
  color: #a3a4a6;
  text-transform: uppercase;
}
.paper__title {
  margin: 30px 0 17px;
}
.paper__subtitle {
  font: 600 20px/1.5 'Montserrat';
}
.paper__text {
  margin: 35px 0 0 0;
  font: 20px/1.5 'LavaPro-Reg';
}
.paper__tags {
  display: flex;
  flex-wrap: wrap;
  padding: 25px 0 25px;
  border-bottom: 1px solid #dfe0e0;
  border-top: 1px solid #dfe0e0;
  margin: 60px 0 40px;
}
.paper__main-cover {
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin: 45px 0 0 0;
}
.paper__less-title {
  font: 700 24px/1.25 'Montserrat';
  margin: 40px 0 0 0;
}

/* Цитата */
.blockquote {
  width: 100%;
  border-bottom: 1px solid rgba(239, 24, 50, 0.25);
  border-top: 1px solid rgba(239, 24, 50, 0.25);
  padding: 45px 50px 50px;
  margin: 60px 0 0 0;
  font: 500 22px/1.5 'Montserrat';
}

/* Список ссылок */
.article-links {
  margin: 45px 0 0 0;
}
.article-links__title {
  font: 700 20px/2 'Montserrat';
}
.article-links__list {
  padding: 0;
  margin: 0;
}
.article-links__item {
  font: 500 20px/2 'Montserrat';
  list-style: none;
}

/* Фото в статье */
.stream {
  display: flex;
  flex-direction: column;
  margin: 50px 0 0 0;
}
.stream__photo {
  width: 100%;
}
.stream__tag {
  font: 500 14px/1.4 'Montserrat';
  color: #cdd0d0;
  margin: 15px 0 0 0;
}

/* Преподователь */
.teacher {
  display: flex;
  align-items: flex-start;
  margin: 55px 0;
}
.teacher__photo {
  width: 100px;
  border-radius: 50%;
  margin: 0 30px 0 0;
}
.teacher__container {
  display: flex;
  flex-direction: column;
  max-width: 470px;
  width: 100%;
}
.teacher__name {
  font: 600 20px 'Montserrat';
  margin: 15px 0 10px 0;
}
.teacher__info {
  font: 500 14px/1.6 'Montserrat';
  color: #a3a4a6;
}

/* Побдорка книг */
.description__list {
  display: flex;
  flex-direction: column;
}
.description {
  display: flex;
  margin: 70px 0 0 0;
}
.description__cover {
  min-width: 170px;
  width: 100%;
  height: 255px;
  border-radius: 4px;
  margin: 0 30px 0 0;
}
.description__title {
  font: 700 24px/1.25 'Montserrat';
}
.description__link {
  display: inline-block;
  position: relative;
  box-shadow: none;
  padding: 0 25px 0 0;
  margin: 10px 0 25px 0;
}
.description__link:after {
  content: '';
  position: absolute;
  right: 0;
  top: 30%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: url('/img/read.svg') no-repeat;
}
.description__text {
  font: 20px/1.5 'LavaPro-Reg';
}

/* Читай также */
.read-more {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #f1f2f2;
  border-top: 1px solid #f1f2f2;
  padding: 0 70px 0 0;
  margin: 60px 0 0 0;
}
.read-more__image {
  height: 100%;
  margin: 0 30px 0 0;
}
.read-more__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.read-more__title {
  font: 700 17px 'Montserrat';
  margin: 0 0 10px 0;
}
.read-more__caption {
  box-shadow: none;
  line-height: 1.4;
}
.read-more__caption:hover {
  box-shadow: none;
}

/* Лайки, пописка */
.pad {
  display: flex;
  justify-content: space-between;
}
.pad svg {
  cursor: pointer;
}
.pad svg:hover g {
  fill: #ef1832;
  transition: 0.3s ease-out;
}
.pad svg.soc-icon__face:hover g {
  stroke: #ef1832;
  fill: none;
}
.pad .like:hover g,
.pad .dislike:hover g {
  stroke: #ef1832;
}
.soc-icon__face {
  margin: 0 15px;
  position: relative;
}
.pad--scroll {
  position: sticky;
  top: 110px;
  margin: 110px 0 0 0;
  padding: 0 0 0 20px;
  display: flex;
  flex-direction: column-reverse;
}
.pad--scroll .likes__wrapper,
.pad--scroll .soc-icon__wrapper {
  display: flex;
  flex-direction: column;
}
.pad--scroll .dislike {
  margin: 10px 0 0 0;
  top: auto;
}
.pad--scroll .soc-icon__face {
  margin: 15px 0;
  top: auto;
  left: 3px;
}
.pad--scroll .soc-icon__wrapper {
  padding: 0 0 30px 0;
  margin: 0 0 20px 0;
  border-bottom: 1px solid rgba(151, 151, 151, 0.18);
}

/* Источники в статье */
.source {
  display: flex;
  margin: 60px 0 0 0;
}
.source__heading {
  font: 600 18px 'Montserrat';
  padding: 0 35px 0 0;
  border-right: 1px solid #dfe0e0;
}
.source__list {
  margin: 0 0 0 20px;
  padding: 0;
}
.source__item {
  list-style: none;
  font: 500 18px/1.9 'Montserrat';
}
.source__item--bold {
  font-weight: 600;
}

.article__button {
  display: flex;
  position: relative;
  background: transparent;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
}
.soc-icon__wrapper {
  display: flex;
  align-items: center;
}
.likes__bottom {
  display: flex;
  align-items: center;
  justify-content: center;
}
.likes__bottom .like__value,
.likes__bottom .dislike__value {
  left: 50%;
  right: 0;
}
.likes__bottom .like__value {
  top: auto;
  bottom: -10px;
  transform: translate(-50%, 100%);
}
.likes__bottom .dislike__value {
  top: 0;
  bottom: auto;
  transform: translate(-50%, -100%);
}
.likes__bottom .article__button:last-child {
  margin: 0 0 0 30px;
}
</style>
