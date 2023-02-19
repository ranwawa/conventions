# no-class-assign

强制 generator 函数中 \* 号周围使用一致的空格

### 为什么?

在 ECMAScript 6 中，Generators 是一个新的函数类型，随着时间的推移可以返回多个值。

### 错误示例

```js
function* generator() {}

var shorthand = { *generator() {} };
```

### 正确示例

```js
function* generator() {}

var anonymous = function* () {};

var shorthand = { *generator() {} };
```

### 参考

- [no-class-assign](https://eslint.org/docs/rules/no-class-assign)
