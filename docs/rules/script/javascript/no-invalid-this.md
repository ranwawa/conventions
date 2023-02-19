# no-invalid-this

禁止使用 eval()类方法

### 为什么?

这样做会涉及到安全性和性能问题。

### 错误示例

```js
setTimeout("alert('Hi!');", 100);
```

### 正确示例

```js
setTimeout(function () {
  alert("Hi!");
}, 100);
```

### 参考

- [no-invalid-this](https://eslint.org/docs/rules/no-invalid-this)
