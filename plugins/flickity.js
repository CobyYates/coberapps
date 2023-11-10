import Flickity from 'vue3-flickity'
import 'vue3-flickity/style'

export default defineNuxtPlugin(async nuxtApp => {
  nuxtApp.vueApp.use(Flickity)
})