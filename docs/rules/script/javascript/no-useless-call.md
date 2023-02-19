# no-useless-call

禁用未使用过的标签

### 为什么?

只声明却没有使用的标签可能是由于不完全的重构造成的错误。

### 错误示例

```js
A: var foo = 0;

B: {
  foo();
}

C: for (let i = 0; i < 10; ++i) {
  foo();
}
```

### 正确示例

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

### 参考

- [no-useless-call](https://eslint.org/docs/rules/no-useless-call)
