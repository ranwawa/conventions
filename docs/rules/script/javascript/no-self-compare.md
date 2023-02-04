# 禁止自身赋值

## Why?

> 自身赋值不起任何作用，可能是由于不完整的重构造成的错误。

## bad

```js
foo = foo;
[a, b] = [a, b];
[a, ...b] = [x, ...b];
({ a, b } = { a, x });
```

## good

```js
obj.a = obj.a;
obj.a.b = obj.a.b;
obj["a"] = obj["a"];
obj[a] = obj[a];
```

## 参考:

- [no-self-compare](https://eslint.org/docs/rules/no-self-compare)
