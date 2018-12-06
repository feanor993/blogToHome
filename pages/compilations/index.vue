<template>
  <div class="compil__wrapper">
    <main class="main main--long">
      <h1 class="compil__heading">Подборки</h1>
      <div class="article__container compil__list">

        <Compilation
          v-for="compilation in compilationsSlice"
          :key="compilation.id"
          :code="compilation.code"
          :img="compilation.img"
          :title="compilation.title"
          :description="compilation.description"
          :alt-text="compilation.altText"
          class="compil__item--mb80"
        />
      </div>

      <!-- <ShowMore @showMoreItem="showMore" v-if="watchBtn" class="show-more--mt40 show-more--compil"/>
      <div v-else class="compilations__end-block">Это все подборки...</div> -->

    </main>

  </div>
</template>

<script>
import Compilation from '~/components/Compilation.vue'
// import ShowMore from "@/components/ShowMore.vue";

export default {
  components: {
    Compilation
    // ShowMore
  },

  data: function() {
    return {
      // showValue: 6
    }
  },

  computed: {
    compilationsSlice() {
      // return this.$store.state.CompilationsList.slice(0, this.showValue);
      return this.$store.state.CompilationsList
    }
    // watchBtn() {
    //   return this.toggleBtn();
    // }
  },

  mounted() {
    this.$store.dispatch('loadCompilations')
  }

  // methods: {
  //   showMore() {
  //     this.showValue += 6;
  //   },
  //   toggleBtn() {
  //     return this.showValue >= this.$store.state.CompilationsList.length ? false : true;
  //   }
  // }
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
