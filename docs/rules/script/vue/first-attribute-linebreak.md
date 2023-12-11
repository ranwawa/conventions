# vue/first-attribute-linebreak

属性的位置必须一致

### 为什么

统一风格，以提高代码的可读性。

### 建议

根据配置项，当属性在单行时，第一个属性应在同一行；当属性跨多行时，第一个属性应在下一行。

### 错误示例

```vue
<template>
  <MyComponent 
  lorem="1" />
</template>
```

### 正确示例

```vue
<template>
  <MyComponent lorem="1" />
</template>
```

### 参考

- [vue/first-attribute-linebreak](https://eslint.vuejs.org/rules/first-attribute-linebreak.html)
