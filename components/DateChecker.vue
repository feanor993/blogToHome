<template>
  <div
    class="article__date"
    v-text="computedDate"/>
</template>

<script>
export default {
  name: 'DateChecker',

  props: {
    date: {
      type: String,
      default: ''
    }
  },

  computed: {
    computedDate() {
      return this.getDate(this.date)
    }
  },

  methods: {
    getDate(date) {
      let day = date.split('-')[2]
      let mounth = date.split('-')[1]

      let now = new Date()
      let nowDay = now.getDate()
      let nowMounth = now.getMonth()

      if (parseInt(day) == nowDay && parseInt(mounth) == nowMounth + 1) {
        return 'Сегодня'
      } else if (
        parseInt(day) == nowDay - 1 &&
        parseInt(mounth) == nowMounth + 1
      ) {
        return 'Вчера'
      } else {
        const mounthList = [
          'Января',
          'Февраля',
          'Марта',
          'Апреля',
          'Мая',
          'Июня',
          'Июля',
          'Августа',
          'Сентября',
          'Октября',
          'Ноября',
          'Декабря'
        ]
        return `${day} ${mounthList[mounth - 1]}`
      }
    }
  }
}
</script>
