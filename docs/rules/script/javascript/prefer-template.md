# prefer-template

要求使用扩展运算符而非.apply()

### 为什么?

在 ES2015 之前，必须使用 Function.prototype.apply() 调用可变参数函数。

### 错误示例

```js
foo.apply(undefined, args);
foo.apply(null, args);
obj.foo.apply(obj, args);
```

### 正确示例

```js
// Using spread syntax
foo(...args);
obj.foo(...args);

// The `this` binding is different.
foo.apply(obj, args);
obj.foo.apply(null, args);
obj.foo.apply(otherObj, args);

// The argument list is not variadic.
// Those are warned by the `no-useless-call` rule.
foo.apply(undefined, [1, 2, 3]);
foo.apply(null, [1, 2, 3]);
obj.foo.apply(obj, [1, 2, 3]);
```

### 参考

- [prefer-template](https://eslint.org/docs/rules/prefer-template)
