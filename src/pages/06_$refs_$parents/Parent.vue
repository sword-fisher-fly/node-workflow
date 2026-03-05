<template>
    <div class="parent">
        <h2> 父组件 </h2>
        <h3> 房产： {{ house }} </h3>
        <button @click="changeComputer">更换child1的电脑</button>
        <button @click="changeToy">更换child2的玩具</button>
        <button @click="changeAllChildrenBook($refs)">让所有孩子书变多</button>
        <button @click="resetHouse"> 恢复房产 </button>
        <Child1 ref="c1"/>
        <Child2 ref="c2"/>
    </div>
</template>
<script setup lang="ts" name="Parent">
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';

import { ref, onMounted } from 'vue';

let house = ref('5')
let c1 = ref()
let c2  = ref()

const  changeToy = () => {
    c2.value.toy = '变形金刚'
}

const changeComputer = () => {
    c1.value.computer = 'MacBook Air'
}

// const changeAllChildrenBook = (refs: object) => {
//     for (let key in refs) {
//         refs[key].book++
//     }
// }

onMounted(() => {
    console.log('$refs-$parent祖组件 mounted')
})

const changeAllChildrenBook = (refs: {[key: string]:any}) => {
    for (let key in refs) {
        refs[key].book++
    }
}

const resetHouse = () => {
    house.value = '10'
}

defineExpose({house})

</script>
<style scoped>

.parent {
    border: 1px solid #000;
    background-color: grey;
    border-radius: 5px;
    box-shadow: 5px #000;
    margin: 10px 10px;
    padding: 20px 20px;
    flex-direction: column;
}
</style>