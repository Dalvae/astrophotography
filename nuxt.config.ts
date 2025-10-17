// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      titleTemplate: "%s - Astro Photography Atacama",
      meta: [
        {
          name: "description",
          content:
            "Aventura cósmica en San Pedro de Atacama. Tours astronómicos que combinan ciencia y cosmovisión andina.",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxt/icon",
  ],
  robots: {
    Sitemap: "/sitemap.xml",
  },
  css: ["~/assets/css/main.css"],
  site: {
    url: "https://www.your-domain.com", // IMPORTANT! Replace this with your real domain
  },
  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en.json", name: "English" },
      { code: "es", iso: "es-CL", file: "es.json", name: "Español" },
      { code: "pt", iso: "pt-BR", file: "pt.json", name: "Português" },
    ],
    defaultLocale: "es",
    baseUrl: "https://www.your-domain.com", // IMPORTANT! Use the same domain
    lazy: true,
  },
});
