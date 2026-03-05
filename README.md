# 组件间通信

## 组件是什么

组件分为一般组件和路由组件，一个页面可以分为多个组件，组件之间关系为父子、兄弟、跨级关系。

### 组件关系

- [] 父与子组件通信
- [] 子与父组件通信
- [] 兄弟组件通信
- [] 跨级组件通信(爷爷-孙子组件通信,孙子-爷爷组件通信)

### 组件通信方式

- 1. props通信
  - 父传子用响应式变量
  - 子传父用函数

- 2. 自定义事件
  - 命名方式，连字符格式
  - 调用defineEmits, 在子组件中触发事件

- 3. mitt
  - pub/sub、$bus和mitt
  - 任意组件通信
  - 组件卸载时，解绑mitt事件

```
npm i mitt
```

- 4. v-model
  - UI组件库长用v-model
  - 用在html标签上, 实现数据双向绑定
  - $event对于DOM事件，是事件对象，需要.target；对于自定义事件，是触发事件时，所传递的数据
  - v-model:xxx写法可以给组件指定多个标签值
- 5. $attrs
  - 祖-孙组件通信

- 6. $refs & $parent
  - 父传子: ref+defineExpose
  - 父传子: $refs+defineExpose
  - 子传父: $parent+defineExpose

- 7. pinia
  - 参考单独的pinia章节

- 8. slot
  - 默认插槽
  - 具名插槽
  - 作用域插槽: 数据在子组件，传递给父组件，结构定义在父组件(**应用在UI组件库较多**)
  - 语法糖: `<template v-slot:xxx="slotProps">`等价于 `<template #xxx="slotProps">`

- 9. provide & inject
  - 任意组件间通信, 类似发布/订阅，传递响应式数据或是函数



## 路由写法

`App.vue`
1. 第一种

```ts
<div class="container d-flex">
    <!-- 导航区 -->
    <div class="navigate list-group">
     <RouterLink to="/props" :class="{ 'list-group-item list-group-item-action active': $route.path === '/props'}">props</RouterLink>
     <hr class="my-1">
     <router-link :to="{name:'customevent'}">自定义事件</router-link>
    
    </div>
    <!-- 展示区 -->
    <div class="main-content flex-grow-1 p-3 border">
        <RouterView></RouterView>
    </div>
</div>
```

2. 第二种

```ts
<div class="container">
    <!-- 导航区 -->
    <div class="navigate table-responsive">
      <table class="table table-bordered">
        <tbody>
          <tr>
            <td>
              <router-link to="/props" :class="{ 'active': $route.path === '/props' }">1. props</router-link>
            </td>
          </tr>
          <tr>
            <td>
              <router-link :to="{ name: 'customevent' }" :class="{ 'active': $route.name === 'customevent' }">2. 自定义事件</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 右侧展示区 -->
    <div class="main-content flex-grow-1 p-3 border">
      <router-view></router-view>
    </div>
</div>
```