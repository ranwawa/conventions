# no-empty

禁止空的代码块

### 为什么

虽然空的代码块在技术上不是错误，但它们又没得啥子实际用处。

### 建议

如果代码块是空的，应该在其中添加注释，说明为什么要保留这个空的代码块。或者干脆直接删除掉。

### 错误示例

```js
const foo = 520;

if (foo) {
}
```

### 正确示例

```js
const foo = 520;

if (foo) {
  // empty
}
```

### 参考

- [no-empty](https://eslint.org/docs/rules/no-empty)
