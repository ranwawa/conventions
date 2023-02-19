# no-shadow-restricted-names

禁止变量声明与外层作用域的变量同名

### 为什么?

覆盖是指在同一作用域里局部变量和全局变量同名。

### 错误示例

```js
if (true) {
  let b = 6;
}

function b() {}
```

### 正确示例

```js
if (true) {
  let a = 3;
}
let a = 5;
```

### 参考

- [no-shadow-restricted-names](https://eslint.org/docs/rules/no-shadow-restricted-names)
