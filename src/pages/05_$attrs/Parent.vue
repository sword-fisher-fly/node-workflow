<template>
    <div class="parent">
        <h2> 祖组件 </h2>
        <h3> a: {{a}} </h3>
        <h3> b: {{b}} </h3>
        <h3> c: {{ c }}</h3>
        <h3> d: {{ d }}</h3>
        <Child :a="a" :b="b" :c="c" :d="d" v-bind="{x:100,y:200}" :updateA="updateA"/>
    </div>
</template>

<script lang="ts" setup name="Parent">
import { ref } from 'vue'
import Child from './Child.vue'


let a = ref(1)
let b = ref(2)
let c = ref(3)
let d = ref(4)

const updateA = (val: number) => {
    a.value += val
}
</script>


<style scoped>
.parent {
    background-color: grey;
    padding: 30px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr; /* 定义一列 */
    gap: 10px; /* 设置子元素之间的间距为 10px */
    border: 3px solid #333; /* 为父元素添加 3px 粗的边框 */
}
    
</style>