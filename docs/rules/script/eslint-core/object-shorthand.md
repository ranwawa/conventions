# object-shorthand

推荐使用对象字面量简写语法

### 为什么

看看苹果手机,设计的多简洁,我们的代码也一样,能够以更易读,更简洁方式展现的就应该更简洁易读.

### 建议

使用对象字面量简写语法。

### 错误示例

```js
const baz = 'ranwawa';

const foo = {
  bar: function () {},
  baz: baz
};
```

### 正确示例

```js
const baz = 'ranwawa';

const foo = {
  bar() {},
  baz
};
```

### 参考

- [object-shorthand](https://eslint.org/docs/rules/object-shorthand)
