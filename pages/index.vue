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
      <div class="register-block-two">
        <form @submit.prevent="signUp">
          <input type="email" placeholder="Email" v-model="email"/>
          <input type="password" placeholder="Password" v-model="password"/>
          <button type="submit">Submit</button>
        </form>
        <NuxtLink to="/auth">app</NuxtLink>
      </div>
    </div>
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

.register-block-two {
  float: left;
  width: 500px;
  height: 800px;
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



</style>