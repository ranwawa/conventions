# no-dupe-args

禁止函数参数重复

### 为什么

如果函数定义中有多个参数具有相同的名称，最后一个参数会"覆盖"前面的参数。

### 建议

确保函数的每个参数都有唯一的名称。

### 错误示例

```js
function foo(a, b, a) {
  console.log(a);
}

foo(1, 2, 3);
```

### 正确示例

```js
function foo(a, b, c) {
  console.log(a, b, c);
}
```

### 参考

- [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)
