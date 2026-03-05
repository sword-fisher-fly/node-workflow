<template>
  <div class="app">
    <Header />
    <div class="row">
      <div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
      <!-- 导航区 -->
        <RouterLink to = "/props" active-class="active" class="list-group-item">1. props</RouterLink>
        <RouterLink to = "/custom-event" active-class="active" class="list-group-item">2. 自定义事件</RouterLink>
        <RouterLink to = "/mitt" active-class="active" class="list-group-item">3. mitt</RouterLink>
        <RouterLink to = "/v-model" active-class="active" class="list-group-item">4. v-model</RouterLink>
        <RouterLink to = "/attrs" active-class="active" class="list-group-item">5. $attrs</RouterLink>
        <RouterLink to = "/refs-parent" active-class="active" class="list-group-item">6. $refs-$parent</RouterLink>
        <RouterLink to = "/provide-inject" active-class="active" class="list-group-item">7. provide-inject</RouterLink>
        <RouterLink to = "/slot" active-class="active" class="list-group-item">8.1 slot</RouterLink>
        <RouterLink to = "/slot-scope" active-class="active" class="list-group-item">8.2 slot-scope </RouterLink>

      </div>
      <!-- 展示区 -->
      <div class="col-xs-9 col-md-9 col-lg-9 col-xl-9">
       <div class="panel-body">
         <RouterView></RouterView>
       </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="App">
import { RouterView, RouterLink } from 'vue-router'
import Header from '@/components/Header.vue';


</script>
<style scoped>
.app {
  /* 可以根据实际需求调整样式 */
  font-size: 24px;
  margin-bottom: 20px;
}
/* 整体容器，使用 flexbox 布局 */
.container {
  display: flex;
  height: calc(100vh - 80px); /* 减去头部的高度 */
}

/* 左侧导航类 navigate 的样式 */
.navigate {
  width: 20%; /* 导航栏宽度占 20% */
  background-color: #f4f4f4;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.navigate a {
  text-decoration: none;
  color: #333;
  padding: 10px 15px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.navigate a:hover {
  background-color: #e0e0e0;
}

/* 导航选中时的高亮样式 */
.navigate a.active {
  background-color: #bec2c7;
  color: rgb(65, 151, 26);
}

/* 右侧展示类 main-content 的样式 */
.main-content {
  width: 80%; /* 展示区宽度占 80% */
  padding: 20px;
  border: 1px solid #ccc;
  overflow-y: auto; /* 当内容超出时显示滚动条 */
}

</style>