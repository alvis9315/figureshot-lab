import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-07-11',
  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],
  css: ['~/assets/styles/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      // 覆寫用 NUXT_PUBLIC_API_BASE 環境變數
      apiBase: 'http://localhost:8080/api/v1',
    },
  },
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'zh-TW', name: '繁體中文', file: 'zh-TW.json' },
    ],
  },
})
