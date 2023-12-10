# vue/require-render-return

必须在render函数中返回值

### 为什么

render函数中始终返回值，确保渲染的正确性。

### 建议

在render函数中始终返回一个值。

### 错误示例

```vue
<script>
export default {
  render(h) {
    if (foo) {
      return h('div', 'hello');
    }
  }
};
</script>
```

### 正确示例

```vue
<script>
export default {
  render(h) {
    return h('div', 'hello');
  }
};
</script>
```

### 参考

- [vue/require-render-return](https://eslint.vuejs.org/rules/require-render-return.html)
