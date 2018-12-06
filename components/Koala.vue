<template>
  <a 
    href="https://school-olymp.ru/" 
    class="logo" 
    target="_blank">
    <img 
      class="logo__img" 
      src="~/assets/img/koala.svg" 
      alt="Центр образования Коалиция">
    <div class="logo__container">
      <p class="logo__title">Проект центра
        <br>образования «Коалиция»
      </p>
      <p class="logo__caption">Подготовка к Олимпиадам и ЕГЭ</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Koala'
}
</script>

<style>
.logo {
  display: flex;
  align-items: center;
  width: 325px;
  text-decoration: none;
}
.logo:hover .logo__title {
  color: #d5001a;
}
.logo:hover .logo__caption {
  color: #768188;
}
.logo__img {
  width: 76px;
  height: 71px;
  margin: 0 15px 0 0;
}
.logo__title {
  text-transform: uppercase;
  font: 700 12px 'Montserrat';
  transition: 0.3s ease-out;
}
.logo__caption {
  font: 500 12px 'Montserrat';
  color: #a3a4a6;
  transition: 0.3s ease-out;
}
.footer__koala .logo__title {
  color: #fff;
}
.footer__koala .logo:hover .logo__title {
  color: #fff;
  opacity: 0.8;
}
.footer__koala .logo:hover .logo__caption {
  color: #a3a4a6;
}
</style>
