# vue/use-v-on-exact

必须在v-on上使用exact修饰符

### 为什么

当存在另一个带有修饰符的v-on时，必须在v-on上使用exact修饰符，以确保事件处理的精确性。

### 建议

在v-on上添加exact修饰符。

### 错误示例

```vue
<template>
  <button v-on:click="foo" v-on:click.ctrl="foo"></button>
</template>
```

### 正确示例

```vue
<template>
  <button v-on:click.exact="foo" v-on:click.ctrl="foo"></button>
</template>
```

### 参考

- [vue/use-v-on-exact](https://eslint.vuejs.org/rules/use-v-on-exact.html)
