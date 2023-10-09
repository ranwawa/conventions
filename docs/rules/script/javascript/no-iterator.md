# no-iterator

禁止使用**iterator**

### 为什么

`__iterator__`属性是SpiderMonkey对JavaScript的扩展，可以用来创建与JavaScript的`for in`和`for each`结构兼容的自定义迭代器。然而，这个属性现在已经过时，所以不应该使用它。

### 建议

应该使用ECMAScript 6的迭代器和生成器。

### 错误示例

```js
Foo.prototype.__iterator__ = function () {
  return new FooIterator(this);
};
```

### 正确示例

```js
const __iterator__ = foo;
```

### 参考

- [no-iterator](https://eslint.org/docs/rules/no-iterator)
