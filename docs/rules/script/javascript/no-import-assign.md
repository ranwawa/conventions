# no-import-assign

禁止重新分配 function 声明

### 为什么?

因为重写/重新分配以 FunctionDeclaration 形式编写的函数通常表明存在错误或问题。

### 错误示例

```js
function foo() {}
foo = bar;
```

### 正确示例

```js
var foo = function () {};
foo = bar;
```

### 参考

- [no-import-assign](https://eslint.org/docs/rules/no-import-assign)
