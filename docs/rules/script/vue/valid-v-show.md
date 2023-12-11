# vue/valid-v-show

`v-show`指令必须有效

### 为什么

这条规则用于检查每个`v-show`指令是否有效，以确保Vue组件的正确显示和隐藏。

### 建议

确保`v-show`指令没有参数，没有修饰符，有属性值，并且不在`<template>`标签上。

### 错误示例

```vue
<template>
  <div v-show />
</template>
```

### 正确示例

```vue
<template>
  <div v-show="foo" />
</template>
```

### 参考

- [vue/valid-v-show](https://eslint.vuejs.org/rules/valid-v-show.html)
