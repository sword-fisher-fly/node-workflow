<template>
    <div class="child1">
        <h2> 子组件1 </h2>
        <h3> 电脑: {{ computer }}</h3>
        <h3> 书: {{ book }}</h3>
        <button @click="minusParentHouse($parent)"> 卖掉一套父亲房产 </button>
    </div>
</template>
<script setup lang="ts" name="Child1">
import { ref } from 'vue'

let computer = ref('MacBook Pro')
let book = ref(6)

const minusParentHouse = (parent: any) => {
    if (parent.house > 0) {
        parent.house--
    } else {
        alert("父亲没有房产了~~~")
    }
}

defineExpose({ computer, book })

</script>
<style scoped>
.child1 {
    border: yellow 1px solid;
    margin: 10px 10px;
    padding: 10px 10px;
    background-color: green;
    border-radius: 20px;
    box-shadow: 5px #000;
}
</style>