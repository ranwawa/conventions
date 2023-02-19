# wrap-iife

要求将变量声明放在它们作用域的顶部

### 为什么?

avaScript 的解析器会隐式的将变量的声明移到它们所在作用域的顶部。

### 错误示例

```js
f();
var a;
```

### 正确示例

```js
var a;
f();
```

### 参考

- [wrap-iife](https://eslint.org/docs/rules/wrap-iife)
