# vue/no-reserved-component-names

禁止在组件定义中使用保留名称

### 为什么

这条规则可以防止Vue组件和标准HTML元素以及内置组件之间的名称冲突。

### 建议

自定义组件使用至少两个单词组合起来命名

### 错误示例

```vue
<script>
export default {
  name: 'div'
};
</script>
```

### 正确示例

```vue
<script>
export default {
  name: 'my-component'
};
</script>
```

### 参考

- [vue/no-reserved-component-names](https://eslint.vuejs.org/rules/no-reserved-component-names.html)
