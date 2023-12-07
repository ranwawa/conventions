# vue/no-shared-component-data

组件的data属性必须是一个函数

### 为什么

当组件的data属性的值是一个对象时，它会在组件的所有实例中共享。

### 建议

将组件的data属性的值设置为返回对象的函数。

### 错误示例

```vue
<script>
Vue.component('some-comp', {
  data: {
    foo: 'bar'
  }
});
</script>
```

### 正确示例

```vue
<script>
/* ✓ GOOD */
Vue.component('some-comp', {
  data: function () {
    return {
      foo: 'bar'
    };
  }
});
</script>
```

### 参考

- [vue/no-shared-component-data](https://eslint.vuejs.org/rules/no-shared-component-data.html)
