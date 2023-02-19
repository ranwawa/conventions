# prefer-arrow-callback

要求或禁止对象字面量中方法和属性使用简写语法

### 为什么?

ECMAScript 6 提供了简写的形式去定义对象中的方法和属性。这个语法可以更清洁地定义复杂对象字面量。

### 错误示例

```js
var foo = {
  "bar-baz"() {},
};
```

### 正确示例

```js
var foo = {
  "bar-baz": function () {},
  qux: qux,
};
```

### 参考

- [prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback)
