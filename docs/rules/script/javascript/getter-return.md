# getter-return

必须在getter方法中返回值

### 为什么

getter方法是用来获取对象属性的值，如果没有返回值，那么这个方法就没有任何意义。

### 建议

在getter方法中添加返回语句。

### 错误示例

```js
const p = {
  get name() {
    // 没有返回值
  }
};
```

### 正确示例

```js
const p = {
  get name() {
    return 'ranwawa';
  }
};
```

### 参考

- [getter-return](https://eslint.org/docs/rules/getter-return)
