<template>
    <div class="category">
        <h3> {{ title }} </h3>
        <slot name="s1"> 默认内容1 </slot>
        <slot name="s2"> 默认内容2 </slot>
    </div>
</template>
<script setup lang="ts" name="Category">

  import { defineProps } from 'vue'

  defineProps(['title'])
</script>
<style scoped>
.category {
    border: 1px solid #333;
    border-radius: 10px;
    padding: 10px;
    background-color: greenyellow;
    width: 300px;
    height: 200px;
}

h3 {
    text-align: center;
    background-color: orange;
    font-size: 20px;
    font-weight: 800;
}
</style>