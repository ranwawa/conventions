# vue/no-setup-props-destructure

禁止在`setup`中解构`props`导致失去响应性

### 为什么

在`setup`中解构`props`会导致值失去响应性，这可能会导致一些意想不到的问题。

### 建议

在`setup`中直接使用`props`，不要解构。

### 错误示例

```vue
<script>
export default {
  // 这里解构了
  setup({ count }) {
    return () => {
      return h('div', count); // 不会自动更新
    };
  }
};
</script>
```

### 正确示例

```vue
<script>
export default {
  setup(props) {
    return () => {
      return h('div', props.count);
    };
  }
};
</script>
```

### 参考

- [vue/no-setup-props-destructure](https://eslint.vuejs.org/rules/no-setup-props-destructure.html)
