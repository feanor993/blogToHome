<template>
  <li class="tags__item">
    <nuxt-link
      to="/search"
      class="tags">#{{ title }}</nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'Tag',

  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.tags {
  margin: 0 20px 0 0;
  font-weight: 500;
  color: #768188;
  font-size: 14px;
  transition: 0.3s ease-out;
}

.tags__wrapper {
  display: flex;
  padding: 0 0 0 130px;
  margin: 0 0 60px 0;
}

.tags:hover {
  color: #b43545;
}

.tags__item {
  list-style: none;
}
</style>
