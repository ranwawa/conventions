# vue/no-deprecated-props-default-this

禁止在props默认函数中使用已弃用的`this`

### 为什么

在Vue.js 3.0.0+中，props默认值工厂函数不再能访问`this`。

### 建议

在props默认值工厂函数中，使用props代替`this`。

### 错误示例

```vue
<script>
export default {
  props: {
    b: {
      default() {
        return this.a;
      }
    }
  }
};
</script>
```

### 正确示例

```vue
<script>
export default {
  props: {
    b: {
      default(props) {
        return props.a;
      }
    }
  }
};
</script>
```

### 参考

- [vue/no-deprecated-props-default-this](https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html)
