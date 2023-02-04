# 限制可以被抛出的异常

## Why?

> 使用 Error 对象最基本的好处是它们能自动地追踪到异常产生和起源的地方。

## bad

```js
throw "error";
```

## good

```js
throw new Error();
```

## 参考:

- [no-unmodified-loop-condition](https://eslint.org/docs/rules/no-unmodified-loop-condition)
