<template>
    <div class="child">
        <h3>子组件2</h3>
        <h4>计算机: {{ computer }}</h4>
        <h4 v-show="toy">接收哥哥送来的玩具: {{ toy }}</h4>
    </div>
</template>
<script setup lang="ts" name="Child">
import { ref, onUnmounted} from 'vue'
import emitter from '@/utils/emitter';

let toy = ref()
let computer = ref('惠普')

emitter.on('send-toy', (val: any) => {
    toy.value = val
})

onUnmounted(() => {
    console.log('Child2组件卸载了, 解绑send-toy事件')
    emitter.off('send-toy')
})

</script>
<style scoped>
h3 {
    color: rgb(93, 0, 255);
    font-weight: 100;
}

.child {
    background-color: rgb(22, 156, 156);
    border: 3px solid yellow;
    border-radius: 8px;
    font-size: 20px;
}

</style>