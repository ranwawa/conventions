# vue/no-use-v-if-with-v-for

禁止在同一个元素上同时使用`v-if`和`v-for`

### 为什么

在同一个元素上同时使用`v-if`和`v-for`会导致代码的性能问题。因为每次渲染的时候都会进行循环和判断操作,这些操作本身可以是非常消耗性能的。

### 参考

[vue-best-practices#no-use-v-if-with-v-for](https://github.com/vuejs/vue-best-practices#no-use-v-if-with-v-for)

### 建议

如果需要过滤列表中的项目，应该使用一个新的计算属性来返回过滤后的列表。如果需要根据条件决定是否渲染列表，应该将`v-if`移动到一个容器元素上。

### 错误示例

```vue
<template>
  <TodoItem v-if="complete" v-for="todo in todos" :todo="todo" />
</template>
```

### 正确示例

```vue
<template>
  <ul v-if="complete">
    <TodoItem v-for="todo in todos" :todo="todo" />
  </ul>
</template>
```

### 参考

- [vue/no-use-v-if-with-v-for](https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html)
