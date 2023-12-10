# vue/require-prop-type-constructor

必须使用构造函数作为prop的类型

### 为什么

因为我们无法捕获所有可能的情况并确定prop类型是否为构造函数。

### 建议

使用构造函数作为prop的类型，而不是字符串。

### 错误示例

```vue
<script>
export default {
  props: {
    myProp: 'Number'
  }
};
</script>
```

### 正确示例

```vue
<script>
export default {
  props: {
    myProp: Number
  }
};
</script>
```

### 参考

- [vue/require-prop-type-constructor](https://eslint.vuejs.org/rules/require-prop-type-constructor.html)
