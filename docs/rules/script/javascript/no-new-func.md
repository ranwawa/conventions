# no-new-func

禁止使用new Function

### 为什么

在JavaScript中，可以使用`Function`构造函数在运行时从字符串创建函数，类似于eval函数：

由于这种类型的函数在调试和阅读上的特别困难，此外，内容安全策略（CSP）可能禁止这种语法。

### 建议

建议使用函数声明或函数表达式来创建函数。

### 错误示例

```js
const foo = new Function('a', 'b', 'return a + b');
```

### 正确示例

```js
const foo = function (a, b) {
  return a + b;
};
```

### 参考

- [no-new-func](https://eslint.org/docs/rules/no-new-func)
