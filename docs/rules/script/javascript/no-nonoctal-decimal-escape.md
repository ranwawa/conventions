# no-nonoctal-decimal-escape

禁止原始包装实例

### 为什么?

会对 JavaScript 产生破坏性的问题。

### 错误示例

```js
var stringObject = new String("Hello world");
var numberObject = new Number(33);
var booleanObject = new Boolean(false);

var stringObject = new String();
var numberObject = new Number();
var booleanObject = new Boolean();
```

### 正确示例

```js
var text = String(someValue);
var num = Number(someValue);

var object = new MyString();
```

### 参考

- [no-nonoctal-decimal-escape](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)
