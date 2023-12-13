# vue/html-quotes

HTML属性必须使用双引号

### 为什么

规范HTML属性的引号风格，提高代码的可读性和一致性。

### 建议

HTML属性的值应使用双引号包围，除非字符串中包含双引号，需要避免转义。

### 错误示例

```vue
<template>
  <img src='./logo.png'>
  <img src=./logo.png>
</template>
```

### 正确示例

```vue
<template>
  <img src="./logo.png" />
  <img title='a string containing "double" quotes' />
</template>
```

### 参考

- [vue/html-quotes](https://eslint.vuejs.org/rules/html-quotes.html)
