<template>
    <div class="child">
        <h3>子组件</h3>
        <h4>玩具: {{ toy }}</h4>
        <button @click="emit('sendToy', toy)">发送玩具给父</button>
    </div>
</template>
<script setup lang="ts" name="Child">
import { ref } from 'vue';

let toy = ref('奥特曼')

let emit = defineEmits(['sendToy'])
</script>
<style scoped>
h3 {
    color: rgb(93, 0, 255);
    font-weight: 100;
}

.child {
    background-color: rgb(133, 173, 133);
    border: 1px solid red;
    font-size: 20px;
}

botton {
    background-color: rgb(80, 26, 146);
    border: 1px solid rgb(13, 0, 255);
    font-size: 20px;
}
</style>