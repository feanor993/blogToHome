<template>
  <footer class="footer">
    <Subscribe/>
    <div class="footer__menu">
      <nuxt-link 
        to="/" 
        class="footer__logo">
        <img
          class="main-logo__img" 
          src="~/assets/img/logo-invert.svg" 
          alt="Главный логотип сайта">
      </nuxt-link>
      <Social/>
      <MyNav class="menu--footer"/>
      <p class="footer__content">
        История, литература, искусство в лекциях, шпаргалках, играх и ответах экспертов:
        новые знания каждый день
      </p>
      <p class="footer__content">Arzamas 2018. Все права защищены</p>
    </div>
    <div class="footer__koala">
      <Koala/>
    </div>
  </footer>
</template>

<script>
import MyNav from '~/layouts/components/MyNav.vue'
import Koala from '~/components/Koala.vue'
import Subscribe from '~/components/Subscribe.vue'
import Social from '~/components/Social.vue'

export default {
  name: 'Footer',

  components: {
    MyNav,
    Koala,
    Subscribe,
    Social
  }
}
</script>

<style>
.footer {
  background-color: #2f313c;
}
.footer__koala {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 125px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}
.footer__menu {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 0 50px 0;
}
.footer__logo {
  margin: 0 0 25px 0;
}
.footer__content {
  display: block;
  text-align: center;
  opacity: 0.61;
  font: 12px/1.6 'Montserrat';
  color: #fff;
  margin: 0 0 10px 0;
}
.menu--footer .menu__item:last-child,
.menu--footer .menu__item:nth-child(7) {
  display: none;
}
</style>
