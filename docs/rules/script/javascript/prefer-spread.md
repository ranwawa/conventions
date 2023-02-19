# prefer-spread

要求使用剩余参数而不是 arguments

### 为什么?

ES2015 里有剩余参数。我们可以利用这个特性代替变参函数的 arguments 变量。 arguments 没有 Array.prototype 方法，所以有点不方便。

### 错误示例

```js
function foo() {
  console.log(arguments);
}
function foo(action) {
  var args = Array.prototype.slice.call(arguments, 1);
  action.apply(null, args);
}
function foo(action) {
  var args = [].slice.call(arguments, 1);
  action.apply(null, args);
}
```

### 正确示例

```js
function foo(...args) {
  console.log(args);
}
function foo(action, ...args) {
  action.apply(null, args); // or `action(...args)`, related to the `prefer-spread` rule.
}
// Note: the implicit arguments can be overwritten.
function foo(arguments) {
  console.log(arguments); // This is the first argument.
}
function foo() {
  var arguments = 0;
  console.log(arguments); // This is a local variable.
}
```

### 参考

- [prefer-spread](https://eslint.org/docs/rules/prefer-spread)
