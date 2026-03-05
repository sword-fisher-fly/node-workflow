<template>
    <div class="child2">
        <h2> 子组件2 </h2>
        <h3> 玩具: {{ toy }}</h3>
        <h3> 书: {{ book }}</h3>
    </div>
</template>
<script setup lang="ts" name="Child2">
import { ref } from 'vue'

let toy = ref('小猪佩奇')
let book = ref(3)

defineExpose({ toy, book })

</script>
<style scoped>

.child2 {
    border: skyblue 1px solid;
    margin: 10px 10px;
    padding: 10px 10px;
    background-color: pink;
    border-radius: 20px;
    box-shadow: 5px #000;
}

</style>