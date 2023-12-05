# vue/no-deprecated-data-object-declaration

禁止在data中使用已废弃的对象声明

### 为什么

在Vue.js 3.0.0+中，data属性的对象声明已被废弃，使用它会导致代码的兼容性和可维护性问题。

### 建议

将data属性的对象声明改为函数声明，并返回一个对象。

### 错误示例

```js
createApp({
  data: {
    foo: null
  }
}).mount('#app');
```

### 正确示例

```js
createApp({
  data() {
    return {
      foo: null
    };
  }
}).mount('#app');
```

### 参考

- [vue/no-deprecated-data-object-declaration](https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html)
