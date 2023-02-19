# no-new-wrappers

禁用 Function 构造函数

### 为什么?

调试和阅读这种类型的函数比较困难。

### 错误示例

```js
var x = new Function("a", "b", "return a + b");
var x = Function("a", "b", "return a + b");
```

### 正确示例

```js
var x = function (a, b) {
  return a + b;
};
```

### 参考

- [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)
