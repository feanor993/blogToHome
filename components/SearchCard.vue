<template>
  <nuxt-link
    :to="url"
    class="search-card">
    <div
      :style="{ 'background-image': 'url(' + img + ')' }"
      class="card-img"/>
    <div class="card-content">
      {{ url }}
      <div class="card-category">{{ category }}</div>
      <div class="card-title">{{ title }}</div>
      <div class="card-text">{{ buildText(text) }}</div>
      <div class="card-bottom">
        <div class="card-date">{{ buildDate(date) }}</div>
        <div class="card-views">{{ views }}</div>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: 'SearchCard',
  props: {
    url: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    text: {
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
    }
  },
  data() {
    return {
      symbolsInText: 160
    }
  },
  methods: {
    buildDate(string) {
      let now = new Date()
      let date = new Date()
      string = string.split('-')
      date.setFullYear(string[0])
      date.setMonth(string[1] - 1)
      date.setDate(string[2])
      let sameYear = now.getFullYear() === date.getFullYear()
      let sameMonth = now.getMonth() === date.getMonth()
      let today = now.getDate() === date.getDate()
      let yesterday = now.getDate() - 1 === date.getDate()
      if (sameYear && sameMonth && today) {
        return 'сегодня'
      } else if (sameYear && sameMonth && yesterday) {
        return 'вчера'
      } else {
        return string.reverse().join('.')
      }
    },
    buildText(string) {
      if (string.length > this.symbolsInText) {
        return string.slice(0, this.symbolsInText) + ' ...'
      } else {
        return string
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.search-card {
  display: flex;
  padding-bottom: 60px;
  border-bottom: 1px solid #eaecec;
  margin-bottom: 60px;
}
.card-img {
  width: 262px;
  height: 200px;
  border-radius: 4px;
  background-color: #c4dde6;
  min-width: 262px;
  background-position: center center;
  background-size: cover;
  margin-right: 40px;
}
.card-category {
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1.4px;
  color: #ef1832;
  margin-bottom: 9px;
}
.card-title {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: #333333;
  margin-bottom: 15px;
}
.card-text {
  font-size: 16px;
  line-height: 1.5;
  color: #333333;
  margin-bottom: 23px;
}
.card-bottom {
  display: flex;
  font-size: 14px;
  font-weight: 500;
  color: #a3a4a6;
}
</style>
