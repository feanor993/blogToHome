<template>
  <main class="main paper__main">
    <section class="section">
      <div class="pad pad--scroll">
        <div class="likes__wrapper">
          <img
            class="like"
            src="~/assets/img/vk-article.svg"
            alt="vk">
          <img
            class="dislike"
            src="~/assets/img/vk-article.svg"
            alt="vk">
        </div>
        <div class="soc-icon__wrapper">
          <img
            src="~/assets/img/vk-article.svg"
            alt="vk">
          <img
            src="~/assets/img/face-article.svg"
            alt="face">
          <img
            src="~/assets/img/insta-article.svg"
            alt="insta">
        </div>
      </div>

      <div class="paper"/>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Article'
}
</script>

<style>
.likes__section {
  margin: 90px 0 80px;
}

.likes__title {
  margin: 0 0 40px 0;
}

.paper__main {
  position: relative;
}

.paper {
  max-width: 768px;
  width: 100%;
  margin: 55px auto;
}

.paper__tag {
  display: inline-block;
  font: 700 12px 'Montserrat';
  letter-spacing: 1.4px;
  color: #ef1832;
  transition: 0.3s ease-out;
}

.paper__date {
  display: inline-block;
  font: 600 12px 'Montserrat';
  letter-spacing: 1.4px;
  color: #a3a4a6;
  margin: 0 0 0 30px;
  text-transform: uppercase;
}

.paper__title {
  margin: 30px 0 17px;
}

.paper__subtitle {
  font: 600 20px/1.5 'Montserrat';
}

.paper__text {
  margin: 35px 0 0 0;
  font: 20px/1.5 'LavaPro-Reg';
}

.paper__tags {
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0 30px;
  border-bottom: 1px solid #dfe0e0;
  border-top: 1px solid #dfe0e0;
  margin: 60px 0 40px;
}

.paper__main-cover {
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin: 45px 0 0 0;
}

.paper__less-title {
  font: 700 24px/1.25 'Montserrat';
  margin: 40px 0 0 0;
}

.blockquote {
  width: 100%;
  border-bottom: 1px solid rgba(239, 24, 50, 0.25);
  border-top: 1px solid rgba(239, 24, 50, 0.25);
  padding: 45px 50px 50px;
  margin: 60px 0 0 0;
  font: 500 22px/1.5 'Montserrat';
}

.article-links {
  margin: 45px 0 0 0;
}

.article-links__title {
  font: 700 20px/2 'Montserrat';
}

.article-links__list {
  padding: 0;
  margin: 0;
}

.article-links__item {
  font: 500 20px/2 'Montserrat';
  list-style: none;
}

.stream {
  display: flex;
  flex-direction: column;
  margin: 50px 0 0 0;
}

.stream__photo {
  width: 100%;
}

.stream__tag {
  font: 500 14px/1.4 'Montserrat';
  color: #cdd0d0;
  margin: 15px 0 0 0;
}

.teacher {
  display: flex;
  align-items: flex-start;
  margin: 55px 0;
}

.teacher__photo {
  width: 100px;
  border-radius: 50%;
  margin: 0 30px 0 0;
}

.teacher__container {
  display: flex;
  flex-direction: column;
  max-width: 470px;
  width: 100%;
}

.teacher__name {
  font: 600 20px 'Montserrat';
  margin: 15px 0 10px 0;
}

.teacher__info {
  font: 500 14px/1.6 'Montserrat';
  color: #a3a4a6;
}

.description__list {
  display: flex;
  flex-direction: column;
}

.description {
  display: flex;
  margin: 70px 0 0 0;
}

.description__cover {
  min-width: 170px;
  width: 100%;
  height: 255px;
  border-radius: 4px;
  margin: 0 30px 0 0;
}

.description__title {
  font: 700 24px/1.25 'Montserrat';
}

.description__link {
  display: inline-block;
  position: relative;
  box-shadow: none;
  padding: 0 25px 0 0;
  margin: 10px 0 25px 0;
}

.description__link:after {
  content: '';
  position: absolute;
  right: 0;
  top: 30%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: url('/img/read.svg') no-repeat;
}

.description__text {
  font: 20px/1.5 'LavaPro-Reg';
}

.read-more {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #f1f2f2;
  border-top: 1px solid #f1f2f2;
  padding: 0 70px 0 0;
  margin: 60px 0 0 0;
}

.read-more__image {
  height: 100%;
  margin: 0 30px 0 0;
}

.read-more__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.read-more__title {
  font: 700 17px 'Montserrat';
  margin: 0 0 10px 0;
}

.read-more__caption {
  box-shadow: none;
  line-height: 1.4;
}

.read-more__caption:hover {
  box-shadow: none;
}

.pad {
  display: flex;
  justify-content: space-between;
}

.pad svg {
  cursor: pointer;
}

.pad svg:hover g {
  fill: #ef1832;
  transition: 0.3s ease-out;
}

.pad svg.soc-icon__face:hover g {
  stroke: #ef1832;
  fill: none;
}

.pad .like:hover g,
.pad .dislike:hover g {
  stroke: #ef1832;
}

.soc-icon__face {
  margin: 0 15px;
  position: relative;
  top: 3px;
}

.dislike {
  transform: rotate(180deg);
  position: relative;
  top: 10px;
  margin: 0 0 0 30px;
}

.pad--scroll {
  position: sticky;
  top: 110px;
  margin: 110px 0 0 0;
  padding: 0 0 0 20px;
  display: flex;
  flex-direction: column-reverse;
}

.pad--scroll .likes__wrapper,
.pad--scroll .soc-icon__wrapper {
  display: flex;
  flex-direction: column;
}

.pad--scroll .dislike {
  margin: 10px 0 0 0;
  top: auto;
}

.pad--scroll .soc-icon__face {
  margin: 15px 0;
  top: auto;
  left: 3px;
}

.pad--scroll .soc-icon__wrapper {
  padding: 0 0 30px 0;
  margin: 0 0 20px 0;
  border-bottom: 1px solid rgba(151, 151, 151, 0.18);
}

.source {
  display: flex;
  margin: 60px 0 0 0;
}

.source__heading {
  font: 600 18px 'Montserrat';
  padding: 0 35px 0 0;
  border-right: 1px solid #dfe0e0;
}

.source__list {
  margin: 0 0 0 20px;
  padding: 0;
}

.source__item {
  list-style: none;
  font: 500 18px/1.9 'Montserrat';
}

.source__item--bold {
  font-weight: 600;
}
</style>
