# vue/return-in-emits-validator

必须在emits验证器中使用return语句

### 为什么

在emits验证器中必须有return语句，以确保验证器的正确性。

### 建议

在emits验证器中添加return语句。

### 错误示例

```vue
<script>
export default {
  emits: {
    foo: function () {}
  }
};
</script>
```

### 正确示例

```vue
<script>
export default {
  emits: {
    foo(evt) {
      return !!evt;
    }
  }
};
</script>
```

### 参考

- [vue/return-in-emits-validator](https://eslint.vuejs.org/rules/return-in-emits-validator.html)
