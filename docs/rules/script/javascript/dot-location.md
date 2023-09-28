# dot-location

必须在点操作符前换行

### 为什么?

在JavaScript中，你可以在成员表达式的点操作符前面或后面换行。统一在点操作符前换行风格可以提高代码的可读性，便于团队协作。

### 建议

在需要换行时,换行符写在`.`前面

### 错误示例

```js
const foo = 'ranwawa';

const bar = foo.
  toString();
```

### 正确示例

```js
const foo = 'ranwawa';

const bar = foo
  .toString();
```

### 参考

- [dot-location](https://eslint.org/docs/rules/dot-location)
