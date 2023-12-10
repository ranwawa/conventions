# vue/valid-attribute-name

必须使用有效的属性名

### 为什么

这条规则用于检测无效的HTML属性。

### 建议

属性名应遵循HTML属性命名规范。

### 错误示例

```vue
<template>
  <p 0abc></p>
</template>
```

### 正确示例

```vue
<template>
  <p foo.bar></p>
</template>
```

### 参考

- [vue/valid-attribute-name](https://eslint.vuejs.org/rules/valid-attribute-name.html)
