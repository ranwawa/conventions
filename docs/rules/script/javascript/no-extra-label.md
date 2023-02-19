# no-extra-label

禁止对.bind()的不必要调用

### 为什么?

避免不必要地使用 bind()。

### 错误示例

```js
var x = function () {
  foo();
}.bind(bar);

var x = (() => {
  foo();
}).bind(bar);

var x = (() => {
  this.foo();
}).bind(bar);

var x = function () {
  (function () {
    this.foo();
  })();
}.bind(bar);

var x = function () {
  function foo() {
    this.bar();
  }
}.bind(baz);
```

### 正确示例

```js
var x = function () {
  this.foo();
}.bind(bar);

var x = function (a) {
  return a + 1;
}.bind(foo, bar);
```

### 参考

- [no-extra-label](https://eslint.org/docs/rules/no-extra-label)
