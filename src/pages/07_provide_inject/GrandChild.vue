<template>
    <div class="grandchild">
        <h3> 孙组件 </h3>
        <h3> 钱: {{ money }}w </h3>
        <h3> 一辆车， 品牌: {{ car.brand }} 型号: {{ car.model }} 价格: {{ car.price }} </h3>
        <button @click="updateMoney(6)">花爷爷的钱</button>
    </div>
</template>
<script lang="ts" setup name="GrandChild">

import {inject} from 'vue'

let {money, updateMoney} = inject('moneyContext', {money: 0, updateMoney: (val:number) => { return val}})

let car = inject('car', {
    brand: 'unknown',
    model: 'unknown',
    price: 0})

</script>
<style scoped>
.grandchild {
    background-color: rgb(198, 204, 27);
    margin-left: 30px;
    padding: 30px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr; /* 定义一列 */
    gap: 10px; /* 设置子元素之间的间距为 10px */
    border: 3px solid #333; /* 为父元素添加 3px 粗的边框 */
}

button {
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    background-color: rgb(48, 17, 160);
    color: #fff;
    font-size: 16px;
    width: 20%;
    /* height: 40%; */
}
    
</style>