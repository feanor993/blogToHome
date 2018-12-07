<template>
  <div
    id="form"
    class="main">
    <h2 class="promo__title promo__title--center promo__title--mb-60">Форма обратной связи</h2>
    <form
      class="feedback__form"
      enctype="multipart/form-data">
      <div class="feedback__column">
        <label class="feedback__label">
          ФИО
          <input
            class="feeadback__input"
            type="text"
            name="name"
            placeholder="Иванов Иван Иванович"
          >
          <span
            class="feeadback__error">Поле нельзя оставить пустым.</span>
        </label>
        <label class="feedback__label">
          Телефон
          <input
            type="text"
            name="tel"
            placeholder="+7"
            class="feeadback__input"
          >
          <span
            class="feeadback__error"
          >Номер телефона должен состоять из 11 цифр.</span>
        </label>
        <label class="feedback__label">
          E-mail
          <input
            class="feeadback__input"
            type="text"
            name="email"
            placeholder="ivanov@gmail.com"
          >
          <span
            class="feeadback__error">Некорректный email.</span>
        </label>
        <div class="feedback__label feedback__label--pb">Цель обращения
          <!-- <v-select
            v-model="feedbackData.target"
            :options="options"
            placeholder="Выбрать"
          class="custom-select"/>-->
          <span
            class="feeadback__error"
          >Выберите цель обращения.</span>
        </div>
      </div>
      <div class="feedback__column">
        <label class="feedback__label feedback__label--mb0">
          Сообщение
          <textarea
            class="feedback__textarea"
            name="message"
            placeholder="Текст сообщения"
          />
          <span
            class="feeadback__error"
          >Вы не ввели текст.</span>
        </label>
        <div>
          <div class="custom-dropzone">
            <!-- <vue2Dropzone
              id="dropzone"
              ref="myVueDropzone"
              :options="dropzoneOptions"
            @:vdropzone-sending="sendingEvent"/>-->
          </div>
        </div>
        <div class="btn-wrapper">
          <button
            class="feedback__submit"
            type="submit"
          >Отправить</button>
          <span
            class="feeadback__success"
          >Форма успешно отправлена.</span>
          <span
            class="feeadback__submit-error"
          >Не удалось отправить форму.</span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Feedback',

  components: {
    // VueInputMask
  }
}
</script>

<style>
.feedback__form {
  display: flex;
  margin: 0 0 135px 0;
}
.feeadback__input {
  width: 100%;
  height: 50px;
  margin: 10px 0 30px 0;
  padding: 0 0 0 25px;
  border-radius: 4px;
  border: solid 1px #dfe0e0;
  background-color: #fafafa;
}
.feedback__column {
  width: 50%;
}
.feedback__label {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 490px;
  width: 100%;
  font-weight: 600;
}
.feedback__textarea {
  max-width: 565px;
  width: 100%;
  height: 230px;
  padding: 15px 0 0 25px;
  margin: 10px 0 30px 0;
  border-radius: 4px;
  resize: none;
  border: solid 1px #dfe0e0;
  background-color: #fafafa;
}
.feedback__submit {
  width: 148px;
  height: 55px;
  border-radius: 4px;
  border: none;
  background-color: #b43545;
  font: 700 15px 'Montserrat';
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s ease-out;
}
.feedback__submit:active {
  outline: none;
}
.feedback__submit:hover {
  background: #941f2e;
}
.feeadback__error,
.feeadback__success,
.feeadback__submit-error {
  position: absolute;
  bottom: 15px;
  font-size: 11px;
  font-weight: 500;
  color: #ef1832;
}
.btn-wrapper {
  position: relative;
  width: 148px;
}
.feeadback__success,
.feeadback__submit-error {
  top: 50%;
  right: -20px;
  transform: translate(100%, -50%);
  width: max-content;
  color: #009900;
}
.feeadback__submit-error {
  color: #ef1832;
}
.filereader__feedback {
  width: max-content;
}
.feedback__label--pb {
  padding: 0 0 30px 0;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px #fafafa inset;
}
.feedback__label {
  cursor: pointer;
  margin-bottom: 30px;
}
.feedback__label--mb0 {
  margin: 0;
}

.custom-select .dropdown-toggle {
  width: 100%;
  height: 50px;
  margin: 10px 0 0 0;
  padding: 0 0 0 15px;
  border-radius: 4px;
  border: solid 1px #dfe0e0;
  background-color: #fafafa;
}
.custom-select.v-select.single.open .selected-tag {
  margin: 14px 2px 0;
}
.custom-select .clear {
  display: none;
}
.custom-select.v-select .vs__actions {
  padding: 0 0 0 3px;
}
.custom-select .open-indicator {
  width: 30px;
  display: flex;
  justify-content: center;
  transform: translate(-15px);
}
.custom-select.open .open-indicator:before {
  transform-origin: 100%;
}
.custom-select.v-select .open-indicator,
.v-select .open-indicator:before {
  transition: all 0.3s ease-out;
  transition-timing-function: ease-out;
}
.custom-select ul.dropdown-menu li {
  line-height: 40px;
}

.custom-select.v-select ul.dropdown-menu li a {
  background: #fff;
  color: #191919;
  font-weight: 500;
}

.custom-select ul.dropdown-menu li a:hover {
  background: #fafafa;
  color: #191919;
}
div.dropdown.v-select.custom-select.open.single.searchable .dropdown-toggle {
  border-color: #d5001a;
  border-bottom-color: transparent;
}
.custom-select .selected-tag {
  color: #191919;
  font-weight: 500;
}

.custom-dropzone {
  max-width: 490px;
  width: 100%;
  margin: 0 0 30px 0;
}
.custom-dropzone .dropzone {
  padding: 0;
}
</style>
