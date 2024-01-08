export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase'],
  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/confirm'
    }
    
  }
})

