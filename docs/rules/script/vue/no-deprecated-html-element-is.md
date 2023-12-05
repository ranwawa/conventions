# vue/no-deprecated-html-element-is

禁止在HTML元素上使用已废弃的`is`属性

### 为什么

在Vue.js 3.0.0+版本中，`is`属性已被废弃。使用已废弃的属性可能会导致代码在未来的版本中出现问题。

### 建议

不要在HTML元素上使用`is`属性，可以使用`component`元素代替。

### 错误示例

```vue
<template>
  <div is="foo" />
</template>
```

### 正确示例

```vue
<template>
  <component is="foo">
</template>
```

### 参考

- [vue/no-deprecated-html-element-is](https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html)
