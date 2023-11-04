# no-var

禁止使用var

### 为什么

var是老的用法了,有作用域提升的问题,容易出bug.

### 建议

使用`let`或`const`替代`var`。

不变的常量用const,可以修改值的变量用let.

### 错误示例

```js
var foo = 'ranwawa';
```

### 正确示例

```js
const bar = {};
```

### 参考

- [no-var](https://eslint.org/docs/rules/no-var)
