# symbol-description

创建Symbol时必须添加描述

### 为什么

添加描述可以方便调试，当打印一个Symbol时，会显示描述信息，有助于在调试过程中识别Symbol。

### 建议

创建Symbol时，添加描述信息。

### 错误示例

```js
const foo = Symbol();
```

### 正确示例

```js
const foo = Symbol('zhangshan');
```

### 参考

- [symbol-description](https://eslint.org/docs/rules/symbol-description)
