# vue/valid-template-root

模板根元素必须有效

### 为什么

无效的根元素就没办法完成解析和渲染

### 建议

确保每个模板都有一个有效的根元素。

### 错误示例

```vue
<!-- 没有根元素 -->
<template></template>
```

### 正确示例

```vue
<template>
  <div></div>
</template>
```

### 参考

- [vue/valid-template-root](https://eslint.vuejs.org/rules/valid-template-root.html)
