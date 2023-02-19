# no-eval

禁止与 null 进行比较

### 为什么?

与 null 进行比较时，null 其本身以及 null 与 undefined 比较结果都为 true。

### 错误示例

```js
if (foo == null) {
  bar();
}
```

### 正确示例

```js
if (foo === null) {
  bar();
}
```

### 参考

- [no-eval](https://eslint.org/docs/rules/no-eval)
