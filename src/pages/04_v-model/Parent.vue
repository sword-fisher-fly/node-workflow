<template>
    <div class="parent">
        <h3>父组件</h3>
        <h4>姓名: {{ username }}</h4>
        <h4>密码: {{ password }}</h4>

        <!-- 1)v-model用在html标签上 -->
        <!-- <input type="text" v-model="username" /> -->
        <!-- 底层实现, 解决语法飘红 -->
        <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value" /> -->
        
        <!-- 2)v-model用在组件上 -->
        <!-- v-model 简化写法-->
        <!-- <MyInput v-model="username" /> -->
        <!-- 3) 指定自定义名称 -->
        <MyInput v-model:username="username" v-model:password="password"/>
        <!-- 底层对应写法 -->
        <!-- <MyInput :modelValue="username" @update:modelValue="username = $event" /> -->
    </div>
</template>

<script lang="ts" setup name="Parent">
import { ref } from 'vue'
import MyInput from './MyInput.vue'

const username = ref('zhaowu')
const password = ref('<PASSWORD>')

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