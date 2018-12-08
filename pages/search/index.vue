<template>
  <div>
    <div class="main">
      <section class="section">
        <div class="search__section">
          <div class="search__field">
            <input
              class="input"
              type="text">
            
            <button
              class="search__btn"
              type="button">Найти</button>
          </div>
          <div class="sort-by">
            <a
              class="sort-by__stroke"
              href="#">по дате</a>
            <a
              class="sort-by__stroke"
              href="#">по популярности</a>
          </div>
        </div>

        <Info/>
      </section>
    </div>
  </div>
</template>

<script>
import Info from '~/components/Info.vue'

export default {
  name: 'Search',

  components: {
    Info
  }
}
</script>

<style>
.search__btn {
  width: 130px;
  height: 55px;
  border-radius: 4px;
  background-color: #b43545;
  padding: 0;
  margin: 0 0 0 15px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  transition: 0.3s ease-out;
}
.search__btn:hover {
  background: #941f2e;
}

.input {
  width: calc(100% - 145px);
  height: 55px;
  padding: 0 0 0 30px;
  border-radius: 4px;
  background-color: #f1f2f2;
  font: 700 30px/1.3 'Montserrat';
  border: none;
}

.search__field {
  display: flex;
  position: relative;
  width: 100%;
  margin: 60px 0 30px;
}
/* Страница поиска сортировка и результат */
.sort-by {
  display: flex;
}
.sort-by__stroke {
  font: 500 14px 'Montserrat';
  margin: 3px 0 0 25px;
}
.sort-by__result {
  margin: 0 auto 0 0;
}
.search__section {
  width: calc(100% - 345px);
  padding: 0 50px 0 0;
}

.search-select {
  margin: 0 40px 0 0;
}
.search-select ul {
  background: #fafafa !important;
  color: red !important;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1) !important;
  border: none !important;
  border-radius: 4px !important;
  width: 330px !important;
}
.search-select a {
  font-size: 14px !important;
  font-weight: 500 !important;
  color: #333333 !important;
}
.search-select li:hover,
.search-select a:hover {
  background: red !important;
}
.search-select .vs__selected-options .form-control,
.search-select .dropdown-toggle .vs__actions,
.search-select .vs__selected-options .selected-tag {
  padding: 0 !important;
  margin: 0 !important;
}
.search-select .dropdown-toggle {
  border: none;
  color: red;
}
.search-select:first-child {
  width: 155px;
}
.search-select:nth-child(2) {
  width: 175px;
}
.search-select:nth-child(3) {
  width: 120px;
  margin: 0 auto 0 0;
}
.search-select.v-select .open-indicator:before {
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
}
.search-select .clear {
  display: none;
}

.search-select ::-webkit-input-placeholder {
  color: #a3a4a6;
  font-size: 14px;
  font-weight: 500;
}
.search-select ::-moz-placeholder {
  color: #a3a4a6;
  font-size: 14px;
  font-weight: 500;
}
.search-select :-ms-input-placeholder {
  color: #a3a4a6;
  font-size: 14px;
  font-weight: 500;
}
.search-select :-moz-placeholder {
  color: #a3a4a6;
  font-size: 14px;
  font-weight: 500;
}
</style>
