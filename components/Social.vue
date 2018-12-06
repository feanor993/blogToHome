<template>
  <div class="social">
    <a 
      v-for="soc in socials"
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
export default {
  name: 'Social',

  data() {
    return {
      socials: []
    }
  },

  mounted() {
    this.fetchSocial()
  },

  methods: {
    async fetchSocial() {
      const ip = await this.$axios.$get(
        'http://mosolymp.school-olymp.com/Andrey/blog/Social.php'
      )
      this.socials = ip
    }
  }
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
