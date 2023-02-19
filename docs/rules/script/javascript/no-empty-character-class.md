# no-empty-character-class

禁止空块语句

### 为什么?

空块语句在阅读代码时会造成混淆。

### 错误示例

```js
if (foo) {
}
```

### 正确示例

```js
if (foo) {
  // empty
}
```

### 参考

- [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)
