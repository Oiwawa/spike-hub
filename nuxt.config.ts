export default defineNuxtConfig({
  ssr: false,
  vite: {
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost',
      },
    },
  },
  modules: ['@nuxt/ui'],
  devtools: { enabled: true },
  spaLoadingTemplate: false,
  // colorMode: {
  //   preference: 'light'
  // },
  ui: {
    icons: ['heroicons', 'simple-icons'],
  }
})
