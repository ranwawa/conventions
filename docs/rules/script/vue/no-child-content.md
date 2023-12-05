# vue/no-child-content

禁止元素的子内容被`v-html`或`v-text`指令覆盖

### 为什么

被`v-html`和`v-text`包裹起来的内容会被忽略,替换成v-html中的变量内容。写在标签里面的内容根本就不会生效.

### 建议

将v-html标签写成自闭合的标签

### 错误示例

```vue
<template>
  <div v-html="replacesChildContent">child content</div>
</template>
```

### 正确示例

```vue
<template>
  <div v-html="replacesChildContent" />
</template>
```

### 参考

- [vue/no-child-content](https://eslint.vuejs.org/rules/no-child-content.html)
