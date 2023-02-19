# no-undef-init

禁用未声明的变量，除非它们在 /_global _/ 注释中被提到

### 为什么?

此规则可帮助你定位由变量漏写、参数名漏写和意外的隐式全局变量声明所导致的潜在引用错误。

### 错误示例

```js
var a = someFunction();
b = 10;
```

### 正确示例

```js
var a = someFunction();
b = 10;
```

### 参考

- [no-undef-init](https://eslint.org/docs/rules/no-undef-init)
