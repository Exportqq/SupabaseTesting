<template>
    <div>
      <form @submit.prevent="signIn">
        <input type="email" placeholder="Email" v-model="email"/>
        <input type="password" placeholder="Password" v-model="password"/>
        <button type="submit">sign in</button>
      </form>
    </div>
  </template>
  
  <script setup> 
  

  
  const client = useSupabaseClient();
  const router = useRouter();
  
  const email = ref('');
  const password = ref(null);
  const errorMsg = ref(null);
  
  async function signIn() {
    try {
      const { error } = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      });
      if (error) throw error;
    } catch (error) {
      errorMsg.value = error.message;
    }
  }
  </script>