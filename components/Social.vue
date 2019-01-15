<template>
  <div class="social">
    <a 
      v-for="soc in social"
      :key="soc.id"
      :href="soc.url"
      target="_blank"
      class="social__item"
    >
      <img
        :src="soc.image"
        alt="social">
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Social',

  computed: mapState({
    social: state => state.NuxtServerInit.social
  })
}
</script>

<style>
.social {
  display: flex;
  position: absolute;
  top: 55px;
  right: 0;
}
.social__item {
  display: block;
  border-radius: 50%;
  margin: 0 10px 0 0;
}
.social__item:hover path {
  fill: #ef1832;
  transition: 0.3s ease-out;
}
</style>
