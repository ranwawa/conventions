# vue/v-on-event-hyphenation

自定义组件的v-on事件名必须使用连字符

### 为什么

HTML中，事件名不区分大小写，所以在Vue中，事件名也不区分大小写。

### 建议

使用连字符的v-on事件名

### 错误示例

```vue
<template>
  <MyComponent @customEvent="handleEvent" />
</template>
```

### 正确示例

```vue
<template>
  <MyComponent @custom-event="handleEvent" />
</template>
```

### 参考

- [vue/v-on-event-hyphenation](https://eslint.vuejs.org/rules/v-on-event-hyphenation.html)
