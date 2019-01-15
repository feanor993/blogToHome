const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Блог',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:500,600,700&subset=cyrillic'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#8eca37' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css', 'normalize.css', 'nuxt-dropzone/dropzone.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-inputmask', ssr: false },
    { src: '~/plugins/vue-select', ssr: false },
    { src: '~/plugins/vue-lodash', ssr: true },
    { src: '~/plugins/vue-lazyload', ssr: true },
    { src: '~/plugins/vue-dropzone', ssr: true },
    { src: '~/plugins/vue-validate', ssr: true },
    { src: '~/plugins/vue-social-sharing', ssr: true },
    { src: '~/plugins/vue-scrollto', ssr: true }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
