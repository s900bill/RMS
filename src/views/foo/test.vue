<template>
  <div>
      123
    <p class="msg">{{ msg }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'

export default defineComponent({
     name: 'VueItem',
  setup() {
    const msg = 'test message'
    return {
      msg,
    }
  },
})
</script>

<style scoped></style>
