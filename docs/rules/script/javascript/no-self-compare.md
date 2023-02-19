# no-self-compare

禁止自身赋值

### 为什么?

自身赋值不起任何作用，可能是由于不完整的重构造成的错误。

### 错误示例

```js
foo = foo;
[a, b] = [a, b];
[a, ...b] = [x, ...b];
({ a, b } = { a, x });
```

### 正确示例

```js
obj.a = obj.a;
obj.a.b = obj.a.b;
obj["a"] = obj["a"];
obj[a] = obj[a];
```

### 参考

- [no-self-compare](https://eslint.org/docs/rules/no-self-compare)
