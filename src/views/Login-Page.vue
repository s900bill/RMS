<template >
  <div id="login">
    <!-- <p>房客資訊</p> -->
    <div class="position-absolute top-50 start-50 translate-middle border p-5 bg-light">
      <div class="mb-3">{{ acc }}
        <div class="mb-1 text-start "><label for="Account">Account</label></div>
        <input id="Account" class="form-control" required v-model="acc">
      </div>
      <div class="mb-4">
        <div class="mb-1 text-start"><label for="Password">Password</label></div>
        <input type="password" id="Password" class="form-control" required v-model="paw">
      </div>
      <button type="button" class="btn btn-primary w-100" @click="login()">Login</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/network';

interface Ilogin {
  Account: string;
  Password: string;
}


const router = useRouter();
const acc = ref<string>("");
const paw = ref<string>("");
const logindata: Ilogin = { Account: acc.value, Password: paw.value };
function login() {
  api("post", "login", logindata).then((res: any) => {
    if (res) {
      console.log(res);
      router.push({
        name: 'Home'
      })
    }

  })
    .catch((err: any) => { // 请求失败处理
      console.log(err);
      alert(err);
    });



}



</script>

<style lang="less" scoped>
#login {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @color-black;
  height: 100vh;
  background-image: url("@/assets/img/LoginBG.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
