# vue/component-definition-name-casing

组件定义名称必须是驼峰式命名

### 为什么

为了保持代码的一致性(react中也是这样推荐的)，需要定义组件名称的命名规则。

### 建议

组件定义名称应使用驼峰式命名。

### 错误示例

```vue
<script>
export default {
  name: 'my-component'
};
</script>
```

### 正确示例

```vue
<script>
export default {
  name: 'MyComponent'
};
</script>
```

### 参考

- [vue/component-definition-name-casing](https://eslint.vuejs.org/rules/component-definition-name-casing.html)
