# 禁止未使用过的表达式

## Why?

> 对程序状态没有影响的未使用表达式往往是个逻辑错误。

## bad

```js
0;
if (0) 0;
{
  0;
}
f(0), {};
a && b();
a, b();
(c = a), b;
injectGlobal`body{ color: red; }`;
```

## good

```js
{
} // In this context, this is a block statement, not an object literal
{
  myLabel: someVar;
} // In this context, this is a block statement with a label and expression, not an object literal
function namedFunctionDeclaration() {}
(function aGenuineIIFE() {})();
f();
a = 0;
new C();
delete a.b;
void a;
```

## 参考:

- [no-unused-labels](https://eslint.org/docs/rules/no-unused-labels)
