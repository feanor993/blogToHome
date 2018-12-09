<template>
  <div class="compil__wrapper">
    <main class="main main--long">
      <h1 class="compil__heading">Подборки</h1>
      <div class="article__container compil__list">
        <Compilation
          v-for="compilation in compilationsSlice"
          :key="compilation.id"
          :compilation="compilation"
          class="compil__item--mb80"
        />
      </div>

    </main>

  </div>
</template>

<script>
import Compilation from '~/components/Compilation.vue'

export default {
  head() {
    return {
      title: 'Подборки',
      meta: [
        {
          name: 'description',
          content: 'Подборки'
        }
      ]
    }
  },

  name: 'Compilations',

  components: {
    Compilation
  },

  async asyncData({ store }) {
    await store.dispatch('updateCompilations')
    return {
      compilations: store.getters.compilations
    }
  },

  computed: {
    compilationsSlice() {
      return this.compilations
    }
  }
}
</script>

<style>
.compil__wrapper {
  background-color: #f9f9f9;
  padding: 70px 0 160px 0;
}
.compil__list {
  margin: 60px 0 0 0;
}
.compil__heading {
  width: 100%;
  text-align: center;
}
.article__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}
.compilations__end-block {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a3a4a6;
}
</style>
