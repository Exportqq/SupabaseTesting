<template>
  <div>
    <div class="backround">
      <div class="auth-block">
        <form @submit.prevent="signIn">
          <input class="email-forms" type="email" placeholder="Email" v-model="email"/>
          <input class="password-forms" type="password" placeholder="Password" v-model="password"/>
          <button class="btn-auth" type="submit">Sign in</button>
          <p class="txt-auth">Have no account yet?</p>
        </form>
        <button class="btn-register-page">
            <NuxtLink to="/auth">Registration</NuxtLink>
        </button>
      </div>
    </div>
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
    router.push('/profile')
  } catch (error) {
    errorMsg.value = error.message;
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

.backround {
  background-color: #3577EF;
  width: 1400px;
  height: 800px;
  margin: 80px 0px 0px 260px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-block {
  border-radius: 20px;
  background: #FFF;
  width: 484px;
  height: 572px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.email-forms {
  border-radius: 8px;
  border: 2px solid #3577EF;
  display: flex;
  width: 372px;
  background: url(/email.svg) no-repeat;
  padding: 8px 11px 8px 35px;
  align-items: center;
  color: #666666;
  background-size: 24px;
  background-position: 8px;
}

.password-forms {
  border-radius: 8px;
  border: 2px solid #3577EF;
  display: flex;
  width: 372px;
  background: url(/lock.svg) no-repeat;
  padding: 8px 11px 8px 35px;
  align-items: center;
  color: #666666;
  background-size: 24px;
  margin: 15px 0px 0px 0px;
  background-position: 8px;
}

::placeholder {
  padding: 0px 0px 0px 30px;
  transform: translateX(-30px);
}


.btn-auth {
  width: 372px;
  height: 40px;
  background-color: #3577EF;
  color: #FFF;
  font-family: 'Lato';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 5px;
  margin: 20px 0px 0px 0px;
  transition: 0.5s;
}

.txt-auth {
  color: #666666;
  text-align: center;
  margin: 40px 0px 0px 0px;
}

.btn-register-page {
  width: 372px;
  height: 40px;
  background-color: #3577EF;
  color: #FFF;
  font-family: 'Lato';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 5px;
  margin: 10px 0px 0px 0px;
  transition: 0.5s;
}

.btn-register-page:hover {
  width: 372px;
  height: 40px;
  background-color: #3577EF;
  color: #FFF;
  font-family: 'Lato';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 5px;
  margin: 10px 0px 0px 0px;
  letter-spacing: 0.15em;
  border-bottom: 6px solid #666666;

}

.btn-auth:hover {
  width: 372px;
  height: 40px;
  background-color: #3577EF;
  color: #FFF;
  font-family: 'Lato';
  letter-spacing: 0.15em;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 5px;
  margin: 20px 0px 0px 0px;
  border-bottom: 6px solid #666666;
}
</style>