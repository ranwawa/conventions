# vue/attribute-hyphenation

自定义组件属性名必须使用连字符命名

### 为什么

html语法是大小写不敏感的,为了和规范保持一致,就不要使用驼峰了

### 建议

使用连字符命名属性名。

### 错误示例

```vue
<template>
  <MyComponent myProp="prop" />
</template>
```

### 正确示例

```vue
<template>
  <MyComponent my-prop="prop" />
</template>
```

### 参考

- [vue/attribute-hyphenation](https://eslint.vuejs.org/rules/attribute-hyphenation.html)
