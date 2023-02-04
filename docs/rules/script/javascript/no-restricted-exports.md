# 禁止 Symbolnew 操作符和 new 一起使用

## Why?

> Symbol 不和 new 操作符一起使用，而是作为函数调用。

## bad

```js
var foo = new Symbol("foo");
```

## good

```js
var foo = Symbol("foo");

// Ignores shadowed Symbol.
function bar(Symbol) {
  const baz = new Symbol("baz");
}
```

## 参考:

- [no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports)
