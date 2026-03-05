<template >
    <div class="parent">
        <h3>父组件</h3>
        <h4 v-show="toy">接收子的玩具: {{ toy }}</h4>
        <Child @send-toy="saveToy" />
    </div>
</template>
<script lang="ts" setup name="Parent">
import Child from './Child.vue';
import { ref } from 'vue';

let toy = ref();

const saveToy = (val: string) => {
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