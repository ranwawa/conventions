# vue/require-toggle-inside-transition

必须在`<transition>`内部控制内容的显示

### 为什么

在`<transition>`内部的元素必须控制显示，以便于更好地管理和控制过渡效果。

### 建议

在`<transition>`内部的元素使用`v-if`或者`v-show`来控制显示。

### 错误示例

```vue
<template>
  <transition><div /></transition>
</template>
```

### 正确示例

```vue
<template>
  <transition><div v-if="foo" /></transition>
</template>
```

### 参考

- [vue/require-toggle-inside-transition](https://eslint.vuejs.org/rules/require-toggle-inside-transition.html)
