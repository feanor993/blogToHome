<template>
  <header class="header">
    <Koala/>
    <nuxt-link 
      to="/" 
      class="main-logo">
      <img 
        class="main-logo__img" 
        src="~/assets/img/logo.svg" 
        alt="Главный логотип сайта">
      <p class="main-logo__title">Журнал для школьников про ЕГЭ и Олимпиады</p>
    </nuxt-link>
    <div class="reference">
      <nav class="reference__menu">
        <ul class="reference__list">
          <li class="reference__item">
            <nuxt-link 
              to="/about" 
              class="reference__link">О проекте</nuxt-link>
          </li>

          <li 
            v-for="ref in referenses" 
            :key="ref.href"
            class="reference__item">
            <a
              :href="ref.href"
              target="_blank"
              class="reference__link"
              v-text="ref.name"
            />
          </li>
        </ul>
      </nav>
      <nuxt-link 
        to="/compilations" 
        class="compilations">ПОДБОРКИ</nuxt-link>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import Koala from '~/components/Koala.vue'

export default {
  name: 'Header',

  components: {
    Koala
  },

  computed: mapState({
    referenses: state => state.NuxtServerInit.menu.reference
  })
}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1190px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 10px 30px;
}

.main-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}

.main-logo__title {
  font: 600 12px/1.9 'Montserrat';
  letter-spacing: 0.2px;
  text-align: center;
  color: #5c5a5a;
  text-transform: uppercase;
}

.reference__menu {
  margin: 0 0 60px 0;
}

.reference__list {
  display: flex;
  padding: 0;
  margin: 0;
}

.reference__item {
  margin: 0 20px 0 0;
  list-style: none;
}

.reference__item:last-child {
  margin: 0;
}

.reference__link {
  font: 600 13px 'Montserrat';
  text-decoration: none;
  transition: 0.3s ease-out;
}

.reference__link:hover {
  color: #d5001a;
}

.compilations {
  position: relative;
  opacity: 0.93;
  font: 700 14px 'Montserrat';
  letter-spacing: 0.6px;
  text-decoration: none;
  transition: 0.3s ease-out;
  padding: 0 0 0 40px;
}

.compilations:hover {
  color: #d5001a;
}

.compilations::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 29px;
  height: 28px;
  background: url('~assets/img/sprite.svg') no-repeat;
}

.reference {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-start;
}

.nav--header .menu__item:first-child {
  display: none;
}
</style>
