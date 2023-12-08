# vue/no-textarea-mustache

禁止在`<textarea>`中使用插值表达式

### 为什么

在`<textarea>`中使用插值表达式(`{{}}`)是无效的，应使用`v-model`进行数据绑定。

### 建议

在`<textarea>`中使用`v-model`进行数据绑定。

### 错误示例

```vue
<template>
  <textarea>{{ 'ranwawa' }}</textarea>
</template>
```

### 正确示例

```vue
<template>
  <textarea v-model="ranwawa" />
</template>
```

### 参考

- [vue/no-textarea-mustache](https://eslint.vuejs.org/rules/no-textarea-mustache.html)
