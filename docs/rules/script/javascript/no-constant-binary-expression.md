# no-constant-binary-expression

禁用 console

### 为什么?

console 是用于浏览器中调试用的，线上 web 应用应该剔除 console 的调用。

### 错误示例

```js
console.log("Log a debug level message.");
```

### 正确示例

```js
// custom console
Console.log("Hello world!");
```

### 参考

- [no-constant-binary-expression](https://eslint.org/docs/rules/no-constant-binary-expression)
