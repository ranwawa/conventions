# no-compare-neg-zero

禁止与-0进行比较

### 为什么

代码`x === -0`会同时通过`+0`和`-0`，如果想要明确区分正负数的情况下就会出问题了。

### 建议

使用`Object.is(x, -0)`进行比较。

### 错误示例

```js
const x = 0;
console.log(x === -0);
```

### 正确示例

```js
const x = 0;
console.log(Object.is(x, -0));
```

### 参考

- [no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)
