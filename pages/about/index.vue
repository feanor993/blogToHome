<template>
  <div class="container">
    <main class="main">
      <section class="section section--column about__section--top">
        <h1 class="promo__title promo__title--top promo__title--center">О проекте</h1>
        <p class="promo__text promo__text--top">
          <b>«Коалиция»</b> - это современное онлайн-медиа, призванное помочь
          школьникам и их родителям лучше ориентироваться в мире образования.
        </p>

        <p class="promo__text promo__text--top">
          Простым и понятным языком мы пишем о том, что волнует каждого
          ученика, помогаем подготовиться к экзаменам и
          олимпиадам, делимся опытом и полезными лайфхаками, рассказываем о важных событиях.
          Наш журнал является проектом Центра образования «Коалиция», где работают одни из лучших педагогов и
          методистов. Благодаря им мы можем рассказывать вам о профессиональном опыте, который уже помог достичь
          успеха тысячам учеников.
        </p>

        <p class="promo__text promo__text--top">
          Хотите попасть на станицы нашего журнала? Пишите нам на почту
          <a
            href="mailto:media@school-olymp.ru"
            class="link link--red">media@school-olymp.ru</a>
          или заполните
          <nuxt-link
            to="/about#form"
            class="link link--red">форму обратной связи</nuxt-link>.
        </p>
      </section>

      <section class="section">
        <div class="promo__container">
          <div class="promo__block">
            <h3 class="promo__title--small">Для авторов</h3>
            <p class="promo__text--small">
              Являетесь учеником или экспертом и хотите поделиться своим мнением и
              опытом с нашими читателями? Предложите тему, и мы напишем вместе с вами прекрасную статью.
            </p>
          </div>
          <div class="promo__block">
            <h3 class="promo__title--small">Для СМИ</h3>
            <p class="promo__text--small">
              В мире образования ежедневно происходит что-то важное и интересное.
              Делитесь с нами пресс-релизами и анонсами мероприятий –
              пусть о них узнает наша аудитория.
            </p>
          </div>
          <div class="promo__block">
            <h3 class="promo__title--small">Для вопросов и предложений</h3>
            <p
              class="promo__text--small"
            >Смело задавайте нам вопросы, и мы обязательно постараемся ответить на них в журнале. Вы также можете нас похвалить, поругать и предложить что-то улучшить.</p>
          </div>
        </div>
      </section>
    </main>

    <div class="promo__section--skew">
      <div class="main promo__main">
        <section class="section">
          <div class="promo__block promo__block--big">
            <h3
              class="promo__title--medium"
            >Проект создан при поддержке Центра образования «Коалиция»</h3>
            <p class="promo__text--medium">
              Это место, где тысячи учеников ежегодно проходят подготовку к
              Всероссийской олимпиаде и стандартизированным школьным экзаменам.
            </p>
            <p class="promo__text--medium">
              Все наши программы нацелены на то, чтобы разносторонне развивать
              обучающихся, поддерживать их потенциал и учить погружаться в науки с целью глубокого понимания
              всех
              их аспектов.
            </p>
          </div>
          <img
            class="promo__image"
            src="https://via.placeholder.com/605x400"
            alt="">
        </section>

        <section class="section">
          <div class="promo__trapez">
            <img
              src="~/assets/img/trapezi.svg"
              alt="">
            <p
              class="promo__trapez--text"
            >Наша миссия - интеллектуальное и творческое развитие школьников.
              <br>Мы рады делиться нашим опытом с каждым и вдохновлять на победы.
            </p>
          </div>
        </section>

        <section class="section section--column">
          <h2 class="promo__title promo__title--center promo__title--mb-60">
            Почему мы эксперты в области
            образования?
          </h2>
          <div class="promo__container">
            <div class="promo__block">
              <img
                class="promo__icon"
                src="~/assets/img/promo1.svg"
                alt="">
              <h3 class="promo__title--small">Одни из лучших преподавателей</h3>
              <p class="promo__text--small">
                Наши занятия ведут тренеры олимпиадных сборных Москвы,
                преподаватели из МГУ, НИУ ВШЭ, МГИМО и других ведущих университетов, методисты ЦПМ, члены
                жюри Всероссийской олимпиады и ее победители прошлых лет.
              </p>
            </div>

            <div class="promo__block">
              <img
                class="promo__icon"
                src="~/assets/img/promo2.svg"
                alt="">
              <h3 class="promo__title--small">Одни из лучших преподавателей</h3>
              <p class="promo__text--small">
                Наши занятия ведут тренеры олимпиадных сборных Москвы,
                преподаватели из МГУ, НИУ ВШЭ, МГИМО и других ведущих университетов, методисты ЦПМ, члены
                жюри Всероссийской олимпиады и ее победители прошлых лет.
              </p>
            </div>

            <div class="promo__block">
              <img
                class="promo__icon"
                src="~/assets/img/promo3.svg"
                alt="">
              <h3 class="promo__title--small">Одни из лучших преподавателей</h3>
              <p class="promo__text--small">
                Наши занятия ведут тренеры олимпиадных сборных Москвы,
                преподаватели из МГУ, НИУ ВШЭ, МГИМО и других ведущих университетов, методисты ЦПМ, члены
                жюри Всероссийской олимпиады и ее победители прошлых лет.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>

    <Feedback ref="myForm"/>
  </div>
</template>

<script>
import Feedback from '~/components/Feedback.vue'

export default {
  head() {
    return {
      title: 'О нас',
      meta: [
        {
          name: 'description',
          content: 'О нас'
        }
      ]
    }
  },

  name: 'About',

  components: {
    Feedback
  }
}
</script>

<style>
.about__section--top {
  margin: 60px 0 50px 0;
}

.promo__title--center {
  text-align: center;
  margin: 0 auto;
}

.promo__title--medium {
  font: 700 28px/1.4 'Montserrat';
}

.promo__title--top {
  margin: 0 auto 35px auto;
}

.promo__title--mb-60 {
  margin-bottom: 60px;
  font-size: 28px;
}

.promo__text {
  font: 500 20px/1.6 'Montserrat';
  margin: 0 0 50px 0;
}

.promo__title--small {
  font-size: 20px;
  font-weight: 700;
}

.promo__text--small {
  font: 500 16px/1.6 'Montserrat';
  margin: 20px 0 0 0;
}

.promo__text--medium {
  font: 500 20px/1.6 'Montserrat';
  margin: 20px 0 0 0;
}

.promo__text--top {
  width: 765px;
  margin: 0 auto 50px auto;
}

.promo__container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.promo__block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 350px;
}

.promo__block--big {
  width: 100%;
  padding: 0 50px 0 0;
}

.promo__block:nth-child(2) {
  margin: 0 70px;
}

.promo__image {
  max-width: 605px;
  width: 100%;
  border-radius: 4px;
}

.promo__section--skew {
  position: relative;
  padding: 150px 0;
  margin: 150px 0;
}

.promo__section--skew:before {
  content: '';
  position: absolute;
  width: 102%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(246, 246, 246, 0.6);
  transform: rotate(-10deg) skew(-10deg) translate(-15px);
}

.promo__main {
  position: relative;
  z-index: 1;
}

.promo__trapez {
  position: relative;
  margin: 100px auto 115px;
}

.promo__trapez--text {
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  color: #fff;
  width: 650px;
  font: 600 24px/1.4 'Montserrat';
}

.promo__icon {
  margin: 0 0 25px 0;
}
</style>
