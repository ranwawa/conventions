# vue/attributes-order

组件属性顺序

### 为什么

按照统一的顺序来排列属性,有利于提高代码的可读性。

### 建议

按照Vue.js样式指南中的顺序来排列组件的属性。

### 错误示例

```vue
<template>
  <div
    ref="foo"
    v-for="item in items"
    v-once
    id="zhangshan"
    v-model="fooData"
    my-prop="prop"
    v-if="!visible"
    is="foo"
    @click="functionCall"
    v-text="textContent"
  ></div>
</template>
```

### 正确示例

```vue
<template>
  <div
    is="foo"
    v-for="item in items"
    v-if="!visible"
    v-once
    id="zhangshan"
    ref="foo"
    v-model="fooData"
    my-prop="prop"
    @click="functionCall"
    v-text="textContent"
  ></div>
</template>
```

### 参考

- [vue/attributes-order](https://eslint.vuejs.org/rules/attributes-order.html)
