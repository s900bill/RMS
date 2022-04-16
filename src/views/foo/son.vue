<template>
    <div class="content">
        <p>This is a son</p>
        <p>msg {{msg}}</p>
        <p>userInfo {{userInfo}}</p>
        
    </div>
</template>

<script  lang="ts">
import { defineComponent, inject } from 'vue';


export default defineComponent({
    name: 'SonVue',
    setup() {
        const msg = inject('msg');
        const userInfo = inject('userInfo');

        console.log(msg);
        console.log(userInfo);


        setTimeout(() => {
            console.log(msg);
            console.log(userInfo);
        }, 3000);

        return {
            msg,
            userInfo,
        }
    }
})

</script>

<style lang="less" scoped>
</style>
