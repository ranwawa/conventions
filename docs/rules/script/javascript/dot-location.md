# dot-location

使用点表示法访问属性

### 为什么?

在 JavaScript 中，可以使用点表示法(foo.bar)或方括号表示法(foo["bar"])访问属性。但是，点表示法通常是首选的，因为它更容易阅读，更少冗长，并且与激进的 JavaScript 最小化器一起工作更好。

### 错误示例

```js
var x = foo["bar"];
```

### 正确示例

```js
var x = foo.bar;
```

### 参考

- [dot-location](https://eslint.org/docs/rules/dot-location)
