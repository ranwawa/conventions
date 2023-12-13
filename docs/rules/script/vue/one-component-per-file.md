# vue/one-component-per-file

每个文件只能有一个组件

### 为什么

每个文件只包含一个组件,这样别人通过看文件名就知道这个组件是干什么的。可以提高代码的可读性和可维护性。

### 建议

将每个组件放在单独的文件中。

### 错误示例

```js
Vue.component('ranwawa', {
  // ...
});

Vue.component('zhangshan', {
  // ...
});
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

- [vue/one-component-per-file](https://eslint.vuejs.org/rules/one-component-per-file.html)
