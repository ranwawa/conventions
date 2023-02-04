# 禁用未使用过的标签

## Why?

> 只声明却没有使用的标签可能是由于不完全的重构造成的错误。

## bad

```js
A: var foo = 0;

B: {
  foo();
}

C: for (let i = 0; i < 10; ++i) {
  foo();
}
```

## good

```js
A: {
  if (foo()) {
    break A;
  }
  bar();
}

B: for (let i = 0; i < 10; ++i) {
  if (foo()) {
    break B;
  }
  bar();
}
```

## 参考:

- [no-useless-call](https://eslint.org/docs/rules/no-useless-call)
