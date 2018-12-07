<template>
  <li class="subject__item">
    <nuxt-link
      to="/search"
      class="subject"
      v-text="title"/>
  </li>
</template>

<script>
export default {
  name: 'Subject',

  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.subject {
  display: inline-block;
  line-height: 40px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  color: #2e2e2e;
  border: 1px solid #2e2e2e;
  padding: 0 15px;
  transition: 0.2s ease-out;
}

.subject:hover {
  color: #b43545;
  border-color: #b43545;
  line-height: 45px;
}

.subject__item {
  list-style: none;
  margin: 0 10px 0 0;
}

.subject__list {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  padding: 0 0 0 130px;
  margin: 0 0 25px 0;
}
</style>
