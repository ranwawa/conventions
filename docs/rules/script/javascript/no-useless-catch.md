# 禁用不必要的 .call() 和 .apply()

## Why?

> 函数的调用可以写成 Function.prototype.call() 和 Function.prototype.apply()，但是 Function.prototype.call() 和 Function.prototype.apply() 比正常的函数调用效率低。

## bad

```js
foo.call(undefined, 1, 2, 3);
foo.apply(undefined, [1, 2, 3]);
```

## good

```js
foo.call(obj, 1, 2, 3);
foo.apply(obj, [1, 2, 3]);
```

## 参考:

- [no-useless-catch](https://eslint.org/docs/rules/no-useless-catch)
