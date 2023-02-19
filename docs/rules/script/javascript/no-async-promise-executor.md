# no-async-promise-executor

强制在 getter 属性中出现一个 return 语句

### 为什么?

get 语法将对象属性绑定到一个函数，该函数在查找该属性时将被调用。

### 错误示例

```js
p = {
  get name() {
    // no returns.
  },
};
```

### 正确示例

```js
p = {
  get name() {
    return "nicholas";
  },
};
```

### 参考

- [no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor)
