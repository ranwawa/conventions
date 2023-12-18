# vue/no-lone-template

禁止不必要的`<template>`

### 为什么

在Vue.js 2.x中，没有特定指令的`<template>`元素没有效果。在Vue.js 3.x中，没有特定指令的`<template>`元素会按原样渲染`<template>`元素，实际也没啥用。

### 建议

删除没有特定指令的`<template>`元素。

### 错误示例

```vue
<template>
  <template />
</template>
```

### 正确示例

```vue
<template>
  <template v-if="foo">...</template>
</template>
```

### 参考

- [vue/no-lone-template](https://eslint.vuejs.org/rules/no-lone-template.html)
