# vue/no-multi-spaces

禁止使用多个空格

### 为什么

多余的空格对于代码来说毫无意义,会引起阅读困难,也会增加代码的长度。

### 建议

删除标签中的多余空格

### 错误示例

```vue
<template>
  <div     class="foo"
    :style =  "bar"         />
</template>
```

### 正确示例

```vue
<template>
  <div class="foo" :style="bar">
</template>
```

### 参考

- [vue/no-multi-spaces](https://eslint.vuejs.org/rules/no-multi-spaces.html)