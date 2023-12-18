# vue/singleline-html-element-content-newline

单行元素内容前后必须换行

### 为什么

一行文本太宽的话要左右滑动着看,效率低,多换行可以提高代码的可读性。

### 建议

在单行元素的内容前后添加换行。

### 错误示例

```vue
<template>
  <div attr>content</div>
</template>
```

### 正确示例

```vue
<template>
  <div attr>
    content
  </div>
</template>
```

### 参考

- [vue/singleline-html-element-content-newline](https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html)
