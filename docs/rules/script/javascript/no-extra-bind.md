# no-extra-bind

禁止扩展本机类型

### 为什么?

可以扩展任何对象，包括内置对象或“原生”对象。

### 错误示例

```js
Object.prototype.a = "a";
Object.defineProperty(Array.prototype, "times", { value: 999 });
```

### 正确示例

```js
Object.prototype.a = "a";
```

### 参考

- [no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)
