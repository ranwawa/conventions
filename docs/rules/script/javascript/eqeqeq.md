# eqeqeq

要求点操作符和属性放在同一行

### 为什么?

防止既在点号操作之前也在之后使用换行符。

### 错误示例

```js
var foo = object.property;
```

### 正确示例

```js
var foo = object.property;
var bar = object.property;
```

### 参考

- [eqeqeq](https://eslint.org/docs/rules/eqeqeq)
