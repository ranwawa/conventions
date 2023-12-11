# vue/valid-v-on

必须使用有效的`v-on`指令

### 为什么

这条规则检查每个`v-on`指令是否有效，以确保代码的正确性和可读性。

### 建议

确保`v-on`指令有事件名称，没有无效的修饰符，有属性值和动词修饰符。

### 错误示例

```vue
<template>
  <div v-on />
  <div v-on:click />
  <div v-on:click.aaa="foo" />
  <div @click />
</template>
```

### 正确示例

```vue
<template>
  <div v-on="foo" />
  <div v-on:click="foo" />
  <div @click="foo" />
  <div @click.left="foo" />
  <div @click.prevent />
  <div @click.stop />
</template>
```

### 参考

- [vue/valid-v-on](https://eslint.vuejs.org/rules/valid-v-on.html)
