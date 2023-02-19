# no-labels

禁止使用**iterator**属性

### 为什么?

JavaScript 的 for in 和 for 每种构造与**iterator**属性创建的自定义迭代器兼容，可以将其取代。

### 错误示例

```js
foo.__iterator__ = function () {};
```

### 正确示例

```js
var __iterator__ = foo; // Not using the `__iterator__` property.
```

### 参考

- [no-labels](https://eslint.org/docs/rules/no-labels)
