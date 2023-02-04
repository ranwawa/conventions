# 不允许使用逗号操作符

## Why?

> 它从左到右计算每一个操作数并且返回最后一个操作数的值。然而，这往往掩盖了它的副作用，它的使用经常会发生事故。

## bad

```js
(foo = doSomething()), val;
0, eval("doSomething();");
do {} while ((doSomething(), !!test));
```

## good

```js
foo = (doSomething(), val);
(0, eval)("doSomething();");
do {} while ((doSomething(), !!test));
```

## 参考:

- [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)
