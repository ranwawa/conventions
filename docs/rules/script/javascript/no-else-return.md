# no-else-return

禁止使用看起来像除法的正则表达式

### 为什么?

使用除法操作符对理解阅读 JavaScript 代码有歧义。

### 错误示例

```js
function bar() {
  return /=foo/;
}
```

### 正确示例

```js
function bar() {
  return /[=]foo/;
}
```

### 参考

- [no-else-return](https://eslint.org/docs/rules/no-else-return)
