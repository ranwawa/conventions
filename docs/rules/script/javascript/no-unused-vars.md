# no-unused-vars

禁止未使用的变量

### 为什么

这些变量占据了代码空间，降低了代码的可阅读性和可维护性。

### 建议

删除未使用的变量。

### 错误示例

```js
const foo = 520;
const bar = 1314;

console.log(foo);
```

### 正确示例

```js
const foo = 520;

console.log(foo);
```

### 参考

- [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)
