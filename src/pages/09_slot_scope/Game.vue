<template>
    <div class="game">
        <h2> 游戏列表 </h2>
        <slot :games="games" x="a" y="b"> 默认内容1 </slot>
    </div>
</template>
<script setup lang="ts" name="Game">
    import { reactive } from 'vue'
    let games = reactive([
        {id: 1, title: '英雄联盟', content: '英雄联盟是一款多人在线战术竞技游戏。'},
        {id: 2, title: '王者荣耀', content: '王者荣耀是一款多人在线战术竞技游戏。'},
        {id: 3, title: '绝地求生', content: '绝地求生是一款多人在线战术竞技游戏。'}
    ])
</script>
<style scoped>
    .game {
        border: 1px solid #333;
        border-radius: 10px;
        padding: 10px;
        background-color: greenyellow;
        width: 300px;
        height: 200px;
    }

    h2 {
        text-align: center;
        background-color: orange;
        font-size: 20px;
        font-weight: 800;
    }

</style>