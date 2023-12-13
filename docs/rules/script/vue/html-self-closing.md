# vue/html-self-closing

强制自闭合标签风格

### 为什么

自闭合标签简单且短，统一风格,提高代码的可读性。

### 建议

对于没有内容的元素，应使用自闭合标签风格。

### 错误示例

```vue
<template>
  <div></div>
</template>
```

### 正确示例

```vue
<template>
  <div />
</template>
```

### 参考

- [vue/html-self-closing](https://eslint.vuejs.org/rules/html-self-closing.html)
