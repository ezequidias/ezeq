// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { isProduction } from './helpers'

// Needed to keep `ant-design-vue` running as of latest RC.8, see https://github.com/nuxt/framework/issues/6941#issuecomment-1229739856
const transpile = ['lodash-es']
if (isProduction) {
  // For production build via rollup, we need to also transpile babel
  transpile.push('@babel/runtime')
}

export default defineNuxtConfig({
  css: [
    'assets/vendor/bootstrap/css/bootstrap.min.css',
    '@/assets/scss/style.scss',
    'remixicon/fonts/remixicon.css',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      script: [
        { src: 'vendor/jquery/jquery.min.js' },
        { src: 'js/main.js' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i' },
      ],
    },
  },

  typescript: {
    // We enable `Volar Takeover Mode`, so we can disable the shim `*.vue` generation
    // see https://v3.nuxtjs.org/getting-started/introduction#prerequisites
    shim: false,
    strict: true,
  },
  build: {
    transpile,
  },
})
