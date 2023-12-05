# vue/no-arrow-functions-in-watch

禁止在定义观察者时使用箭头函数

### 为什么

箭头函数会绑定到其父上下文，这意味着它们无法通过`this`访问Vue组件实例。

### 建议

在定义观察者时使用普通函数或者方法名。

### 错误示例

```vue
<script>
export default {
  watch: {
    foo: (val, oldVal) => {
      console.log('new: %s, old: %s', val, oldVal);
    }
  }
};
</script>
```

### 正确示例

```vue
<script>
export default {
  watch: {
    foo(val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal);
    }
  }
};
</script>
```

### 参考

- [vue/no-arrow-functions-in-watch](https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html)
