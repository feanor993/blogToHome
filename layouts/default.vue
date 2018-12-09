<template>
  <div>
    <Header/>
    <MyNav class="nav--header"/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/layouts/components/Header.vue'
import Footer from '~/layouts/components/Footer.vue'
import MyNav from '~/layouts/components/MyNav.vue'

export default {
  name: 'Default',

  components: {
    Header,
    Footer,
    MyNav
  }
}
</script>
