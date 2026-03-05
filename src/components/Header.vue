<template>
    <header class="header">
        <h2 class="title">vue3组件通信</h2>
    </header>
</template>

<script lang="ts" setup name="Header">

</script>

<style scoped> 
.header {
  font-size: 20px; /* 设置字体大小为 20px */
  background-color: #c0bbbb; /* 设置背景颜色为灰黑色 */
  color: white; /* 设置文字颜色为白色，以便在灰黑色背景上清晰显示 */
  padding: 10px; /* 添加一些内边距，让内容不紧贴边框 */
  border: 1px solid #ccc; /* 添加边框，以便在灰色背景上清晰显示 */
  margin-bottom: 20px; /* 添加底部外边距，创建与下方内容的间隙 */
  
}

.title {
  font-size: 30px; /* 设置字体大小为 30px */
  text-align: center; /* 让文本水平居中 */
  margin-bottom: 20px; /* 添加底部外边距，创建与下方内容的间隙 */
  color: black; /* 设置文字颜色为灰色，以便在白色背景上清晰显示 */
}
</style>