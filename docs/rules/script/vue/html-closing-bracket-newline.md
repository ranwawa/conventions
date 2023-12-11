# vue/html-closing-bracket-newline

标签闭合括号前必须换行

### 为什么

统一风格提升可维护性。

### 建议

在多行元素的闭合括号前必须换行。

### 错误示例

```vue
<template>
  <div
    id="foo"
    class="bar"/>
</template>
```

### 正确示例

```vue
<template>
  <div
    id="foo"
    class="bar"
   />
</template>
```

### 参考

- [vue/html-closing-bracket-newline](https://eslint.vuejs.org/rules/html-closing-bracket-newline.html)