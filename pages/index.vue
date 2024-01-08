<template>
    <div>
      <form @submit.prevent="signUp">
        <input type="email" placeholder="Email" v-model="email"/>
        <input type="password" placeholder="Password" v-model="password"/>
        <button type="submit">Submit</button>
      </form>
      <nuxt-link to="/register">app</nuxt-link>
    </div>
  </template>
  
  <script setup> 
  const client = useSupabaseClient();
  
  const email = ref('');
  const password = ref(null);
  const errorMsg = ref(null);
  const succesMsg = ref(null);
  
  async function signUp() {
    try {
      const { data, error } = await client.auth.signUp({
        email: email.value,
        password: password.value,
      });
      if (error) throw error;
    } catch (error) {
      errorMsg.value = error.message;
    }
  }
  </script>