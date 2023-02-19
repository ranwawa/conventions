# no-delete-var

要求或禁止 var 声明中的初始化

### 为什么?

在 JavaScript 中，变量可在声明时初始化，或者在赋值语句中初始化.

### 错误示例

```js
function foo() {
  var bar = 1;
  let baz = 2;

  for (var i = 0; i < 1; i++) {}
}
```

### 正确示例

```js
function foo() {
  var bar;
  let baz;
  const buzz = 1;
}
```

### 参考

- [no-delete-var](https://eslint.org/docs/rules/no-delete-var)
