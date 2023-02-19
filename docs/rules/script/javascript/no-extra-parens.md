# no-extra-parens

禁止不必要的布尔类型转换

### 为什么?

在诸如 if 语句的测试这样的上下文中，表达式的结果已经被强制转换为布尔值，通过双否定(!!)或调用布尔值强制转换为布尔值是不必要的。

### 错误示例

```js
var foo = !!!bar;
```

### 正确示例

```js
var foo = !!bar;
```

### 参考

- [no-extra-parens](https://eslint.org/docs/rules/no-extra-parens)
