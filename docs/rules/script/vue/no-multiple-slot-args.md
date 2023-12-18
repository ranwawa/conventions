# vue/no-multiple-slot-args

禁止向作用域插槽传递多个参数

### 为什么

向作用域插槽传递多个参数导致代码的可读性和可维护性降低。

### 建议

向作用域插槽传递参数时，只传递一个参数。如果确实有多个参数,可以用对象的方式来传递。

### 错误示例

```vue
<script>
export default {
  render(h) {
    const children = this.$scopedSlots.default(foo, bar);
  }
};
</script>
```

### 正确示例

```vue
<script>
export default {
  render(h) {
    var children = this.$scopedSlots.default({ foo, bar });
  }
};
</script>
```

### 参考

- [vue/no-multiple-slot-args](https://eslint.vuejs.org/rules/no-multiple-slot-args.html)
