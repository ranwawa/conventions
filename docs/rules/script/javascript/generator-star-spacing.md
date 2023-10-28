# generator-star-spacing

生成器函数的星号前必须有空格，后面不能有空格

### 为什么

保持星号的位置一致,统一风格。

### 建议

星号前添加一个空格，星号后不添加空格。

### 错误示例

```js
function *generator() {}
```

### 正确示例

```js
function* generator() {}
```

### 参考

- [generator-star-spacing](https://eslint.org/docs/rules/generator-star-spacing)
