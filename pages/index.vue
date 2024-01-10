<template>
  <div>
    <div class="backround">
      <div class="register-block-one">
        <div class="flex content-center justify-center flex-nowrap flex-row items-center w-[900px] h-[800px]">
          <ul class="list">
            <li>
              <img class="image-hmn" src="/human.png">
            </li>
            <li>
              <p class="txt">Subscribe to github</p>
              <div class="mt-12 flex content-center justify-center flex-nowrap flex-row items-center">
                <Icon class="w-[112px] h-[30px] float-left" name="logos:github" color="black" />
                <button class="float ml-4 left bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"><NuxtLink to="https://github.com/Exportqq">Subscribe</NuxtLink></button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-white w-[500px] h-[800px] float-left flex content-center justify-center flex-nowrap flex-column items-center" style="border-top: 6px solid #3577EF;border-right: 10px solid #3577EF;border-bottom: 6px solid #3577EF;">
        <div class="w-[372px]">
          <form @submit.prevent="signUp">
            <input class="email-forms" type="email" placeholder="Email" v-model="email"/>
            <input class="password-forms" type="password" placeholder="Password" v-model="password"/>
            <button class="btn-reg" type="submit">Register</button>
            <p class="txt-auth">Have account yet?</p>
          </form>
          <button class="btn-auth-page">
            <NuxtLink to="/auth">Sign in</NuxtLink>
          </button>
        </div>
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
const succesMsg = ref(null);

async function signUp() {
  try {
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push('/auth')
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
  background-image: url(/backround.png);
  width: 1400px;
  height: 800px;
  margin: 80px 0px 0px 260px;
}

.register-block-one {
  background-color: #3577EF;
  width: 900px;
  height: 800px;
  float: left;
}

ul li {
  list-style: none;
  float: left;
}

.txt {
  color: #FFF;
  text-align: center;
  font-family: 'Teko';
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: 71%; 
  width: 418px;
}

.list {
  display: flex;
  flex-direction: row;
  align-items: center;
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


.btn-reg {
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

.btn-auth-page {
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

.btn-auth-page:hover {
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

.btn-reg:hover {
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