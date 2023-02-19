# array-callback-return

禁止在变量定义之前使用它们

### 为什么?

在 ES6 标准之前的 JavaScript 中，某个作用域中变量和函数的声明会被提前到作用域顶部。

### 错误示例

```js
alert(a);
var a = 10;

f();
function f() {}

function g() {
  return b;
}
var b = 1;

{
  alert(c);
  let c = 1;
}
```

### 正确示例

```js
var a;
a = 10;
alert(a);

function f() {}
f(1);

var b = 1;
function g() {
  return b;
}

{
  let c;
  c++;
}
```

### 参考

- [array-callback-return](https://eslint.org/docs/rules/array-callback-return)
