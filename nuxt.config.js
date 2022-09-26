const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
const appTitle = process.env.APP_TITLE

export default {
  head: {
    title: appTitle,
    htmlAttrs: {
      lang: 'id',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },

  plugins: [
    '@/plugins/axios.js',
    '@/plugins/api.js',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
  ],

  ssr: false,
  target: 'spa',

  axios: {
    headers: {
      common: {
        Accept: 'application/json',
      },
    },
    baseURL: baseUrl,
  },

  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      options: { customProperties: true },
      themes: {
        light: {
          primary: '#1869ac',
          secondary: '#00DC82',
          accent: '#00bcd4',
          error: '#f44336',
          warning: '#ffc107',
          info: '#009688',
          success: '#4caf50',
        },
        dark: {
          primary: '#1869ac',
          secondary: '#00DC82',
          accent: '#00bcd4',
          error: '#f44336',
          warning: '#ffc107',
          info: '#009688',
          success: '#4caf50',
        },
      },
    },
  },

  transition: {
    name: 'page',
    mode: 'out-in',
  },

  extends: ['@nuxtjs'],
}
