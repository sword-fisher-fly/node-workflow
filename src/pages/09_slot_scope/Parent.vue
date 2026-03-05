<template>
    <div class="parent">
        <h2> 父组件 </h2>
        <div class="content">
           <!-- 3) 作用域插槽 -->
           <Game>
             <template v-slot="params">
                <ul>
                   <li v-for="game in params.games" :key="game.id">{{ game.title }}</li> 
                </ul>
             </template>
           </Game>
           <Game>
             <!-- 语法糖#default等价于v-slot -->
             <template #default="params">
                <ol start="5">
                    <li v-for="game in params.games" :key="game.id">{{ game.title }}</li> 
                </ol>
             </template>
           </Game>
           <Game>
           <!-- 解构子组件传递过来的对象属性 -->
             <template v-slot="{games}">
                <h3 v-for="game in games" :key="game.id"> {{ game.title }} </h3>
             </template>
           </Game>
        </div>
        
    </div>
</template>

<script lang="ts" setup name="Parent">
    import Game from './Game.vue';
   
</script>


<style scoped>
.parent {
    background-color: grey;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px #333;
    display: grid;
    grid-template-columns: 1fr; /* 定义一列 */
    gap: 10px; /* 设置子元素之间的间距为 10px */
    border: 3px solid #333; /* 为父元素添加 3px 粗的边框 */
}

.content {
    display: flex;
    justify-content: space-evenly;
}

h3 {
    font-size: 20px;
    font-weight: 800;
}

ul {
    font-size: 15px;
    border-radius: 2px;
    /* list-style-type: none; */
}

ol {
    /* list-style-type:demical; */
    font-size: 15px;
    color: blue;
    /* list-style-type: none; */
}

/* ol li { 
    list-style-position:outside;
}  */

</style>