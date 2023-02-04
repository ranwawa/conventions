# 禁止在不允许使用“ undefined”值的情况下使用可选链接

## Why?

> 禁止对关系操作符的左操作数求反。

## bad

```js
(obj?.foo)();
(obj?.foo).bar;
(foo?.()).bar;
```

## good

```js
obj?.foo?.();
obj?.foo();
(obj?.foo ?? bar)();
```

## 参考:

- [no-unused-private-class-members](https://eslint.org/docs/rules/no-unused-private-class-members)
