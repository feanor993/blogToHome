<template>
  <nuxt-link 
    :to="'/compilations/' + compilation.code"
    class="compil__item">
    <img  
      :src="compilation.img"
      :alt="compilation.altText"
      class="compil__cover">
    <div class="compil__container">
      <h2 
        class="compil__title" 
        v-text="compilation.title"/>
      <p 
        class="compil__caption" 
        v-text="compilation.description"/>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Compilation',

  props: {
    compilation: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style>
.compil__item {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  border-radius: 4px;
  background: #fff;
}
.compil__item--mb80 {
  margin: 0 15px 80px;
}
.compil__item:hover .compil__title {
  color: #ef1832;
}
.compil__cover {
  width: 100%;
  border-radius: 4px 4px 0 0;
}
.compil__container {
  padding: 20px 30px 25px;
}
.compil__title {
  font: 600 20px 'Montserrat';
  margin: 0 0 10px 0;
  transition: 0.3s ease-out;
}
.compil__caption {
  font: 500 15px/1.5 'Montserrat';
  color: #5c5a5a;
}
</style>
