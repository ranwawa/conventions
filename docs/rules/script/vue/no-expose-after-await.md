# vue/no-expose-after-await

禁止在await表达式后异步注册`expose`

### 为什么

在`setup()`函数中，`expose()`应该同步注册。在`<script setup>`中，`defineExpose()`应该同步注册。

### 建议

确保`expose()`和`defineExpose()`在await表达式之前注册。

### 错误示例

```vue
<script>
export default {
  async setup(props, { expose }) {
    await doSomething();

    expose({
      /* ... */
    });
  }
};
</script>
```

### 正确示例

```vue
<script>
export default {
  async setup(props, { expose }) {
    expose({
      /* ... */
    });

    await doSomething();
  }
};
</script>
```

### 参考

- [vue/no-expose-after-await](https://eslint.vuejs.org/rules/no-expose-after-await.html)
