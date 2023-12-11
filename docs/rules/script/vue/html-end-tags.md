# vue/html-end-tags

必须使用闭合标签

### 为什么

这样可以保证HTML标签的完整性和代码的清晰。

### 建议

确保每个开始标签都有对应的结束标签。

### 错误示例

```vue
<template>
  <div>
  <p>
</template>
```

### 正确示例

```vue
<template>
  <div></div>
  <p></p>
</template>
```

### 参考

- [vue/html-end-tags](https://eslint.vuejs.org/rules/html-end-tags.html)
