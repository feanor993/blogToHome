<template>
  <button
    class="show-more"
    @click="$emit('addMore')"
  >Показать еще</button>
</template>

<script>
export default {
  name: 'ShowMore'
}
</script>

<style lang="scss">
.show-more {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  max-width: 545px;
  width: 100%;
  height: 55px;
  border-radius: 4px;
  border: solid 1px #cdd0d0;
  font: 600 14px 'Montserrat';
  padding: 0;
  margin: 0 20px;
  cursor: pointer;
  transition: 0.3s ease-out;
}
.show-more:hover {
  border-color: #ef1832;
}
</style>
