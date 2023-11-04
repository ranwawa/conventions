# no-extend-native

禁止扩展原生对象

### 为什么

在JavaScript中，可以扩展任何对象，包括内置或"原生"对象。有时改变这些原生对象的行为，对不了解的人来说肯定会摸不着头脑，明明官方j标准这样，实际运行结果却是那样。

### 建议

不要直接修改内置对象的原型。

### 错误示例

```js
Object.prototype.a = 'ranwawa';
Object.defineProperty(Array.prototype, 'times', { value: 520 });
```

### 正确示例

```js
var obj = {};
obj.a = 'ranwawa';
```

### 参考

- [no-extend-native](https://eslint.org/docs/rules/no-extend-native)
