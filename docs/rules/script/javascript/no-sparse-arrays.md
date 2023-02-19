# no-sparse-arrays

禁止从设置器返回值

### 为什么?

从 setter 返回值要么是不必要的，要么是可能的错误，因为返回的值不能使用。

### 错误示例

```js
var foo = {
  set a(value) {
    this.val = value;
    return value;
  },
};
```

### 正确示例

```js
var foo = {
  set a(value) {
    this.val = value;
  },
};
```

### 参考

- [no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)
