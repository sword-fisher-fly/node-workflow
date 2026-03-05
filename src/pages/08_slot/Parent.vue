<template>
    <div class="parent">
        <h2> 父组件 </h2>
        <div class="content">
           <!-- 1) 默认插槽写法, name="default"-->
           <!-- <Category title="推荐电影">
             <ul>
               <li v-for="item in games" :key="item.id">
                  {{ item.title }}
               </li>
             </ul>
           </Category>
           <Category title="今日美食"> 
              <img :src="imgUrl" alt=""/>
           </Category>
           <Category title="热门游戏"> 
              <video :src="video" controls />
           </Category> -->

           <!-- 2) 具名插槽写法 -->
           <Category>
             <template v-slot:s1>
                <h3>推荐电影</h3>
             </template>
             <template v-slot:s2>
                <ul>
                    <li v-for="item in games" :key="item.id">
                        {{ item.title }}
                     </li>
                </ul>
             </template>
           </Category>
           <Category> 
              <template v-slot:s1>
                <h3> 今日美食 </h3>
              </template>
              <template v-slot:s2>
                <img :src="imgUrl" alt=""/>
              </template>
           </Category>
           <Category> 
              <template v-slot:s1>
                <h3> 热门游戏 </h3>
              </template>
              <template v-slot:s2>
                <video :src="video" controls />
              </template>
           </Category> 

           <!-- 3) 作用域插槽 -->

        </div>
    </div>
</template>

<script lang="ts" setup name="Parent">
    import Category from './Category.vue';
    import { reactive, ref } from 'vue'
    let games = reactive([
        {id: 1, title: '英雄联盟', content: '英雄联盟是一款多人在线战术竞技游戏。'},
        {id: 2, title: '王者荣耀', content: '王者荣耀是一款多人在线战术竞技游戏。'},
        {id: 3, title: '绝地求生', content: '绝地求生是一款多人在线战术竞技游戏。'}
    ])

    let video = ref('https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218093206z8V1JuPlpe.mp4')
    let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')

// video: https://prod-streaming-video-msn-com.akamaized.net/0b927d99-e38a-4f51-8d1a-598fd4d6ee97/3493c85c-f35a-488f-9a8f-633e747fb141.mp4
// img: https://z1.ax1x.com/2023/11/19/piNxLo4.jpg
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
    text-align: center;
    background-color: orange;
    font-size: 20px;
    font-weight: 800;
}

ul li {
    font-size: 15px;
}

img {
    /* height: 50%;
    width: 50%; */
    width: 250px;
    height: 100px;
}

.content video {
    width: 100%;
    height: 60%;
}
    
</style>