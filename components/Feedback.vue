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
            v-model="feedbackData.name"
            class="feeadback__input"
            type="text"
            name="name"
            placeholder="Иванов Иван Иванович">
          <span
            v-if="errors.name"
            class="feeadback__error">Поле нельзя оставить пустым.</span>
        </label>
        <label class="feedback__label">
          Телефон
          <input
            ref="field"
            v-model="feedbackData.tel"
            class="feeadback__input"
            type="text"
            name="tel"
            placeholder="+7">
          <span
            v-if="errors.tel"
            class="feeadback__error">Номер телефона должен состоять из 11 цифр.</span>
        </label>
        <label class="feedback__label">
          E-mail
          <input
            v-model="feedbackData.email"
            class="feeadback__input"
            type="text"
            name="email"
            placeholder="ivanov@gmail.com">
          <span
            v-if="errors.email"
            class="feeadback__error">Некорректный email.</span>
        </label>
        <div class="feedback__label feedback__label--pb">
          Цель обращения
          <v-select
            v-model="feedbackData.target"
            :options="options"
            placeholder="Выбрать"
            class="custom-select"/>
          <span
            v-if="errors.target"
            class="feeadback__error">Выберите цель обращения.</span>
        </div>
      </div>
      <div class="feedback__column">
        <label class="feedback__label feedback__label--mb0">
          Сообщение
          <textarea
            v-model="feedbackData.message"
            class="feedback__textarea"
            name="message"
            placeholder="Текст сообщения"/>
          <span
            v-if="errors.message"
            class="feeadback__error">Вы не ввели текст.</span>
        </label>
        <div>
          <div class="custom-dropzone">
            <vue2Dropzone
              id="dropzone"
              ref="myVueDropzone"
              :options="dropzoneOptions"
              @:vdropzone-sending="sendingEvent"/>
          </div>

        </div>
        <div class="btn-wrapper">
          <button
            class="feedback__submit"
            type="submit"
            @click.prevent="submitForm">Отправить</button>
          <span
            v-if="errors.success"
            class="feeadback__success">Форма успешно отправлена.</span>
          <span
            v-if="errors.error"
            class="feeadback__submit-error">Не удалось отправить форму.
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import Inputmask from "inputmask";
// import vSelect from "vue-select";
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
// import vue2Dropzone from "vue2-dropzone";

export default {
  components: {
    vSelect,
    vue2Dropzone
  },
  data: function() {
    return {
      feedbackData: {
        name: '',
        tel: '',
        email: '',
        target: '',
        message: ''
      },
      errors: {
        name: false,
        tel: false,
        email: false,
        target: false,
        message: false,
        success: false,
        error: false
      },
      fileLoad: false,
      options: ['Жалоба', 'Предложение', 'Совет'],
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
        maxFilesize: 3,
        addRemoveLinks: true,
        dictRemoveFile: 'Удалить',
        dictCancelUpload: 'Отменить',
        autoProcessQueue: false,
        dictDefaultMessage: 'Нажмите или перетащите для загрузки',
        dictFileTooBig: 'Файл слишком большой',
        headers: { Feedback: 'header value' }
      }
    }
  },
  mounted() {
    var im = new Inputmask('+7 (999) 999-99-99')
    im.mask(this.$refs.field)
  },
  methods: {
    validations(datas) {
      this.errors.name = !datas.name ? true : false
      this.errors.tel =
        datas.tel.replace(/[\D]/g, '').length != 11 ? true : false
      this.errors.email = !datas.email ? true : false
      this.errors.target = !datas.target ? true : false
      this.errors.message = !datas.message ? true : false
    },
    sendingEvent(file, xhr, formData) {
      formData.append('name', this.name)
      formData.append('tel', this.tel)
      formData.append('email', this.email)
      formData.append('target', this.target)
      formData.append('message', this.message)
    },
    submitForm: function() {
      this.validations(this.feedbackData)

      if (
        !(
          this.errors.name ||
          this.errors.tel ||
          this.errors.email ||
          this.errors.target ||
          this.errors.message
        )
      ) {
        this.$refs.myVueDropzone.processQueue()
        // this.axios
        //   .post(
        //     // "http://mosolymp.school-olymp.com/Andrey/form_response.php",
        //     "https://httpbin.org/post",
        //     this.feedbackData
        //   )
        //   .then(
        //     response => (
        //       console.log(response),
        //       (this.errors.success = true),
        //       (this.errors.error = false)
        //     )
        //   )
        //   .catch(
        //     error => (
        //       console.log(error),
        //       (this.errors.success = false),
        //       (this.errors.error = true)
        //     )
        //   );
      }
    }
  }
}
</script>

<style>
/* Форма обратной связи */
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
