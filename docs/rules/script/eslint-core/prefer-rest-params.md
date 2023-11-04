# prefer-rest-params

推荐使用剩余参数

### 为什么

`arguments`是老的用法,是一个伪数组,新的剩余参数语法是个真的数组,用起来方便些

### 建议

使用剩余参数替代`arguments`变量。

### 错误示例

```js
function foo() {
  console.log(arguments);
}
```

### 正确示例

```js
function foo(...args) {
  console.log(args);
}
```

### 参考

- [prefer-rest-params](https://eslint.org/docs/rules/prefer-rest-params)
