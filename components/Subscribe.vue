<template>
  <div class="subscription">
    <img 
      class="subscription__img" 
      src="~/assets/img/footer-img.svg" 
      alt="logo">
    <div class="subscription__container">
      <div class="subscription__heading">Подпишись на знания</div>
      <div class="subscription__text">
        Оставь свой e-mail и мы будем присылать топовые материалы каждый
        понедельник.
      </div>
    </div>
    <form 
      class="subscription__form"
      @submit.prevent="submitSubscribe">
      <input
        v-model="email"
        class="subscription__input"
        type="email"
        placeholder="E-mail"
        name="subscribeEmail"
      >
      <button 
        class="subscription__submit" 
        type="submit">Подписаться</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Subscribe',

  data() {
    return {
      email: ''
    }
  },

  methods: {
    submitSubscribe: function() {
      // this.axios
      //   .post('http://httpbin.org/post', {
      //     email: this.email
      //   })
      //   .then(function(response) {
      //     console.log(response)
      //   })
      //   .catch(function(error) {
      //     console.log(error)
      //   })
    }
  }
}
</script>

<style>
.subscription {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1170px;
  width: 100%;
  height: 230px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.subscription__img {
  position: relative;
  bottom: 35px;
}
.subscription__container {
  max-width: 460px;
  width: 100%;
  margin: 0 50px 0 30px;
}
.subscription__heading {
  font: 700 28px 'Montserrat';
  color: #fff;
  margin: 0 0 10px 0;
}
.subscription__text {
  color: #fff;
  font: 500 16px/1.5 'Montserrat';
}

.subscription__form {
  display: flex;
}
.subscription__input {
  min-width: 290px;
  width: 100%;
  height: 60px;
  border-radius: 4px 0 0 4px;
  background-color: #ffffff;
  padding: 0 0 0 25px;
  border: none;
}
.subscription__submit {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 140px;
  max-width: 167px;
  width: 100%;
  height: 60px;
  border-radius: 0 4px 4px 0;
  background-color: #b43545;
  font: 700 15px 'Montserrat';
  border: none;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease-out;
}
.subscription__submit:hover {
  background: #941f2e;
}
.subscription__submit:active {
  outline: none;
}
</style>
