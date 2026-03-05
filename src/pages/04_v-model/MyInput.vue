<template>
    <!-- 1) 原生modelValue写法 -->
    <!-- <input 
      type="text"
      :value="modelValue" 
      @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)"
    /> -->
    <input 
      type="text"
      :value="username" 
      @input="emit('update:username', (<HTMLInputElement>$event.target).value)"
    />
    <br>
    <input 
      type="text"
      :value="password" 
      @input="emit('update:password', (<HTMLInputElement>$event.target).value)"
    />

</template>
<script setup lang="ts" name="MyInput">

// defineProps(['modelValue'])

// const emit = defineEmits(['update:modelValue'])

defineProps(['username', 'password'])

const emit = defineEmits(['update:username', 'update:password'])

</script>
<style scoped>
input {
    border: 2px solid black;
    background-image: linear-gradient(45deg, red, yellow, green);
    height: 30px;
    width: 200px;
    border-radius: 10px;
    padding: 5px;
    font-size: 18px;
}
</style>