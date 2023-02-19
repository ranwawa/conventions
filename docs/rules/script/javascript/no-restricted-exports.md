# no-restricted-exports

禁止 Symbolnew 操作符和 new 一起使用

### 为什么?

Symbol 不和 new 操作符一起使用，而是作为函数调用。

### 错误示例

```js
var foo = new Symbol("foo");
```

### 正确示例

```js
var foo = Symbol("foo");

// Ignores shadowed Symbol.
function bar(Symbol) {
  const baz = new Symbol("baz");
}
```

### 参考

- [no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports)
