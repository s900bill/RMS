<template>
  <div class="content">
    <img alt="Vue logo" :src="logo" />
    <p>This is a Father router.</p>
<Son></Son>
  </div>
</template>

<script  lang="ts">
import { defineComponent, provide ,ref ,reactive} from 'vue';
import logo from '@img/logo.png';
import Son from './son.vue';

interface Member {
    id:number,
    name:string,
    age:number,
}

export default defineComponent({
    name: 'FatherVue',
      components: {
    Son
  },
    setup() {
        const msg = ref<string>('test');
        provide('msg',msg);
  
  const userInfo:Member= reactive({
      id:1,
      name:"Bill",
      age:28,
  });
provide('userInfo', userInfo);



 setTimeout(() => {
      // 修改消息内容
      msg.value = 'Hi World!';

      // 修改用户名
      userInfo.name = 'Tom';
    }, 2000);
        return {
            msg,
            userInfo,
            logo
        }
    }
})




</script>

<style lang="less" scoped>
.content {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @color-black;
  margin-top: (@margin * 3);
  a {
    color: #42b983;
  }
}
</style>
