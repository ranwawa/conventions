# no-unmodified-loop-condition

限制可以被抛出的异常

### 为什么?

使用 Error 对象最基本的好处是它们能自动地追踪到异常产生和起源的地方。

### 错误示例

```js
throw "error";
```

### 正确示例

```js
throw new Error();
```

### 参考

- [no-unmodified-loop-condition](https://eslint.org/docs/rules/no-unmodified-loop-condition)
