// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {
        "Plus+Jakarta+Sans": true
      }
    }]
  ],
  devtools: { enabled: true },
})
