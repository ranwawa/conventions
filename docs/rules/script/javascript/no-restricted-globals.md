# 不允许标签与变量同名

## Why?

> 该规则旨在通过禁止使用同一作用域下的同名的变量做为标签，来创建更清晰的代码。

## bad

```js
var x = foo;
function bar() {
  x: for (;;) {
    break x;
  }
}
```

## good

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

## 参考:

- [no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals)
