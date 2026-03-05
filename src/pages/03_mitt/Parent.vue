<template >
    <div class="parent">
        <h3>父组件</h3>
        <Child1 />
        <Child2 />
    </div>
</template>
<script lang="ts" setup name="Parent">
import Child1 from './Child1.vue';
import Child2 from './Child2.vue'


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