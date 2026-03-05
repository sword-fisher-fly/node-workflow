<template>
    <div class="child">
       <h2> 父组件 </h2>
       <!-- <h3> a: {{ a }} </h3> -->
       <!-- <h3> other-$attrs: {{ $attrs }} </h3> -->
       <GrandChild v-bind="$attrs"/>
    </div>
</template>
<script lang="ts" setup name="Child">
import GrandChild  from './GrandChild.vue';

// defineProps(['a'])

</script>
<style scoped>
.child {
    background-color: rgb(60, 189, 79);
    margin-left: 30px;
    padding: 30px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr; /* 定义一列 */
    gap: 10px; /* 设置子元素之间的间距为 10px */
    border: 3px solid #333; /* 为父元素添加 3px 粗的边框 */
}
    
</style>