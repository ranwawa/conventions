# vue/require-explicit-emits

必须在`emits`选项中声明`$emit()`触发的事件名

### 为什么

明确的`emits`声明可以作为自我文档化的代码。这对其他开发者理解组件应该发出什么事件非常有用。此外，在Vue.js 3.0.0+中，`v-on`监听器在组件上的默认行为已经改变，它们会作为原生监听器进行透传。在`emits`中声明组件只有的事件可以避免不必要的原生监听器的注册。

### 建议

在`emits`选项中声明所有`$emit()`触发的事件名

### 错误示例

```vue
<template>
  <div @click="$emit('bad')" />
</template>
<script>
export default {
  emits: ['good']
};
</script>
```

### 正确示例

```vue
<template>
  <div @click="$emit('good')" />
</template>
<script>
export default {
  emits: ['good']
};
</script>
```

### 参考

- [vue/require-explicit-emits](https://eslint.vuejs.org/rules/require-explicit-emits.html)
