<template>
  <div
    id="form"
    class="main">
    <h2 class="promo__title promo__title--center promo__title--mb-60">Форма обратной связи</h2>
    <form
      class="feedback__form"
      enctype="multipart/form-data"
      @submit.prevent="onSubmit"
    >
      <div class="feedback__column">
        <label class="feedback__label">
          ФИО
          <input
            v-validate="'required'"
            v-model="form.name"
            class="feeadback__input"
            type="text"
            name="ФИО"
            placeholder="Иванов Иван Иванович"
          >
          <span class="feedback__error">{{ errors.first('ФИО') }}</span>
        </label>
        <label class="feedback__label">
          Телефон
          <input
            v-validate="'required'"
            v-mask="{mask: '+7 (999) 999 99 99', greedy: true}"
            v-model="form.tel"
            type="text"
            placeholder="+7"
            name="Телефон"
            class="feeadback__input"
          >
          <span class="feedback__error">{{ errors.first('Телефон') }}</span>
        </label>
        <label class="feedback__label">
          E-mail
          <input
            v-validate="'required|email|min:10'"
            v-model="form.email"
            class="feeadback__input"
            type="text"
            name="E-mail"
            placeholder="ivanov@gmail.com"
          >
          <span class="feedback__error">{{ errors.first('E-mail') }}</span>
        </label>
        <div class="feedback__label feedback__label--pb">Цель обращения
          <v-select
            v-validate="'required'"
            :options="['asdf', 'asdf']"
            v-model="form.goal"
            name="Цель"
            placeholder="Выбрать"
            class="custom-select"/>
          <span class="feedback__error">{{ errors.first('Цель') }}</span>
        </div>
      </div>
      <div class="feedback__column">
        <label class="feedback__label feedback__label--mb0">
          Сообщение
          <textarea
            v-validate="'required|max:1000'"
            v-model="form.text"
            class="feedback__textarea"
            name="Сообщение"
            placeholder="Текст сообщения"
          />
          <span class="feedback__error">{{ errors.first('Сообщение') }}</span>
        </label>
        <div class="feedback__dropzone">
          <div class="custom-dropzone">
            <dropzone
              id="dropzone"
              ref="dropzone"
              :options="options"
              :destroy-dropzone="true"
              @vdropzone-sending="innerForm"
              @vdropzone-complete="removeFiles"
            />
          </div>
        </div>
        <div class="btn-wrapper">
          <button
            class="feedback__submit"
            type="submit"
          >Отправить</button>
          <span
            v-if="submitError"
            class="feedback__error feedback__error--submit"
          >Заполните все поля корректно.</span>
          <span
            v-else-if="submitSuccess"
            class="feedback__error feedback__error--submit feedback__success"
          >Форма успешно отправлена.</span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Feedback',

  data() {
    return {
      submitError: false,
      submitSuccess: false,

      form: {
        name: '',
        tel: '',
        email: '',
        goal: '',
        text: ''
      },

      options: {
        url: 'http://httpbin.org/post',
        maxFilesize: 2,
        addRemoveLinks: true,
        autoProcessQueue: false,
        uploadMultiple: true,
        parallelUploads: 10,
        maxFiles: 10,
        dictDefaultMessage: 'Перетащите файл или нажмите для загрузки',
        dictFileTooBig: 'Размер файла не должен превышать 2mb',
        dictRemoveFile: 'Удалить',
        dictCancelUpload: 'Отменить',
        dictCancelUploadConfirmation:
          'Вы уверены, что хотите оменить загрузку?',
        init: function() {
          this.on('success', (file, responseText) => {
            console.log(responseText)
          })
        }
      }
    }
  },

  methods: {
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.submitError = false
          this.$nuxt.$loading.start()
          if (this.$refs.dropzone.getAcceptedFiles().length != 0) {
            this.$refs.dropzone.processQueue()
          } else {
            let feedBack = new FormData()
            for (let item in this.form) {
              feedBack.append(item, this.form[item])
            }
            this.$axios({
              method: 'post',
              url: 'http://httpbin.org/post',
              data: feedBack,
              config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
              .then(response => {
                console.log(response)
                this.submitSuccess = true
                setTimeout(() => {
                  this.submitSuccess = false
                }, 3000)
                for (let key in this.form) {
                  this.form[key] = ''
                }
                this.$nuxt.$loading.finish()
              })
              .catch(response => {
                console.log(response)
              })
          }
          return
        }
        this.submitError = true
      })
    },
    innerForm(file, xhr, formData) {
      for (let key in this.form) {
        formData.append(key, this.form[key])
      }
    },
    removeFiles(file, xhr, formData) {
      this.submitSuccess = true
      setTimeout(() => {
        this.submitSuccess = false
      }, 3000)
      for (let key in this.form) {
        this.form[key] = ''
      }
      this.$refs.dropzone.removeFile(file)
      this.$nuxt.$loading.finish()
    }
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
.feedback__dropzone {
  margin: 27px 0 0 0;
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
  box-shadow: 0 0 0 30px #fafafa inset;
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

.dropzone {
  background: #fafafa;
  min-height: 179px;
}

.vue-dropzone {
  border: 2px dashed #dfe0e0;
}

.dz-default span {
  color: #191919;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
}

.vue-dropzone .dz-preview .dz-details {
  background-color: #2f313c;
}

.vue-dropzone .dz-preview .dz-remove {
  border: 1px solid #cdd0d0;
  color: #cdd0d0;
  border-radius: 4px;
  text-transform: none;
  transition: 0.3s ease-out;
}

.vue-dropzone .dz-preview .dz-remove:hover {
  text-decoration: none;
  color: #b43545;
  border-color: #b43545;
}

.vue-dropzone .dz-preview .dz-image {
  border-radius: 4px;
}

.custom-dropzone .dropzone {
  padding: 10px;
}

.dropzone .dz-preview {
  width: 135px;
  height: 135px;
  min-height: 135px;
  margin: 10px;
}

.dz-size {
  display: none;
}

.dropzone .dz-preview .dz-progress {
  top: 45%;
}

.vue-dropzone {
  position: relative;
}

.dropzone .dz-message {
  margin: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
}

.dz-filename,
.dz-filename span {
  color: #cdd0d0;
}

.feedback__error {
  display: flex;
  position: absolute;
  bottom: 10px;
  font-size: 11px;
  font-weight: 500;
  color: #ef1832;
}
.feedback__error--submit {
  width: max-content;
  top: 50%;
  right: -20px;
  transform: translate(100%, -50%);
  line-height: 2.2;
}

.feedback__success {
  color: green;
}
</style>
