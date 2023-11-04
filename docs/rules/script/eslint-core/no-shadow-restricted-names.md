# no-shadow-restricted-names

禁止覆盖JavaScript中的特殊变量名

### 为什么

在JavaScript中，存在很多特殊的全局变量,比如: `NaN`，`Infinity`，`undefined`，`eval`和`arguments`。

如果重新定义这些变量,别人调用的时候肯定会摸不着头脑。

### 建议

换个名字

### 错误示例

```js
function NaN() {}
```

### 正确示例

```js
function customNan() {}
```

### 参考

- [no-shadow-restricted-names](https://eslint.org/docs/rules/no-shadow-restricted-names)
