# no-restricted-globals

不允许标签与变量同名

### 为什么?

该规则旨在通过禁止使用同一作用域下的同名的变量做为标签，来创建更清晰的代码。

### 错误示例

```js
var x = foo;
function bar() {
  x: for (;;) {
    break x;
  }
}
```

### 正确示例

```js
function foo() {
  var q = t;
}

function bar() {
  q: for (;;) {
    break q;
  }
}
```

### 参考

- [no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals)
