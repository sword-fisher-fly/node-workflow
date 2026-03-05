<template>
    <div class="parent">
        <h2> 祖组件 </h2>
        <h3> 钱: {{ money }}w </h3>
        <h3> 一辆车， 品牌: {{ car.brand }} 型号: {{ car.model }} 价格: {{ car.price }} </h3>
        <Child />
    </div>
</template>

<script lang="ts" setup name="Parent">

import { ref, reactive, onMounted, provide} from 'vue'
import Child from './Child.vue'

let money = ref(100)
let car = reactive({
    brand: 'BMW',
    model: 'X5',
    price: 20,
})

onMounted(() => {
    console.log('祖组件 mounted')
})

const updateMoney = (val: number) => {
    if (val < 0) {
        alert('不能花负数')
        return
    }

    if (money.value < val) {
        alert('钱不够了')
        return
    }

    money.value -= val
}

// 给后代提供数据
provide('moneyContext', {money, updateMoney})
provide('car', car)


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