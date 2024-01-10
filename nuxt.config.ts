export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase', 'nuxt-icon'],
  css: ['/assets/main.css'],
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Teko:wght@300;400;500;600;700&display=swap' },
      ],
    },
  },
  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/confirm',
      exclude: ['/auth', '/profile']
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
