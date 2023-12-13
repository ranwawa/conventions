# vue/multiline-html-element-content-newline

多行元素内容前后必须换行

### 为什么

整洁避免杂乱无章，提高代码的可读性。

### 建议

在多行元素的内容前后添加换行符。

### 错误示例

```vue
<template>
  <div>多行
    内容</div>
</template>
```

### 正确示例

```vue
<template>
  <div>
    多行
    内容
  </div>
</template>
```

### 参考

- [vue/multiline-html-element-content-newline](https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html)