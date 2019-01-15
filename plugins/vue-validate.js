import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import ru from 'vee-validate/dist/locale/ru'

Validator.localize({ ru: ru })
Vue.use(VeeValidate, { events: '', locale: 'ru' })
