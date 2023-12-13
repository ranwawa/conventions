# vue/no-spaces-around-equal-signs-in-attribute

禁止属性中等号两边有空格

### 为什么

虽然HTML5允许等号两边有空格，但是没有空格可以更易读，更好地将实体组合在一起。

### 建议

在属性中的等号两边不要加空格。

### 错误示例

```vue
<template>
  <div class = "ranwawa"/>
</template>
```

### 正确示例

```vue
<template>
  <div class="ranwawa"/>
</template>
```

### 参考

- [vue/no-spaces-around-equal-signs-in-attribute](https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html)