# 禁止使用 eval()类方法

## Why?

> 这样做会涉及到安全性和性能问题。

## bad

```js
setTimeout("alert('Hi!');", 100);
```

## good

```js
setTimeout(function () {
  alert("Hi!");
}, 100);
```

## 参考:

- [no-invalid-this](https://eslint.org/docs/rules/no-invalid-this)
