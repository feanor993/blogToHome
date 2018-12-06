<template>
  <nav class="menu">
    <ul class="menu__list">
      <li 
        v-for="item in menu" 
        :key="item.href"
        class="menu__item">
        <nuxt-link 
          :to="item.href" 
          class="menu__link" 
          v-html="item.name"/>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MyNav',

  data() {
    return {
      menu: []
    }
  },

  mounted() {
    this.fetchMenu()
  },

  methods: {
    async fetchMenu() {
      const ip = await this.$axios.$get(
        'http://mosolymp.school-olymp.com/Andrey/blog/Menu.php'
      )
      this.menu = ip
    }
  }
}
</script>

<style>
.menu {
  position: relative;
  z-index: 1;
  max-width: 1190px;
  height: 66px;
  margin: 0 auto;
  padding: 0 10px;
  border-radius: 4px;
  background-color: #2f313c;
}
.menu__list {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
.menu__item {
  text-transform: uppercase;
  list-style: none;
  margin: 0 0 0 40px;
}
.menu__link {
  text-decoration: none;
  color: #fff;
  transition: 0.3s ease-out;
  cursor: pointer;
  letter-spacing: 0.5px;
  opacity: 0.93;
  font: 700 14px 'Montserrat';
}
.menu__link:hover {
  opacity: 0.5;
}

.nav--header .menu__item:last-child {
  margin: 0 40px 0 auto;
}
</style>
