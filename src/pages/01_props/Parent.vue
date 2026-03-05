<template >
    <div class="parent">
        <h3>父组件</h3>
        <h4>汽车:  {{ car }}</h4>
        <h4 v-show="toy">接收子的玩具: {{ toy }}</h4>
        <Child :car="car" :sendToy="getToy"/>
        
    </div>
</template>
<script lang="ts" setup name="Parent">
import Child from './Child.vue';
import { ref } from 'vue';

let car = ref('宝马');
let toy = ref();

const getToy = (val: string) => {
    toy.value = val;
}


</script>
<style scoped>
.parent {
    background-color: grey;
    padding: 20px;
    border-radius: 10px;
}
</style>