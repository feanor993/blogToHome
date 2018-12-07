<template>
  <nuxt-link 
    :to="'/compilations/' + code"
    class="compil__item">
    <img  
      :src="img"
      :alt="altText"
      class="compil__cover">
    <div class="compil__container">
      <h2 
        class="compil__title" 
        v-text="title"/>
      <p 
        class="compil__caption" 
        v-text="description"/>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Compilation',

  props: {
    code: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    altText: {
      type: String,
      default: 'Обложка подборки'
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
