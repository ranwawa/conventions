# no-undef

禁止将标识符定义为受限的名字

### 为什么?

将它们定义为其他含义可能会产生意想不到的结果，并使阅读代码的其他人感到困惑。

### 错误示例

```js
function NaN() {}
!function (Infinity) {};
var undefined = 5;
try {
} catch (eval) {}
```

### 正确示例

```js
var Object;
function f(a, b) {}
// Exception: `undefined` may be shadowed if the variable is never assigned a value.
var undefined;
```

### 参考

- [no-undef](https://eslint.org/docs/rules/no-undef)
