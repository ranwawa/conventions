# no-cond-assign

禁止与 -0 进行比较

### 为什么?

这样比较毫无意义。

### 错误示例

```js
if (x === -0) {
  // doSomething()...
}
```

### 正确示例

```js
if (x === 0) {
  // doSomething()...
}
```

### 参考

- [no-cond-assign](https://eslint.org/docs/rules/no-cond-assign)
