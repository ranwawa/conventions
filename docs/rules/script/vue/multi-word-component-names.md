# vue/multi-word-component-names

组件名必须是多个单词

### 为什么

组件名必须是多个单词，除了根`App`组件和Vue提供的内置组件，如`<transition>`或`<component>`。这可以防止与现有和未来的HTML元素冲突，因为所有HTML元素都是单词。

### 建议

组件名应使用多个单词，以避免与HTML元素冲突。

### 错误示例

```js
Vue.component('Todo', {
  // ...
});
```

### 正确示例

```js
Vue.component('todo-item', {
  // ...
});
```

### 参考

- [vue/multi-word-component-names](https://eslint.vuejs.org/rules/multi-word-component-names.html)
