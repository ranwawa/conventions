# for-direction

要求或者禁止 Yoda 条件

### 为什么?

在条件判断中字面量在先而变量在第二的位置。

### 错误示例

```js
if ("red" === color) {
  // ...
}
```

### 正确示例

```js
if (value === "red") {
  // ...
}
```

### 参考

- [for-direction](https://eslint.org/docs/rules/for-direction)
