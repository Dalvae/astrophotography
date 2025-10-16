// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxtjs/robots"],
  css: ["~/assets/css/main.css"],
  i18n: {
    locales: [
      { code: "en", file: "en.json", name: "English" },
      { code: "es", file: "es.json", name: "Español" },
      { code: "pt", file: "pt.json", name: "Português" },
    ],
    defaultLocale: "es",
  },
  build: {
    transpile: ["oh-vue-icons"],
  },
  vite: {
    optimizeDeps: {
      exclude: ["oh-vue-icons/icons"],
    },
    ssr: {
      noExternal: ["oh-vue-icons"],
    },
  },
});
