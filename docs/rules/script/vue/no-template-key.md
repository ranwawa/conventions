# vue/no-template-key

禁止在`<template>`上使用`key`属性

### 为什么

template本身并不参与数据绑定和渲染,绑定了key也没用.

### 建议

不要在`<template>`元素上使用`key`属性。

### 错误示例

```vue
<template>
  <template key="foo"> ... </template>
</template>
```

### 正确示例

```vue
<template>
  <div key="foo">...</div>
</template>
```

### 参考

- [vue/no-template-key](https://eslint.vuejs.org/rules/no-template-key.html)
